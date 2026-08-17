import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, t as defineStyleVars, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
//#region src/data/bodymassage.ts
var bodyMassageTreatments = [
	{
		slug: "classic-swedish-therapy",
		name: "Classic Swedish Therapy",
		description: "Classic Swedish techniques create the ultimate experience of relaxation during this full body therapy which reduces tension, increases circulation and flexibility.",
		image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTdVnHiXD6uio24k3Kd2VO_sCpZnt9UHLEpnTTgDCL6XAIAp7AFxjyaeojY4XTeEAPzcTP_Ptka_XaB1eU",
		prices: [
			{
				label: "60 min",
				price: "₹2,200"
			},
			{
				label: "90 min",
				price: "₹3,300"
			},
			{
				label: "120 min",
				price: "₹4,000"
			}
		]
	},
	{
		slug: "deep-tissue-therapy",
		name: "Deep Tissue Therapy",
		description: "Deep Tissue technique uses slow, deep guided strokes and firm pressure designed to relieve severe tension and reach below the superficial muscles, consistent pain and soreness in muscles.",
		image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSB-Qp7G763MpD-Ffon4C70R0VDgplQQkT13eWHTxbjZvlhHRZ7pEKdDXp_ATRn7s3TfAf7T29LSnUbLFw",
		prices: [
			{
				label: "60 min",
				price: "₹2,750"
			},
			{
				label: "90 min",
				price: "₹4,000"
			},
			{
				label: "120 min",
				price: "₹5,500"
			}
		]
	},
	{
		slug: "aroma-therapy",
		name: "Aroma Therapy",
		description: "Aromatherapy is a powerful way to enhance the effectiveness of massage. It can calm the nerves, promote physical and emotional health, lift the spirits, and energize the body.",
		image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTJSOnpiPz6KNeLNiRN-Tpsieg1zNG2IFJub7zuIDhvcZxXbQD_tPGage38PYVpt70rrtzaxRvugcsr8o8",
		prices: [
			{
				label: "60 min",
				price: "₹2,400"
			},
			{
				label: "90 min",
				price: "₹3,600"
			},
			{
				label: "120 min",
				price: "₹4,800"
			}
		]
	},
	{
		slug: "balinese-therapy",
		name: "Balinese Therapy",
		description: "The combination of technique, acupressure, Aroma Essential Oil and reflexology allows to work especially well on achy joints and muscle strains. It helps to ease sleep disorders, and many people find that the techniques are good for reducing stress and anxiety, and boosting a person's general sense of well-being.",
		image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ87eppnaBTyVledGNpMrApO1bYvbXXesdwdR5KbYwEMrfk6LB-pRlhv0_SF-UlLCVMGZ8tJVpJKIgTUZ0",
		prices: [
			{
				label: "60 min",
				price: "₹2,750"
			},
			{
				label: "90 min",
				price: "₹4,000"
			},
			{
				label: "120 min",
				price: "₹5,500"
			}
		]
	},
	{
		slug: "ira-signature-therapy",
		name: "Ira Signature Therapy",
		description: "Ira Signature simultaneously connects and revitalizes body, mind, heart and soul. Working at the core of our being, it calms, inspires and empowers us to create the life we desire. It nurtures us with healing and abundant blessings, improves all systems and organs, cleansing and detoxifying, brings harmony and balance.",
		image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ87eppnaBTyVledGNpMrApO1bYvbXXesdwdR5KbYwEMrfk6LB-pRlhv0_SF-UlLCVMGZ8tJVpJKIgTUZ0",
		prices: [{
			label: "60 min",
			price: "₹3,000"
		}, {
			label: "90 min",
			price: "₹4,500"
		}]
	},
	{
		slug: "tandem-fourhands-therapy",
		name: "Tandem (Four Hands) Therapy",
		description: "Tandem Therapy is a specialized therapy conducted by two therapists at a time. Use of targeted techniques to break down the build up of tissue around the muscles that cause pain, aches and inflammation, massage around long, slow sweeping movements will put the whole body into a state of relaxation.",
		image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRobO-zQL7GS-EhcJROd5pUYeWBska9CQ6-MObnXU7cfUVPH7NR96XDLSUvmYweGAI9HfIoVDZ7ayfy1hg",
		prices: [{
			label: "60 min",
			price: "₹4,000"
		}, {
			label: "90 min",
			price: "₹5,500"
		}]
	}
];
//#endregion
//#region src/pages/ourservice/body-massage.astro
var body_massage_exports = /* @__PURE__ */ __exportAll({
	default: () => $$BodyMassage,
	file: () => $$file,
	url: () => $$url
});
var $$BodyMassage = createComponent(($$result, $$props, $$slots) => {
	const treatments = bodyMassageTreatments;
	const $$definedVars = defineStyleVars([{}]);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Body Massage | Ira Spa Rituals",
		"description": "Explore our full range of body massage therapies — Swedish, Deep Tissue, Aroma, Balinese, Ira Signature and Tandem.",
		"image": "/images/spa-salon.jpg",
		"data-astro-cid-admlzyod": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner"${addAttribute(`background-image: url('/images/spa-salon.jpg');; ${$$definedVars}`, "style")} data-astro-cid-admlzyod><div class="container"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod><h1${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>Body Massage in Mangalore & Kalaburagi</h1><p${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>A relaxing full-body massage designed to release tension, ease sore muscles and restore balance to a tired body.</p></div></section><section class="treatments"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod><div class="container"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>${treatments.map((treatment, i) => renderTemplate`<div${addAttribute(`treatment-row ${i % 2 === 1 ? "reverse" : ""}`, "class")}${addAttribute(treatment.slug, "id")}${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod><div class="treatment-image"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod><img${addAttribute(treatment.image, "src")}${addAttribute(treatment.name, "alt")} loading="lazy"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod></div><div class="treatment-content"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod><h2${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>${treatment.name}</h2><p class="description"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>${treatment.description}</p><div class="divider"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod></div><div class="price-row"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>${treatment.prices.map((p) => renderTemplate`<div class="price-col"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod><span class="price-label"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>${p.label}</span><span class="price-value"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>${p.price}</span></div>`)}</div><div class="divider"${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod></div><a class="book-btn"${addAttribute(`/book-an-appointment?service=${treatment.slug}`, "href")}${addAttribute($$definedVars, "style")} data-astro-cid-admlzyod>Book This Service</a></div></div>`)}</div></section>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-admlzyod": true })}<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "serviceType": "Body Massage",
      "provider": {
        "@type": "DaySpa",
        "name": "Ira Spa"
      },
      "areaServed": ["Mangalore", "Kalaburagi"]
    }
    <\/script>` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/body-massage.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/ourservice/body-massage.astro";
var $$url = "/ourservice/body-massage";
//#endregion
//#region \0virtual:astro:page:src/pages/ourservice/body-massage@_@astro
var page = () => body_massage_exports;
//#endregion
export { page };
