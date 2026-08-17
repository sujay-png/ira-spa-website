import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
/* empty css                        */
//#region src/data/quickmassage.ts
var quickMassageTreatments = [
	{
		slug: "foot-reflexology",
		name: "Foot Reflexology",
		category: "Express Rituals",
		description: "Stimulate and massage pressure points in legs to release the tension and relax tired legs.",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRGgBFg2htq-ipleCwggttC5Dn1L3lBkA0qv18E4nK2ys3--RZMsMkq1-yALvY-bGff3R5skK5wXFeYMTk",
		prices: [{
			label: "30 min",
			price: "₹1,200"
		}]
	},
	{
		slug: "back-massage",
		name: "Back",
		subtitle: "Without Shower",
		category: "Express Rituals",
		image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT9cmjRfXGeePwoPVxTLcngu4uUGnEAofT4KTwcqtVZe2q35qTVRUn9cPv7jYy7NUl60wDK3nZXDJ6WTlc",
		prices: [{
			label: "30 min",
			price: "₹1,600"
		}]
	},
	{
		slug: "head-neck-shoulder",
		name: "Head, Neck & Shoulder",
		category: "Express Rituals",
		description: "Relax, de-stress, revive, and renew the body with perfect massage strokes",
		image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAgARiggqL8k_nvr9V48ojSCMYE92cbNT0K12gg-KDrHT_KNU2lb3T7HDbnKJzBYfy-4rlrjUOxNivfaI",
		prices: [{
			label: "30 min",
			price: "₹1,300"
		}]
	}
];
//#endregion
//#region src/pages/ourservice/quick-massage.astro
var quick_massage_exports = /* @__PURE__ */ __exportAll({
	default: () => $$QuickMassage,
	file: () => $$file,
	url: () => $$url
});
var $$QuickMassage = createComponent(($$result, $$props, $$slots) => {
	const treatments = quickMassageTreatments;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Quick Massage | Ira Spa Rituals",
		"description": "Express rituals for relaxing and de-stressing — Foot Reflexology, Back, and Head, Neck & Shoulder massage.",
		"image": "/images/spa-salon.jpg"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/spa-salon.jpg');`, "style")}><div class="container"><span class="eyebrow">Express Rituals</span><h1>Quick Massage in Mangalore & Kalaburagi</h1><p>A soothing massage using different kinds of essential oils for relaxing and de-stressing.</p></div></section><section class="treatments"><div class="container">${treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}><div class="treatment-image"><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"></div><div class="treatment-content"><span class="eyebrow">${treatment.category}</span><h2>${treatment.name}</h2>${treatment.subtitle && renderTemplate`<p class="treatment-subtitle">${treatment.subtitle}</p>`}${treatment.description && renderTemplate`<p class="description">${treatment.description}</p>`}<div class="divider"></div><div class="price-row">${treatment.prices.map((p) => renderTemplate`<div class="price-col"><span class="price-label">${p.label}</span><span class="price-value">${p.price}</span></div>`)}</div><div class="divider"></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}>Book This Service</a></div></div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, {})}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Quick Massage",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/quick-massage.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/quick-massage.astro";
var $$url = "/ourservice/quick-massage";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/quick-massage@_@astro
var page = () => quick_massage_exports;
//#endregion
export { page };
