import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { createClient } from "@supabase/supabase-js";
import { google } from "googleapis";
var supabase = createClient("https://dksyhipjzsppdhnkbcnh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrc3loaXBqenNwcGRobmtiY25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjE2MDcsImV4cCI6MjEwMDE5NzYwN30.FYSktXOpumzNIIBne-OfK2DBn3dSAElL6zOKHAen-9A");
//#endregion
//#region src/lib/googleSheets.ts
async function appendToGoogleSheet(payload) {
	try {
		const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
		const privateKey = process.env.GOOGLE_PRIVATE_KEY;
		const sheetId = process.env.GOOGLE_SHEET_ID;
		if (!serviceAccountEmail || !privateKey || !sheetId) {
			console.error("Google Sheets credentials not fully set. Skipping sheets append.");
			return {
				success: false,
				error: "Credentials missing"
			};
		}
		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: serviceAccountEmail,
				private_key: privateKey.replace(/\\n/g, "\n")
			},
			scopes: ["https://www.googleapis.com/auth/spreadsheets"]
		});
		const sheets = google.sheets({
			version: "v4",
			auth
		});
		const format12Hour = (timeStr) => {
			if (!timeStr || !timeStr.includes(":")) return timeStr;
			const [h, m] = timeStr.split(":");
			let hour = parseInt(h, 10);
			const ampm = hour >= 12 ? "PM" : "AM";
			hour = hour % 12 || 12;
			return `'${hour}:${m} ${ampm}`;
		};
		return {
			success: true,
			data: (await sheets.spreadsheets.values.append({
				spreadsheetId: sheetId,
				range: "Sheet1!A:H",
				valueInputOption: "USER_ENTERED",
				requestBody: { values: [[
					(/* @__PURE__ */ new Date()).toISOString(),
					payload.name || "",
					`'${payload.phone || ""}`,
					payload.location || "",
					payload.date || "",
					format12Hour(payload.time || ""),
					payload.services || payload.service || "",
					payload.message || ""
				]] }
			})).data
		};
	} catch (error) {
		console.error("Failed to append to Google Sheets:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Unknown error"
		};
	}
}
//#endregion
//#region src/pages/api/book.ts
var book_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		let { name, phone, location, date, time, services, service } = data;
		services = services || service;
		if (!name || !phone) return new Response(JSON.stringify({
			success: false,
			error: "Name and phone are required"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const runSupabaseOperations = async () => {
			const STORE_ID = 1;
			const { error: customerError } = await supabase.from("Customers").upsert({
				customer_name: name,
				customer_phone: phone,
				business_ref: STORE_ID
			}, { onConflict: "customer_phone" });
			if (customerError) throw new Error(`Customer Error: ${customerError.message}`);
			if (date && time && services) {
				const start_time = (/* @__PURE__ */ new Date(`${date}T${time}:00`)).toISOString();
				const { error: bookingError } = await supabase.from("Booking").insert([{
					customer_ref: name,
					cust_phno: phone,
					location: location || "",
					services: services || "",
					start_time,
					available_slot: start_time,
					confirmed_time: time,
					booking_status: "Pending",
					duration: 60,
					business_ref: STORE_ID
				}]);
				if (bookingError) throw new Error(`Booking Error: ${bookingError.message}`);
			} else console.warn("Skipped Booking insert — missing field(s):", {
				date,
				time,
				services
			});
			return { success: true };
		};
		const [supabaseResult, sheetResult] = await Promise.all([runSupabaseOperations().catch((e) => ({
			success: false,
			error: e.message
		})), appendToGoogleSheet(data)]);
		if (!supabaseResult.success) return new Response(JSON.stringify({
			success: false,
			error: "error" in supabaseResult ? supabaseResult.error : "Supabase operation failed",
			details: {
				supabase: "error" in supabaseResult ? supabaseResult.error : null,
				sheets: "error" in sheetResult ? sheetResult.error : null
			}
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({
			success: true,
			supabaseResult,
			sheetResult
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("API Route Error:", error);
		return new Response(JSON.stringify({
			success: false,
			error: "Internal Server Error"
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/book@_@ts
var page = () => book_exports;
//#endregion
export { page };
