// src/lib/wordpress/categories.ts
import { fetchGraphQL } from "../graphql/client";
import { ALL_CATEGORIES_QUERY } from "../graphql/queries/categories";
import type { WPTerm } from "../../types/wordpress";

let cachedCategories: WPTerm[] | null = null;
let lastCategoriesFetch = 0;
const CATEGORIES_CACHE_TTL = 60 * 60 * 1000; // 60 minutes

export async function getCategories(): Promise<WPTerm[]> {
	if (cachedCategories && Date.now() - lastCategoriesFetch < CATEGORIES_CACHE_TTL) {
		return cachedCategories;
	}

	const data = await fetchGraphQL(ALL_CATEGORIES_QUERY);
	if (!data?.categories?.nodes) {
		return cachedCategories || [];
	}

	const mapped = data.categories.nodes
		.map((node: any) => ({
			id: node.databaseId,
			name: node.name,
			slug: node.slug,
			taxonomy: "category"
		}))
		.filter((c: WPTerm) => c.slug !== "uncategorized" && c.slug !== "blog");

	cachedCategories = mapped;
	lastCategoriesFetch = Date.now();
	return mapped;
}
