import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { appendToGoogleSheet } from '../../lib/googleSheets';

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

      // 1. Upsert Customer Data
      const { error: customerError } = await supabase
          .from('Customers')
          .upsert(
              {
                  customer_name: name,
                  customer_phone: phone,
                  business_ref: STORE_ID
              },
              { onConflict: 'customer_phone' }
          );

      if (customerError) throw new Error(`Customer Error: ${customerError.message}`);

      // 2. Insert Booking Data
      if (date && time && services) {
          const start_time = new Date(`${date}T${time}:00`).toISOString();
          const { error: bookingError } = await supabase
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

    // Run both operations in parallel
    const [supabaseResult, sheetResult] = await Promise.all([
      runSupabaseOperations().catch(e => ({ success: false, error: e.message })),
      appendToGoogleSheet(data)
    ]);

    // If Supabase failed, surface it even if Sheets succeeded —
    // don't mask a real DB error behind a partial success
    if (!supabaseResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'error' in supabaseResult ? supabaseResult.error : 'Supabase operation failed',
          details: {
            supabase: 'error' in supabaseResult ? supabaseResult.error : null,
            sheets: 'error' in sheetResult ? sheetResult.error : null
          }
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(JSON.stringify({ success: true, supabaseResult, sheetResult }), {
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