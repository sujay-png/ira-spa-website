import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createAstro } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
import { a as getCategories, c as getPostCategories, l as stripHtml, o as getFeaturedImage, r as getAllPosts } from "./wordpress_Dx8ZMR5Y.mjs";
//#region src/pages/blogs/page/[page].astro
var _page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Page,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://www.iraspa.in");
var $$Page = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Page;
	const { page } = Astro.params;
	const pageNum = Number(page);
	if (isNaN(pageNum) || pageNum < 2) return Astro.redirect("/blogs");
	const allPosts = await getAllPosts();
	const categories = await getCategories();
	const totalPages = Math.max(1, Math.ceil(allPosts.length / 9));
	if (pageNum > totalPages) return new Response(null, {
		status: 404,
		statusText: "Not found"
	});
	const pagePosts = allPosts.slice((pageNum - 1) * 9, pageNum * 9);
	const truncate = (text, length) => {
		if (!text) return "";
		return text.length > length ? text.substring(0, length) + "..." : text;
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `The Serenity Feed — Page ${pageNum} | Ira Spa Journal`,
		"description": "Wellness notes from Ira Spa — mindfulness, treatment guides and rituals for a calmer, more restorative life.",
		"noindex": true,
		"data-astro-cid-sgrpv53p": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="feed-header-section" data-astro-cid-sgrpv53p><div class="container" data-astro-cid-sgrpv53p><div class="feed__header" data-astro-cid-sgrpv53p><h2 data-astro-cid-sgrpv53p>The Serenity Feed <span class="page-count" data-astro-cid-sgrpv53p>— Page ${pageNum}</span></h2><nav class="feed__nav" data-astro-cid-sgrpv53p><a href="/blogs" class="active" data-astro-cid-sgrpv53p>ALL POSTS</a>${categories.slice(0, 3).map((cat) => renderTemplate`<a${addAttribute(`/blogs/category/${cat.slug}`, "href")} data-astro-cid-sgrpv53p>${cat.name.toUpperCase()}</a>`)}</nav></div></div></section><section class="bottom-grid-section" data-astro-cid-sgrpv53p><div class="container" data-astro-cid-sgrpv53p><div class="bottom-grid" data-astro-cid-sgrpv53p>${pagePosts.map((post) => renderTemplate`<article class="post post--text-badge" data-astro-cid-sgrpv53p><a${addAttribute(`/blogs/${post.slug}`, "href")} data-astro-cid-sgrpv53p><div class="post__image-wrap" data-astro-cid-sgrpv53p><img${addAttribute(getFeaturedImage(post).src, "src")}${addAttribute(getFeaturedImage(post).alt, "alt")} data-astro-cid-sgrpv53p></div><span class="eyebrow eyebrow--small" data-astro-cid-sgrpv53p>${getPostCategories(post)[0]?.name.toUpperCase() || "WELLNESS"}</span><h3 data-astro-cid-sgrpv53p>${stripHtml(post.title.rendered)}</h3><p data-astro-cid-sgrpv53p>${truncate(stripHtml(post.excerpt.rendered), 110)}</p></a></article>`)}</div><nav class="pagination" aria-label="Blog pagination" data-astro-cid-sgrpv53p>${pageNum > 1 && (pageNum === 2 ? renderTemplate`<a href="/blogs" class="link-arrow" data-astro-cid-sgrpv53p><span class="arrow" data-astro-cid-sgrpv53p>&larr;</span> NEWER</a>` : renderTemplate`<a${addAttribute(`/blogs/page/${pageNum - 1}`, "href")} class="link-arrow" data-astro-cid-sgrpv53p><span class="arrow" data-astro-cid-sgrpv53p>&larr;</span> NEWER</a>`)}<span class="pagination__status" data-astro-cid-sgrpv53p>PAGE ${pageNum} OF ${totalPages}</span>${pageNum < totalPages && renderTemplate`<a${addAttribute(`/blogs/page/${pageNum + 1}`, "href")} class="link-arrow" data-astro-cid-sgrpv53p>Next <span class="arrow" data-astro-cid-sgrpv53p>&rarr;</span></a>`}</nav></div></section>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sgrpv53p": true })}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/blogs/page/[page].astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/blogs/page/[page].astro";
var $$url = "/blogs/page/[page]";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs/page/[page]@_@astro
var page = () => _page__exports;
//#endregion
export { page };
