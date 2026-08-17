import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
/* empty css                        */
//#region src/data/footspa.ts
var footSpaTreatments = [
	{
		slug: "classic-paraffin-wax-pedicure",
		name: "Classic Paraffin Wax Pedicure",
		subtitle: "Melon & Litchi",
		category: "Foot Care",
		image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSgy9eS8MQDXTT4ob-M8I2e_Qi8nRGXqOlPd4DiFgkNLAGiF6uULBO91XYdfZPVthyk-E-0JBrZH3dJHvc",
		prices: [{
			label: "45 min",
			price: "₹800"
		}]
	},
	{
		slug: "anti-oxidant-pedicure",
		name: "Anti-Oxidant Pedicure",
		subtitle: "Tangy Lemon",
		category: "Foot Care",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSvg-9pbGjSn_X2-wq9fYg4UjO5PMXox_YxDMRO_9PpJMlFicA-VwRPap4PpgKt7oHeJ3Sv57kx9sVzVz8",
		prices: [{
			label: "60 min",
			price: "₹800"
		}]
	},
	{
		slug: "moisturizing-exotic-pedicure",
		name: "Moisturizing Exotic Pedicure",
		subtitle: "Berry",
		category: "Foot Care",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRClPzvJ4Fa3wbaLlAJMS0lniFW5UK7lqb0kheylYvS9UHjzTPK151UVXmfpEFcsa-YWlStxw5ARWumUAw",
		prices: [{
			label: "60 min",
			price: "₹800"
		}]
	},
	{
		slug: "brightening-de-tan-pedicure",
		name: "Brightening De-Tan Pedicure",
		subtitle: "Sheen",
		category: "Foot Care",
		image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQj80WU9zEbeqn2gVsF1klzBEU0ZyjaArIf7328H2kLnh69BZ7PHU_10rU_8sCNJ7PwfB8UWj99hKvBZQQ",
		prices: [{
			label: "60 min",
			price: "₹1,200"
		}]
	},
	{
		slug: "de-stress-refreshment",
		name: "De-Stress Refreshment",
		subtitle: "Mint",
		category: "Foot Care",
		image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTMTtOEyFEn64p1Dm5WzYwAOy0hKxgQd9js0upDoLl5J97ITfaf3miYjYHV-zebxlixgQziPdhcND-lq88",
		prices: [{
			label: "60 min",
			price: "₹1,000"
		}]
	}
];
//#endregion
//#region src/pages/ourservice/foot-spa.astro
var foot_spa_exports = /* @__PURE__ */ __exportAll({
	default: () => $$FootSpa,
	file: () => $$file,
	url: () => $$url
});
var $$FootSpa = createComponent(($$result, $$props, $$slots) => {
	const treatments = footSpaTreatments;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Foot Spa | Ira Spa Rituals",
		"description": "A soothing pedicure ritual using different essential oils for relaxing and de-stressing tired feet.",
		"image": "/images/serviceimage2.webp"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/serviceimage2.webp');`, "style")}><div class="container"><span class="eyebrow">Foot Care</span><h1>Foot Spa in Mangalore & Kalaburagi</h1><p>A soothing massage using different kinds of essential oils for relaxing and de-stressing.</p></div></section><section class="treatments"><div class="container">${treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}><div class="treatment-image"><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"></div><div class="treatment-content"><span class="eyebrow">${treatment.category}</span><h2>${treatment.name}</h2>${treatment.subtitle && renderTemplate`<p class="treatment-subtitle">${treatment.subtitle}</p>`}<div class="divider"></div><div class="price-row">${treatment.prices.map((p) => renderTemplate`<div class="price-col"><span class="price-label">${p.label}</span><span class="price-value">${p.price}</span></div>`)}</div><div class="divider"></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}>Book This Service</a></div></div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, {})}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Foot Spa",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/foot-spa.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/foot-spa.astro";
var $$url = "/ourservice/foot-spa";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/foot-spa@_@astro
var page = () => foot_spa_exports;
//#endregion
export { page };
