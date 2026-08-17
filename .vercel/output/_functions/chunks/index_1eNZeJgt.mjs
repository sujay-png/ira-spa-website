import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { i as renderScript, r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
//#region src/pages/download-brochure/index.astro
var download_brochure_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Download Brochure | Ira Spa",
		"description": "Download the Ira Spa brochure to explore our holistic massage and wellness rituals.",
		"data-astro-cid-x27nqx2l": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="terms-banner" data-astro-cid-x27nqx2l><div class="container" data-astro-cid-x27nqx2l><h1 data-astro-cid-x27nqx2l>Download Brochure</h1></div></section><section class="brochure-content" data-astro-cid-x27nqx2l><div class="container container--narrow" data-astro-cid-x27nqx2l><div class="form-wrapper" data-astro-cid-x27nqx2l><form id="brochure-form" class="brochure-form" data-astro-cid-x27nqx2l><div class="form-group" data-astro-cid-x27nqx2l><label for="name" data-astro-cid-x27nqx2l>Name</label><input type="text" id="name" name="name" placeholder="Name" required data-astro-cid-x27nqx2l></div><div class="form-group" data-astro-cid-x27nqx2l><label for="phone" data-astro-cid-x27nqx2l>Phone Number</label><input type="tel" id="phone" name="phone" placeholder="Phone no:" required data-astro-cid-x27nqx2l></div><button type="submit" class="btn-submit" data-astro-cid-x27nqx2l>DOWNLOAD BROCHURE</button></form><div id="success-message" class="success-message hidden" data-astro-cid-x27nqx2l><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x27nqx2l><polyline points="20 6 9 17 4 12" data-astro-cid-x27nqx2l></polyline></svg>Your submission was successful.</div></div></div></section>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-x27nqx2l": true })}` })}${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/download-brochure/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/download-brochure/index.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/download-brochure/index.astro";
var $$url = "/download-brochure";
//#endregion
//#region \0virtual:astro:page:src/pages/download-brochure/index@_@astro
var page = () => download_brochure_exports;
//#endregion
export { page };
