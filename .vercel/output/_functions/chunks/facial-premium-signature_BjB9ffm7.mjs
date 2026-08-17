import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
/* empty css                        */
//#region src/data/facialpremiumsignature.ts
var facialPremiumSignatureGroups = [{
	heading: "Facial-Premium",
	treatments: [{
		slug: "deep-pore-cleansing",
		name: "Deep Pore Cleansing",
		subtitle: "Oily Skin",
		category: "Facial-Premium",
		description: "Specially formulated with Larrea divaricata extract and Enantia chlorantha extract, softens oily skin resulting in a fresher complexion. Helps to control oil production eliminate breakouts",
		image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRa8mw-ODA1vds7cWimEqqFrnQiwJPAXGAzt5N21kYFP-F7uOFhAVBcdQR4ZPos_QhsTuSMi0ZeNeb-7KM",
		prices: [{
			label: "60 min",
			price: "₹2,400"
		}]
	}, {
		slug: "whitening-facial",
		name: "Whitening Facial",
		subtitle: "Dull & Uneven Skin Tone",
		category: "Facial-Premium",
		description: "One of the most effective, fastest and safest approaches to skin lightening by reducing Melanin formation. Contains broad-spectrum sun filters which minimize photo damage",
		image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQaO9U20mWm3FiDYufzCAiQ44OQ_Xz3tzk8czBgH9lrCmyio4Kyum-ujme4IccoMyz6nHhnMvi6rW9rSJk",
		prices: [{
			label: "60 min",
			price: "₹2,500"
		}]
	}]
}, {
	heading: "Facial-Signature",
	treatments: [{
		slug: "herbal-gold",
		name: "Herbal Gold",
		category: "Facial-Signature",
		description: "A natural retreat for your skin from handpicked herbal ingredients which gives instant results Gold reflects light, which can give skin a temporary luminous glow. to reduce pigmentation",
		image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRpnPxbmqhTVPkLOxALdqZVkVXBNq6_FvRSfU02er-IKBkA4aTZSwy2pTwCa-DrxT-oUjecLj_VkjFWOxk",
		prices: [{
			label: "60 min",
			price: "₹3,500"
		}]
	}]
}];
//#endregion
//#region src/pages/ourservice/facial-premium-signature.astro
var facial_premium_signature_exports = /* @__PURE__ */ __exportAll({
	default: () => $$FacialPremiumSignature,
	file: () => $$file,
	url: () => $$url
});
var $$FacialPremiumSignature = createComponent(($$result, $$props, $$slots) => {
	const groups = facialPremiumSignatureGroups;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Facial-Premium And Signature | Ira Spa Rituals",
		"description": "Let our well trained aestheticians take over and grant you a nourished, smooth, and radiant skin.",
		"image": "/images/serviceimage1.webp"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/serviceimage1.webp');`, "style")}><div class="container"><h1>Facial-Premium And Signature in Mangalore & Kalaburagi</h1><p>Let our well trained aestheticians take over and grant you a nourished, smooth, and radiant skin.</p></div></section><section class="treatments"><div class="container">${groups.map((group) => renderTemplate`<div class="treatment-group"><h2 class="group-heading">${group.heading}</h2>${group.treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}><div class="treatment-image"><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"></div><div class="treatment-content"><span class="eyebrow">${treatment.category}</span><h2>${treatment.name}</h2>${treatment.description && renderTemplate`<p class="description">${treatment.description}</p>`}<div class="divider"></div><div class="price-row">${treatment.prices.map((p) => renderTemplate`<div class="price-col"><span class="price-label">${p.label}</span><span class="price-value">${p.price}</span></div>`)}</div><div class="divider"></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}>Book This Service</a></div></div>`)}</div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, {})}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Facial-Premium And Signature",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/facial-premium-signature.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/facial-premium-signature.astro";
var $$url = "/ourservice/facial-premium-signature";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/facial-premium-signature@_@astro
var page = () => facial_premium_signature_exports;
//#endregion
export { page };
