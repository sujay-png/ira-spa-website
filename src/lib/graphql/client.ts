// src/lib/graphql/client.ts

export const WP_BASE_URL = import.meta.env.PUBLIC_WP_BASE_URL || "https://dashboard.iraspa.in";
export const WP_GRAPHQL_URL = `${WP_BASE_URL}/graphql`;

export async function fetchGraphQL<T = any>(query: string, variables = {}): Promise<T | null> {
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 9000); // 9-second timeout guard

		const res = await fetch(WP_GRAPHQL_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query, variables }),
			signal: controller.signal,
		});
		clearTimeout(timeoutId);

		if (!res.ok) {
			console.error(`[graphql] Responded with ${res.status}`);
			return null;
		}

		const json = await res.json();
		if (json.errors) {
			console.error("[graphql] Errors:", json.errors);
			return null;
		}
		return json.data as T;
	} catch (err) {
		console.error("[graphql] Network Error:", err);
		return null;
	}
}
