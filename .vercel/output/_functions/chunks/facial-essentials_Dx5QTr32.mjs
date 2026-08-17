import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
/* empty css                        */
//#region src/data/FacialEssential.ts
var facialEssentialGroups = [{
	heading: "Clean-Ups",
	treatments: [{
		slug: "watermelon-cleanup",
		name: "Watermelon",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTNgMhrtGghE_pvGjgDOiHjsh1ooQdbcaoHyJQT7ratgFs2VWgF5q_nmTY2CeE-d7-5lOghdnT6XtutecA",
		prices: [{
			label: "30 min",
			price: "₹700"
		}]
	}, {
		slug: "strawberry-cleanup",
		name: "Strawberry",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSZLtePnsjhiue19az_cfzeJKGpZouLMMkTZgOczDta4LIaroP7S_uoqDaxMt9Qp2BnGjRMwPlZGhBzzNc",
		prices: [{
			label: "30 min",
			price: "₹800"
		}]
	}]
}, {
	heading: "Facial-Essential",
	treatments: [
		{
			slug: "hydra-dew",
			name: "Hydra Dew",
			subtitle: "Dry & Dehydrated",
			category: "Facial-Essential",
			description: "Moisturize and soothe your delicate and dry skin with comfort and protection.",
			image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSTn1SijHXEKksEczrG8EpioG2eRHxRWwiCeyGMMMhoVqJfRN_0l_-JbEUZ3u3oIZ6ELvNYVfp6ZE1RGME",
			prices: [{
				label: "45 min",
				price: "₹1,000"
			}]
		},
		{
			slug: "rejuvenating-facial",
			name: "Rejuvenating",
			subtitle: "All Skin Type",
			category: "Facial-Essential",
			description: "Revitalize to leave a supple skin by proper exfoliation and enhanced blood circulation.",
			image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQLmC8wi4AoD9FeF-fXqda_Hzizm0ST-JBIePM6lcirUPqnljnotQ2nJ0z3PZTDo0T8ofHUv5mp9uhPd2I",
			prices: [{
				label: "45 min",
				price: "₹1,200"
			}]
		},
		{
			slug: "herbal-pearl",
			name: "Herbal Pearl",
			category: "Facial-Essential",
			description: "A natural retreat for your skin from hand-picked herbal ingredients.",
			image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTEnpOtGfSxBJK2GXQI2NU9Q0mGQXrgusRlF610DqFsgr6lJrAFAEHeDsU1h6zjcGuTQvw4hkcOlWem4jA",
			prices: [{
				label: "45 min",
				price: "₹2,000"
			}]
		}
	]
}];
//#endregion
//#region src/pages/ourservice/facial-essentials.astro
var facial_essentials_exports = /* @__PURE__ */ __exportAll({
	default: () => $$FacialEssentials,
	file: () => $$file,
	url: () => $$url
});
var $$FacialEssentials = createComponent(($$result, $$props, $$slots) => {
	const groups = facialEssentialGroups;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Clean-Ups And Facial-Essential | Ira Spa Rituals",
		"description": "Let our well trained aestheticians take over and grant you a nourished, smooth, and radiant skin.",
		"image": "/images/serviceimage2.webp"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/serviceimage2.webp');`, "style")}><div class="container"><h1>Clean-Ups And Facial-Essential in Mangalore & Kalaburagi</h1><p>Let our well trained aestheticians take over and grant you a nourished, smooth, and radiant skin.</p></div></section><section class="treatments"><div class="container">${groups.map((group) => renderTemplate`<div class="treatment-group"><h2 class="group-heading">${group.heading}</h2>${group.treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}><div class="treatment-image"><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"></div><div class="treatment-content"><h2>${treatment.name}</h2><div class="divider"></div><div class="price-row">${treatment.prices.map((p) => renderTemplate`<div class="price-col"><span class="price-label">${p.label}</span><span class="price-value">${p.price}</span></div>`)}</div><div class="divider"></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}>Book This Service</a></div></div>`)}</div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, {})}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Clean-Ups And Facial-Essential",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/facial-essentials.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/facial-essentials.astro";
var $$url = "/ourservice/facial-essentials";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/facial-essentials@_@astro
var page = () => facial_essentials_exports;
//#endregion
export { page };
