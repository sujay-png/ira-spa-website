import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, t as defineStyleVars, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
//#region src/data/herbaltherapy.ts
var herbalTherapyTreatments = [{
	slug: "herbal-potli",
	name: "Herbal Potli",
	description: "Potli therapy is performed using heated herbal pouches. These are used to massage and provide heat to the whole body or specific areas like the lower back, neck and joints that helps to Reduces in ammation, Improves mobility & flexibility, Relieves pain, Sti ness in joints and Muscular spasms. ",
	image: "/images/Signature-Herbal-Gold-Facial-Instant-Glow-Naturally.webp",
	prices: [{
		label: "60 min",
		price: "₹3,000"
	}, {
		label: "90 min",
		price: "₹4,000"
	}]
}, {
	slug: "hot-stone-therapy",
	name: "Hot Stone Therapy",
	description: "Hot stone therapy involves placing hot stones on several spots of the body. The power from the hot stones and warm herbal oil will balance the circulation of blood and improve your excretory system. This massage is suitable for those who are tired from hard work, insufficient sleep, and suffered from abnormal excretory system.",
	image: "/images/hot-stonetherapy.jpg",
	prices: [{
		label: "60 min",
		price: "₹3,200"
	}, {
		label: "90 min",
		price: "₹4,800"
	}]
}];
//#endregion
//#region src/pages/ourservice/herbal-therapy.astro
var herbal_therapy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HerbalTherapy,
	file: () => $$file,
	url: () => $$url
});
var $$HerbalTherapy = createComponent(($$result, $$props, $$slots) => {
	const treatments = herbalTherapyTreatments;
	const $$definedVars = defineStyleVars([{}]);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Herbal Therapy | Ira Spa Rituals",
		"description": "Explore our herbal therapies — Herbal Potli and Hot Stone Therapy — using medieval poultices and hot stones with herbal oil.",
		"image": "/images/Signature-Herbal-Gold-Facial-Instant-Glow-Naturally.webp",
		"data-astro-cid-oiovnsjt": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/Signature-Herbal-Gold-Facial-Instant-Glow-Naturally.webp');; ${$$definedVars}`, "style")} data-astro-cid-oiovnsjt><div class="container"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt><h1${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>Herbal Therapy in Mangalore & Kalaburagi</h1><p${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>To provide deep relaxation while relieving stress and fatigue, and improving health by using the medieval 'poultices' and 'hot stones with herbal oil'.</p></div></section><section class="treatments"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt><div class="container"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>${treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt><div class="treatment-image"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt></div><div class="treatment-content"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt><h2${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>${treatment.name}</h2><p class="description"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>${treatment.description}</p><div class="divider"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt></div><div class="price-row"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>${treatment.prices.map((p) => renderTemplate`<div class="price-col"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt><span class="price-label"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>${p.label}</span><span class="price-value"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>${p.price}</span></div>`)}</div><div class="divider"${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}${addAttribute($$definedVars, "style")} data-astro-cid-oiovnsjt>Book This Service</a></div></div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-oiovnsjt": true })}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Herbal Therapy",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/herbal-therapy.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/herbal-therapy.astro";
var $$url = "/ourservice/herbal-therapy";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/herbal-therapy@_@astro
var page = () => herbal_therapy_exports;
//#endregion
export { page };
