import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createAstro } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
import { c as getPostCategories, i as getAuthorName, l as stripHtml, n as formatDate, o as getFeaturedImage, r as getAllPosts, s as getPostBySlug, t as estimateReadTime } from "./wordpress_Dx8ZMR5Y.mjs";
import { t as $$PostCard } from "./PostCard_CsPJ88Bw.mjs";
//#region src/pages/blogs/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://www.iraspa.in");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const post = slug ? await getPostBySlug(slug) : null;
	if (!post) return new Response(null, {
		status: 404,
		statusText: "Not found"
	});
	const allPosts = await getAllPosts();
	const image = getFeaturedImage(post);
	const categories = getPostCategories(post);
	const author = getAuthorName(post);
	const readTime = estimateReadTime(post.content.rendered);
	const description = stripHtml(post.excerpt.rendered).slice(0, 160);
	const title = stripHtml(post.title.rendered);
	const related = allPosts.filter((p) => p.id !== post.id && getPostCategories(p).some((c) => categories.some((pc) => pc.slug === c.slug))).slice(0, 3);
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: title,
		image: image.src,
		datePublished: post.date,
		dateModified: post.modified,
		author: {
			"@type": "Organization",
			name: author
		},
		publisher: {
			"@type": "Organization",
			name: "Ira Spa"
		},
		mainEntityOfPage: `https://iraspa.in/blogs/${post.slug}/`
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${title} | Ira Spa Journal`,
		"description": description,
		"image": image.src,
		"data-astro-cid-kt6wuhv6": true
	}, { "default": ($$result) => renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd))}<\/script>${maybeRenderHead($$result)}<article class="post" data-astro-cid-kt6wuhv6><header class="post-header page-banner"${addAttribute(`background-image: url('${image.src}')`, "style")} data-astro-cid-kt6wuhv6><div class="container" data-astro-cid-kt6wuhv6>${categories[0] && renderTemplate`<span class="eyebrow" data-astro-cid-kt6wuhv6>${categories[0].name}</span>`}<h1 data-astro-cid-kt6wuhv6>${title}</h1><div class="post-header__meta" data-astro-cid-kt6wuhv6><span data-astro-cid-kt6wuhv6>${author}</span><span class="dot" data-astro-cid-kt6wuhv6>&bull;</span><span data-astro-cid-kt6wuhv6>${formatDate(post.date)}</span><span class="dot" data-astro-cid-kt6wuhv6>&bull;</span><span data-astro-cid-kt6wuhv6>${readTime}</span></div></div></header><div class="container container--narrow post__body" data-astro-cid-kt6wuhv6><div class="prose" data-astro-cid-kt6wuhv6>${unescapeHTML(post.content.rendered)}</div><div class="post__cta" data-astro-cid-kt6wuhv6><h2 data-astro-cid-kt6wuhv6>Ready to feel the difference?</h2><p data-astro-cid-kt6wuhv6>Bring this ritual to life at Ira Spa, Mangalore or Kalaburagi.</p><a href="/book-an-appointment" class="btn-primary" data-astro-cid-kt6wuhv6>Book an Appointment</a></div><a href="/blogs/" class="link-arrow post__back" data-astro-cid-kt6wuhv6><span data-astro-cid-kt6wuhv6>&larr;</span> Back to The Serenity Feed</a></div>${related.length > 0 && renderTemplate`<section class="related" data-astro-cid-kt6wuhv6><div class="container" data-astro-cid-kt6wuhv6><h2 data-astro-cid-kt6wuhv6>Related Reading</h2><div class="related__grid" data-astro-cid-kt6wuhv6>${related.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"post": p,
		"data-astro-cid-kt6wuhv6": true
	})}`)}</div></div></section>`}</article>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-kt6wuhv6": true })}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/blogs/[slug].astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/blogs/[slug].astro";
var $$url = "/blogs/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
