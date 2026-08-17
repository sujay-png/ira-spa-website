import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
/* empty css                        */
//#region src/data/ThaiTheraphy.ts
var thaiTherapyTreatments = [{
	slug: "TRADITIONAL THAI THERAPY ",
	name: "Traditional Thai Therapy",
	description: "Thai aroma massage blends East and West techniques. Thai-style deep massage with stretching is combined with sophisticated western-style. This Therapy slowly takes away the strain of the daily grind, revitalizes your energy and leaves you feeling totally relaxed and peaceful. ",
	image: "/images/TraditionalThai.jpg",
	prices: [
		{
			label: "60 min",
			price: "₹2,400"
		},
		{
			label: "90 min",
			price: "3,600"
		},
		{
			label: "120 min",
			price: "4,800"
		}
	]
}, {
	slug: "bamboo-therapy",
	name: "Bamboo Therapy",
	description: "Bamboo massage is yet another unusual type of holistic treatment. It is believed that bamboo massage has many healing properties which help to alleviate muscle tension, pain and ache, improve joint function, increase circulation and helps to enhance quality of sleep.",
	image: "/images/spa-salon.jpg",
	prices: [{
		label: "60 min",
		price: "₹4,000"
	}, {
		label: "90 min",
		price: "₹5,500"
	}]
}];
//#endregion
//#region src/pages/ourservice/thai-therapy.astro
var thai_therapy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ThaiTherapy,
	file: () => $$file,
	url: () => $$url
});
var $$ThaiTherapy = createComponent(($$result, $$props, $$slots) => {
	const treatments = thaiTherapyTreatments;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Thai Therapy | Ira Spa Rituals",
		"description": "An ancient healing system combining acupressure, energy line work and assisted yoga postures — Traditional Thai Therapy and Bamboo Therapy.",
		"image": "/images/spa-salon.jpg"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/spa-salon.jpg');`, "style")}><div class="container"><span class="eyebrow">Signature Therapies</span><h1>Thai Therapy in Mangalore & Kalaburagi</h1><p>An ancient healing system that combines broad and targeted acupressure, stimulation and manipulation of energy lines and assisted yoga postures.</p></div></section><section class="treatments"><div class="container">${treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}><div class="treatment-image"><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"></div><div class="treatment-content"><h2>${treatment.name}</h2><p class="description">${treatment.description}</p><div class="divider"></div><div class="price-row">${treatment.prices.map((p) => renderTemplate`<div class="price-col"><span class="price-label">${p.label}</span><span class="price-value">${p.price}</span></div>`)}</div><div class="divider"></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}>Book This Service</a></div></div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, {})}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Thai Therapy",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/thai-therapy.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/thai-therapy.astro";
var $$url = "/ourservice/thai-therapy";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/thai-therapy@_@astro
var page = () => thai_therapy_exports;
//#endregion
export { page };
