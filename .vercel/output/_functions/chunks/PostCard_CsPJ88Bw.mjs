import { f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createAstro } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { c as getPostCategories, l as stripHtml, n as formatDate, o as getFeaturedImage } from "./wordpress_Dx8ZMR5Y.mjs";
//#region src/components/blogs/PostCard.astro
createAstro("https://www.iraspa.in");
var $$PostCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostCard;
	const { post } = Astro.props;
	const image = getFeaturedImage(post);
	const categories = getPostCategories(post);
	const excerpt = stripHtml(post.excerpt.rendered);
	return renderTemplate`${maybeRenderHead($$result)}<article class="post-card" data-astro-cid-5f4ifda2><a${addAttribute(`/blogs/${post.slug}/`, "href")} class="post-card__link" data-astro-cid-5f4ifda2><div class="post-card__image" data-astro-cid-5f4ifda2>${categories[0] && renderTemplate`<span class="post-card__badge" data-astro-cid-5f4ifda2>${categories[0].name}</span>`}<img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} loading="lazy" width="480" height="300" data-astro-cid-5f4ifda2></div><div class="post-card__body" data-astro-cid-5f4ifda2><h3 data-astro-cid-5f4ifda2>${stripHtml(post.title.rendered)}</h3><p data-astro-cid-5f4ifda2>${excerpt}</p><div class="post-card__meta" data-astro-cid-5f4ifda2><span data-astro-cid-5f4ifda2>${formatDate(post.date)}</span></div></div></a></article>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/blogs/PostCard.astro", void 0);
//#endregion
export { $$PostCard as t };
