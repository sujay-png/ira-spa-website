//#region src/lib/wordpress.ts
var WP_GRAPHQL_URL = `https://dashboard.iraspa.in/graphql`;
var FALLBACK_IMAGE = "/images/spa-treatment.jpg";
async function fetchGraphQL(query, variables = {}) {
	try {
		const res = await fetch(WP_GRAPHQL_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			cache: "no-store",
			body: JSON.stringify({
				query,
				variables
			})
		});
		if (!res.ok) {
			console.error(`[graphql] Responded with ${res.status}`);
			return null;
		}
		const json = await res.json();
		if (json.errors) {
			console.error("[graphql] Errors:", json.errors);
			return null;
		}
		return json.data;
	} catch (err) {
		console.error("[graphql] Network Error:", err);
		return null;
	}
}
async function getAllPosts() {
	const data = await fetchGraphQL(`
		query AllPosts {
			posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
				nodes {
					databaseId
					slug
					date
					modified
					title
					excerpt
					content
					author { node { name } }
					featuredImage { node { sourceUrl altText } }
					categories { nodes { databaseId name slug } }
				}
			}
		}
	`);
	if (!data?.posts?.nodes) return [];
	return data.posts.nodes.map((node) => ({
		id: node.databaseId,
		slug: node.slug,
		date: node.date,
		modified: node.modified,
		title: { rendered: node.title },
		excerpt: { rendered: node.excerpt },
		content: { rendered: node.content },
		_embedded: {
			author: [{ name: node.author?.node?.name || "Ira Spa Team" }],
			"wp:featuredmedia": [{
				source_url: node.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE,
				alt_text: node.featuredImage?.node?.altText || node.title
			}],
			"wp:term": [node.categories?.nodes?.map((cat) => ({
				id: cat.databaseId,
				name: cat.name,
				slug: cat.slug,
				taxonomy: "category"
			})) || []]
		}
	}));
}
async function getPostBySlug(slug) {
	const data = await fetchGraphQL(`
		query SinglePost($slug: ID!) {
			post(id: $slug, idType: SLUG) {
				databaseId
				slug
				date
				modified
				title
				excerpt
				content
				author { node { name } }
				featuredImage { node { sourceUrl altText } }
				categories { nodes { databaseId name slug } }
			}
		}
	`, { slug });
	if (!data?.post) return null;
	const node = data.post;
	return {
		id: node.databaseId,
		slug: node.slug,
		date: node.date,
		modified: node.modified,
		title: { rendered: node.title },
		excerpt: { rendered: node.excerpt },
		content: { rendered: node.content },
		_embedded: {
			author: [{ name: node.author?.node?.name || "Ira Spa Team" }],
			"wp:featuredmedia": [{
				source_url: node.featuredImage?.node?.sourceUrl || FALLBACK_IMAGE,
				alt_text: node.featuredImage?.node?.altText || node.title
			}],
			"wp:term": [node.categories?.nodes?.map((cat) => ({
				id: cat.databaseId,
				name: cat.name,
				slug: cat.slug,
				taxonomy: "category"
			})) || []]
		}
	};
}
async function getCategories() {
	const data = await fetchGraphQL(`
		query AllCategories {
			categories(first: 100, where: { hideEmpty: true }) {
				nodes {
					databaseId
					name
					slug
				}
			}
		}
	`);
	if (!data?.categories?.nodes) return [];
	return data.categories.nodes.map((node) => ({
		id: node.databaseId,
		name: node.name,
		slug: node.slug,
		taxonomy: "category"
	})).filter((c) => c.slug !== "uncategorized");
}
function getFeaturedImage(post) {
	const media = post._embedded?.["wp:featuredmedia"]?.[0];
	return {
		src: media?.source_url || FALLBACK_IMAGE,
		alt: media?.alt_text || stripHtml(post.title.rendered)
	};
}
function getAuthorName(post) {
	return post._embedded?.author?.[0]?.name || "Ira Spa Team";
}
function getPostCategories(post) {
	return (post._embedded?.["wp:term"] || []).flat().filter((t) => t.taxonomy === "category" && t.slug !== "uncategorized");
}
function stripHtml(html) {
	if (!html) return "";
	return html.replace(/<[^>]*>/g, " ").replace(/&hellip;/g, "…").replace(/&amp;/g, "&").replace(/&#8217;|&#039;/g, "'").replace(/&#8216;/g, "'").replace(/&#8220;|&#8221;/g, "\"").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}
function estimateReadTime(html) {
	if (!html) return "1 min read";
	const words = stripHtml(html).split(" ").filter(Boolean).length;
	return `${Math.max(1, Math.round(words / 200))} min read`;
}
function formatDate(dateString) {
	if (!dateString) return "";
	return new Date(dateString).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
//#endregion
export { getCategories as a, getPostCategories as c, getAuthorName as i, stripHtml as l, formatDate as n, getFeaturedImage as o, getAllPosts as r, getPostBySlug as s, estimateReadTime as t };
