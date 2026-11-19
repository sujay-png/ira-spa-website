// src/lib/wordpress/posts.ts
import { fetchGraphQL } from "../graphql/client";
import { ALL_POSTS_QUERY, SINGLE_POST_QUERY, POST_WITH_RELATED_QUERY } from "../graphql/queries/posts";
import type { WPPost, WPTerm, FeaturedImage } from "../../types/wordpress";
import { stripHtml } from "../../utils/formatters";

export const POSTS_PER_PAGE = 9;
const FALLBACK_IMAGE = "/images/spa-treatment.webp";

// In-memory caching with TTL
let cachedPosts: WPPost[] | null = null;
let lastPostsFetch = 0;
const POSTS_CACHE_TTL = 30 * 60 * 1000; // 30 minutes

export async function getAllPosts(): Promise<WPPost[]> {
	if (cachedPosts && Date.now() - lastPostsFetch < POSTS_CACHE_TTL) {
		return cachedPosts;
	}

	const data = await fetchGraphQL(ALL_POSTS_QUERY);
	if (!data?.posts?.nodes) {
		return cachedPosts || [];
	}

	// Map the GraphQL response back to the REST shape so .astro files don't break
	const mapped = data.posts.nodes.map((node: any) => ({
		id: node.databaseId,
		slug: node.slug,
		date: node.date,
		modified: node.modified,
		title: { rendered: node.title || "" },
		excerpt: { rendered: node.excerpt || "" },
		content: { rendered: "" },
		_embedded: {
			author: [{ name: node.author?.node?.name || "Ira Spa Team" }],
			"wp:featuredmedia": [{
				source_url: node.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE,
				alt_text: node.featuredImage?.node?.altText || node.title || "Ira Spa",
				media_details: {
					sizes: node.featuredImage?.node?.mediaDetails?.sizes || []
				}
			}],
			"wp:term": [
				node.categories?.nodes?.map((cat: any) => ({
					id: cat.databaseId,
					name: cat.name,
					slug: cat.slug,
					taxonomy: "category"
				})) || []
			]
		}
	}));

	cachedPosts = mapped;
	lastPostsFetch = Date.now();
	return mapped;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
	const data = await fetchGraphQL(SINGLE_POST_QUERY, { slug });
	if (!data?.post) return null;

	const node = data.post;
	
	// Map the single GraphQL response back to REST shape
	return {
		id: node.databaseId,
		slug: node.slug,
		date: node.date,
		modified: node.modified,
		title: { rendered: node.title || "" },
		excerpt: { rendered: node.excerpt || "" },
		content: { rendered: (node.content || "").replace(/https?:\/\/(?:www\.)?iraspa\.in\/services\/?/g, "/ourservice/") },
		_embedded: {
			author: [{ name: node.author?.node?.name || "Ira Spa Team" }],
			"wp:featuredmedia": [{
				source_url: node.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE,
				alt_text: node.featuredImage?.node?.altText || node.title || "Ira Spa",
				media_details: {
					sizes: node.featuredImage?.node?.mediaDetails?.sizes || []
				}
			}],
			"wp:term": [
				node.categories?.nodes?.map((cat: any) => ({
					id: cat.databaseId,
					name: cat.name,
					slug: cat.slug,
					taxonomy: "category"
				})) || []
			]
		}
	};
}

export async function getPostWithRelated(slug: string): Promise<{ post: WPPost | null; recentPosts: WPPost[] }> {
	const data = await fetchGraphQL(POST_WITH_RELATED_QUERY, { slug });
	if (!data?.post) {
		return { post: null, recentPosts: [] };
	}

	const mapNode = (node: any, includeContent: boolean): WPPost => ({
		id: node.databaseId,
		slug: node.slug,
		date: node.date,
		modified: node.modified,
		title: { rendered: node.title || "" },
		excerpt: { rendered: node.excerpt || "" },
		content: {
			rendered: includeContent
				? (node.content || "").replace(/https?:\/\/(?:www\.)?iraspa\.in\/services\/?/g, "/ourservice/")
				: ""
		},
		_embedded: {
			author: [{ name: node.author?.node?.name || "Ira Spa Team" }],
			"wp:featuredmedia": [{
				source_url: node.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE,
				alt_text: node.featuredImage?.node?.altText || node.title || "Ira Spa",
				media_details: {
					sizes: node.featuredImage?.node?.mediaDetails?.sizes || []
				}
			}],
			"wp:term": [
				node.categories?.nodes?.map((cat: any) => ({
					id: cat.databaseId,
					name: cat.name,
					slug: cat.slug,
					taxonomy: "category"
				})) || []
			]
		}
	});

	const post = mapNode(data.post, true);
	const recentPosts = (data.recentPosts?.nodes || []).map((n: any) => mapNode(n, false));

	return { post, recentPosts };
}

export function getFeaturedImage(post: WPPost): FeaturedImage {
	const media = post._embedded?.["wp:featuredmedia"]?.[0] as any;
	const originalUrl = media?.source_url || FALLBACK_IMAGE;
	const alt = media?.alt_text || stripHtml(post.title?.rendered || "Ira Spa");

	const sizesObj = media?.media_details?.sizes;

	const getSizeUrl = (name: string): string | undefined => {
		if (!sizesObj) return undefined;
		if (Array.isArray(sizesObj)) {
			const s = sizesObj.find((item: any) => item?.name === name);
			return s?.source_url || s?.sourceUrl;
		}
		const s = (sizesObj as Record<string, any>)[name];
		return s?.source_url || s?.sourceUrl;
	};

	const thumbnail = getSizeUrl("thumbnail");
	const medium = getSizeUrl("medium");
	const wcSingle = getSizeUrl("woocommerce_single");
	const mediumLarge = getSizeUrl("medium_large");
	const large = getSizeUrl("large");

	const cardSrc = wcSingle || mediumLarge || medium || originalUrl;

	const srcsetEntries: string[] = [];
	if (sizesObj && typeof sizesObj === "object" && !Array.isArray(sizesObj)) {
		const sortedSizes = Object.values(sizesObj)
			.filter((s: any) => s && (s.source_url || s.sourceUrl) && s.width && s.width >= 300 && s.width <= 1200)
			.sort((a: any, b: any) => a.width - b.width);

		const seenWidths = new Set<number>();
		for (const s of sortedSizes as any[]) {
			const width = s.width;
			const url = s.source_url || s.sourceUrl;
			if (!seenWidths.has(width)) {
				seenWidths.add(width);
				srcsetEntries.push(`${url} ${width}w`);
			}
		}
	}

	if (srcsetEntries.length === 0) {
		if (medium) srcsetEntries.push(`${medium} 300w`);
		if (wcSingle) srcsetEntries.push(`${wcSingle} 600w`);
		if (mediumLarge && mediumLarge !== wcSingle) srcsetEntries.push(`${mediumLarge} 768w`);
		if (large) srcsetEntries.push(`${large} 1024w`);
	}

	const srcset = srcsetEntries.length > 0 ? srcsetEntries.join(", ") : undefined;

	return {
		src: cardSrc,
		alt,
		width: 600,
		height: 400,
		thumbnail: thumbnail || cardSrc,
		medium: medium || cardSrc,
		large: large || originalUrl,
		srcset,
	};
}

export function getAuthorName(post: WPPost): string {
	return post._embedded?.author?.[0]?.name || "Ira Spa Team";
}

export function getPostCategories(post: WPPost): WPTerm[] {
	const termGroups = post._embedded?.["wp:term"] || [];
	return termGroups.flat().filter((t) => t.taxonomy === "category" && t.slug !== "uncategorized" && t.slug !== "blog");
}
