import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../lib/supabaseAdmin';
import { appendToGoogleSheet } from '../../lib/googleSheets';

const submitToElementor = async (data: any) => {
  const WP_BASE_URL = import.meta.env.PUBLIC_WP_BASE_URL || "https://dashboard.iraspa.in";
  const url = `${WP_BASE_URL}/wp-admin/admin-ajax.php`;

  const formData = new URLSearchParams();
  formData.append('action', 'elementor_pro_forms_send_form');
  formData.append('form_id', '92cbdaf');
  formData.append('post_id', '180');
  formData.append('queried_id', '180');

  // Ensure both "service" and "services" keys are present —
  // Elementor's field is named "service" (singular), our app/DB use "services" (plural)
  const submitData = { ...data };
  const serviceValue = submitData.services || submitData.service;
  if (serviceValue) {
    submitData.service = serviceValue;
    submitData.services = serviceValue;
  }

  // Sanitize phone for Elementor's strict validation (remove spaces)
  if (submitData.phone) {
    submitData.phone = submitData.phone.replace(/[\s()]/g, '');
  }

  for (const key in submitData) {
    formData.append(`form_fields[${key}]`, submitData[key]);
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    // Elementor usually returns JSON
    const result = await response.json().catch(() => null);
    if (result && !result.success) {
      console.error('Elementor error response:', result);
      throw new Error(result.data?.message || 'Elementor submission failed');
    }
    return { success: true };
  } catch (error: any) {
    console.error('Elementor submission error:', error);
    throw new Error(error.message || 'Failed to submit to Elementor');
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Extract fields — note: "services" matches the form's <select name="services">
    // Some forms might use "service" instead of "services"
    let { name, phone, location, date, time, services, service } = data;
    services = services || service;

    if (!name || !phone) {
      return new Response(JSON.stringify({ success: false, error: 'Name and phone are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare Supabase operations
    const runSupabaseOperations = async () => {
      const STORE_ID = 1;

      // 1. Check and Insert Customer Data
      const { data: existingCustomer, error: selectError } = await supabaseAdmin
        .from('Customers')
        .select('customer_phone')
        .eq('customer_phone', phone)
        .maybeSingle();

      if (selectError) {
        throw new Error(`Customer Select Error: ${selectError.message}`);
      }

      if (!existingCustomer) {
        const { error: customerError } = await supabaseAdmin
          .from('Customers')
          .insert([{
            customer_name: name,
            customer_phone: phone,
            business_ref: STORE_ID
          }]);

        if (customerError) throw new Error(`Customer Insert Error: ${customerError.message}`);
      }

      // 2. Insert Booking Data
      if (date && time && services) {
        const start_time = new Date(`${date}T${time}:00`).toISOString();
        const { error: bookingError } = await supabaseAdmin
          .from('Booking')
          .insert([{
            customer_ref: name,
            cust_phno: phone,
            location: location || '',
            services: services || '',
            start_time: start_time,
            available_slot: start_time,
            confirmed_time: time,
            booking_status: 'Pending',
            duration: 60,
            business_ref: STORE_ID
          }]);

        if (bookingError) throw new Error(`Booking Error: ${bookingError.message}`);
      } else {
        // Log so a missing field doesn't fail silently again in future
        console.warn('Skipped Booking insert — missing field(s):', { date, time, services });
      }
      return { success: true };
    };

    // Run all three operations in parallel
    const [supabaseResult, elementorResult, sheetResult] = await Promise.all([
      runSupabaseOperations().catch(e => {
        console.error('Supabase error:', e.message);
        return { success: false, error: e.message };
      }),
      submitToElementor(data).catch(e => ({ success: false, error: e.message })),
      appendToGoogleSheet(data).catch(e => ({ success: false, error: e.message }))
    ]);

    // If Supabase failed, surface it even if Elementor succeeded —
    // don't mask a real DB error behind a partial success
    if (!supabaseResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'error' in supabaseResult ? supabaseResult.error : 'Supabase operation failed',
          details: {
            supabase: 'error' in supabaseResult ? supabaseResult.error : null,
            elementor: 'error' in elementorResult ? elementorResult.error : null,
            sheets: 'error' in sheetResult ? sheetResult.error : null
          }
        }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
      );
    }

    return new Response(JSON.stringify({ success: true, supabaseResult, elementorResult, sheetResult }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};