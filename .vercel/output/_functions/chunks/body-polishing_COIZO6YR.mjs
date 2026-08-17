import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
/* empty css                        */
//#region src/data/BodyPolishing.ts
var bodyPolishingTreatments = [
	{
		slug: "full-body-black-currant",
		name: "Full Body – Black Currant",
		subtitle: "Dry Skin",
		category: "Skin Renewal",
		image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR8BPSjtNNDxktFHUU2xsiO4O_0yvqSUfbCEesxCcRpjkH2ncUSy6ozkzMpfdAEw2LgucWEORwvtz5DwRY",
		prices: [{
			label: "60 min",
			price: "₹3,500"
		}]
	},
	{
		slug: "full-body-chocolate",
		name: "Full Body – Chocolate",
		subtitle: "Brightening and Nourishing",
		category: "Skin Renewal",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ5pUQ87o-IuoPz3tW_D4Ad7ztA9xPpCOv4NGLguY9d34vwEDXbALkIq038ka4-Hwg3qxoQWvNst5oqA3E",
		prices: [{
			label: "60 min",
			price: "₹3,500"
		}]
	},
	{
		slug: "full-body-orange",
		name: "Full Body – Orange",
		subtitle: "De-tan",
		category: "Skin Renewal",
		image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTJK8kpkgOAqfXebSlNBsu792TSjS_npcXjjWDZqJioxlz6QnkejGX1cL9n9VjBWeJ06ipy_XLWLCb_nDo",
		prices: [{
			label: "60 min",
			price: "₹3,500"
		}]
	}
];
//#endregion
//#region src/pages/ourservice/body-polishing.astro
var body_polishing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$BodyPolishing,
	file: () => $$file,
	url: () => $$url
});
var $$BodyPolishing = createComponent(($$result, $$props, $$slots) => {
	const treatments = bodyPolishingTreatments;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Body Polishing | Ira Spa Rituals",
		"description": "A popular body treatment that exfoliates and hydrates your skin — Black Currant, Chocolate, and Orange full-body polishing.",
		"image": "/images/serviceimage1.webp"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/serviceimage1.webp');`, "style")}><div class="container"><h1>Body Polishing in Mangalore & Kalaburagi</h1><p>A popular body treatment that exfoliates and hydrates your skin, leaving it smooth, soft and glowing with a uniform tone across the body.</p></div></section><section class="treatments"><div class="container">${treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}><div class="treatment-image"><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"></div><div class="treatment-content"><span class="eyebrow">${treatment.category}</span><h2>${treatment.name}</h2>${treatment.subtitle && renderTemplate`<p class="treatment-subtitle">${treatment.subtitle}</p>`}<div class="divider"></div><div class="price-row">${treatment.prices.map((p) => renderTemplate`<div class="price-col"><span class="price-label">${p.label}</span><span class="price-value">${p.price}</span></div>`)}</div><div class="divider"></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}>Book This Service</a></div></div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, {})}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Body Polishing",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/body-polishing.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/body-polishing.astro";
var $$url = "/ourservice/body-polishing";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/body-polishing@_@astro
var page = () => body_polishing_exports;
//#endregion
export { page };
