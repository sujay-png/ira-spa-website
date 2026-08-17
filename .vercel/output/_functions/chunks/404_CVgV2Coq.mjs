import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Page Not Found | Ira Spa",
		"noindex": true,
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="not-found" data-astro-cid-ibpinaeu><div class="container" data-astro-cid-ibpinaeu><h1 data-astro-cid-ibpinaeu>404</h1><h2 data-astro-cid-ibpinaeu>Page Not Found</h2><p data-astro-cid-ibpinaeu>We're sorry, the page you're looking for doesn't exist or has been moved.</p><div class="actions" data-astro-cid-ibpinaeu><a href="/" class="btn-primary" data-astro-cid-ibpinaeu>Return Home</a><a href="/BookAnAppointment" class="btn-secondary" data-astro-cid-ibpinaeu>Book an Appointment</a></div></div></section>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ibpinaeu": true })}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/404.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
