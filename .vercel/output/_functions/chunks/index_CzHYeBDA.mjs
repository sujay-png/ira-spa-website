import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createAstro } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
import { a as getCategories, c as getPostCategories, l as stripHtml, o as getFeaturedImage, r as getAllPosts } from "./wordpress_Dx8ZMR5Y.mjs";
import { t as $$PostCard } from "./PostCard_CsPJ88Bw.mjs";
//#region src/components/blogs/JournalHero.astro
createAstro("https://www.iraspa.in");
var $$JournalHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$JournalHero;
	const { post } = Astro.props;
	const image = getFeaturedImage(post);
	const category = getPostCategories(post)[0]?.name ?? "Feature Story";
	const excerpt = stripHtml(post.excerpt.rendered);
	return renderTemplate`${maybeRenderHead($$result)}<section class="journal-hero" data-astro-cid-njq4cnzr><div class="journal-hero__bg"${addAttribute(`background-image: linear-gradient(to bottom, rgba(11, 11, 10, 0.25) 0%, rgba(11, 11, 10, 0.45) 50%, rgba(11, 11, 10, 0.94) 100%), url('${image.src}')`, "style")} data-astro-cid-njq4cnzr></div><div class="container journal-hero__container" data-astro-cid-njq4cnzr><span class="eyebrow" data-astro-cid-njq4cnzr>${category}</span><h1 data-astro-cid-njq4cnzr>${stripHtml(post.title.rendered)}</h1><div class="journal-hero__row" data-astro-cid-njq4cnzr><p data-astro-cid-njq4cnzr>${excerpt}</p><a${addAttribute(`/blogs/${post.slug}/`, "href")} class="link-arrow" data-astro-cid-njq4cnzr>Read The Article <span data-astro-cid-njq4cnzr>&rarr;</span></a></div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/blogs/JournalHero.astro", void 0);
//#endregion
//#region src/components/blogs/PostGrid.astro
createAstro("https://www.iraspa.in");
var $$PostGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostGrid;
	const { posts, categories, activeCategorySlug, currentPage, totalPages, basePath } = Astro.props;
	function pageHref(path, page) {
		return page <= 1 ? `${path}/` : `${path}/page/${page}/`;
	}
	return renderTemplate`${maybeRenderHead($$result)}<section class="feed" id="feed" data-astro-cid-cm5o3nyy><div class="container" data-astro-cid-cm5o3nyy><div class="feed__header" data-astro-cid-cm5o3nyy><h2 data-astro-cid-cm5o3nyy>The Serenity Feed</h2><nav class="feed__categories" aria-label="Blog categories" data-astro-cid-cm5o3nyy><a href="/blogs/"${addAttribute(`feed__category ${!activeCategorySlug ? "active" : ""}`, "class")} data-astro-cid-cm5o3nyy>All Posts</a>${categories.map((c) => renderTemplate`<a${addAttribute(`/blogs/category/${c.slug}/`, "href")}${addAttribute(`feed__category ${activeCategorySlug === c.slug ? "active" : ""}`, "class")} data-astro-cid-cm5o3nyy>${c.name}</a>`)}</nav></div>${posts.length === 0 ? renderTemplate`<p class="feed__empty" data-astro-cid-cm5o3nyy>No posts yet — check back soon.</p>` : renderTemplate`<div class="feed__grid" data-astro-cid-cm5o3nyy>${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"post": post,
		"data-astro-cid-cm5o3nyy": true
	})}`)}</div>`}${totalPages > 1 && renderTemplate`<nav class="pagination" aria-label="Blog pagination" data-astro-cid-cm5o3nyy>${currentPage > 1 && renderTemplate`<a${addAttribute(pageHref(basePath, currentPage - 1), "href")} class="pagination__link" data-astro-cid-cm5o3nyy>&larr; Newer</a>`}<span class="pagination__status" data-astro-cid-cm5o3nyy>Page ${currentPage} of ${totalPages}</span>${currentPage < totalPages && renderTemplate`<a${addAttribute(pageHref(basePath, currentPage + 1), "href")} class="pagination__link" data-astro-cid-cm5o3nyy>Next &rarr;</a>`}</nav>`}</div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/blogs/PostGrid.astro", void 0);
//#endregion
//#region src/pages/blogs/index.astro
var blogs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://www.iraspa.in");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	Astro.response.headers.set("Cache-Control", "s-maxage=60, stale-while-revalidate=3600");
	const allPosts = await getAllPosts();
	const categories = await getCategories();
	const totalPages = Math.max(1, Math.ceil(allPosts.length / 9));
	const featured = allPosts[0];
	const pagePosts = allPosts.slice(0, 9);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "The Serenity Feed | Ira Spa Journal",
		"description": "Wellness notes from Ira Spa — mindfulness, treatment guides and rituals for a calmer, more restorative life."
	}, { "default": ($$result) => renderTemplate`${featured && renderTemplate`${renderComponent($$result, "JournalHero", $$JournalHero, { "post": featured })}`}${renderComponent($$result, "PostGrid", $$PostGrid, {
		"posts": pagePosts,
		"categories": categories,
		"currentPage": 1,
		"totalPages": totalPages,
		"basePath": "/blogs"
	})}${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/blogs/index.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/blogs/index.astro";
var $$url = "/blogs";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs/index@_@astro
var page = () => blogs_exports;
//#endregion
export { page };
