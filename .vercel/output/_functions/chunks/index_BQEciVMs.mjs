import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createAstro } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { i as renderScript, r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
import { t as $$MenuList } from "./MenuList_Yx7EJlkq.mjs";
import { t as serviceData } from "./services_DqAZY7HW.mjs";
//#region src/components/services/ServiceType.astro
var $$ServiceType = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="browse" data-astro-cid-2tjutpc6><div class="container" data-astro-cid-2tjutpc6><div class="section-heading" data-astro-cid-2tjutpc6><span class="eyebrow" data-astro-cid-2tjutpc6>Browse By Category</span><h2 data-astro-cid-2tjutpc6>Explore Ira Spa Services</h2></div><div class="browse__search" data-astro-cid-2tjutpc6><input type="text" id="service-search" placeholder="Search services…" autocomplete="off" data-astro-cid-2tjutpc6></div><div class="browse__grid" data-astro-cid-2tjutpc6>${Object.entries(serviceData || {}).map(([slug, service]) => renderTemplate`<a class="browse__card"${addAttribute(`/ourservice/${slug}`, "href")}${addAttribute(service.name.toLowerCase(), "data-name")} data-astro-cid-2tjutpc6><img${addAttribute(service.image, "src")}${addAttribute(service.name, "alt")} width="320" height="220" loading="lazy" data-astro-cid-2tjutpc6><div class="browse__card-body" data-astro-cid-2tjutpc6><h3 data-astro-cid-2tjutpc6>${service.name}</h3></div></a>`)}</div><p id="no-results" class="browse__no-results" hidden data-astro-cid-2tjutpc6>No services matched your search.</p></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/services/ServiceType.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/services/ServiceType.astro", void 0);
//#endregion
//#region src/components/services/service_description.astro
createAstro("https://www.iraspa.in");
var $$ServiceDescription = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ServiceDescription;
	const { slug, title, description, price60, price90, image, reverse = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(`ritual ${reverse ? "ritual--reverse" : ""}`, "class")}${addAttribute(slug, "id")} data-astro-cid-7xdj7sge><div class="container ritual__grid" data-astro-cid-7xdj7sge><div class="ritual__media" data-astro-cid-7xdj7sge><img${addAttribute(image, "src")}${addAttribute(title, "alt")} width="560" height="420" loading="lazy" data-astro-cid-7xdj7sge></div><div class="ritual__content" data-astro-cid-7xdj7sge><h2 data-astro-cid-7xdj7sge>${title}</h2><p data-astro-cid-7xdj7sge>${description}</p><div class="ritual__prices" data-astro-cid-7xdj7sge><div data-astro-cid-7xdj7sge><span data-astro-cid-7xdj7sge>60 min</span><strong data-astro-cid-7xdj7sge>${price60}</strong></div><div data-astro-cid-7xdj7sge><span data-astro-cid-7xdj7sge>90 min</span><strong data-astro-cid-7xdj7sge>${price90}</strong></div></div><a href="/book-an-appointment" class="btn-primary" data-astro-cid-7xdj7sge>Book This Service</a></div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/services/service_description.astro", void 0);
//#endregion
//#region src/pages/ourservice/index.astro
var ourservice_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Rituals & Services | Ira Spa Massage Treatments",
		"description": "Explore Ira Spa's full menu of rituals — body massage, herbal therapy, body polishing and foot spa treatments in Mangalore and Kalaburagi, with transparent pricing."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner" style="background-image: url('/images/spa-treatment.jpg');"><div class="container"><h1>Best Spa Services</h1><p>Ira Spa offers a range of massage and beauty spa therapy</p></div></section>${renderComponent($$result, "ServiceType", $$ServiceType, {})}<div class="ritual-showcase">${Object.entries(serviceData).map(([slug, service], i) => renderTemplate`${renderComponent($$result, "ServiceDescription", $$ServiceDescription, {
		...service,
		"slug": slug,
		"reverse": i % 2 === 1
	})}`)}</div>${renderComponent($$result, "MenuList", $$MenuList, {})}${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/index.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/index.astro";
var $$url = "/ourservice";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/index@_@astro
var page = () => ourservice_exports;
//#endregion
export { page };
