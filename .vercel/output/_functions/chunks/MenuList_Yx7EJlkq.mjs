import { f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { i as renderScript } from "./Footer_B92XJ6Rl.mjs";
//#region src/components/Home/MenuList.astro
var $$MenuList = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="menu" data-astro-cid-sqo7kzfw><div class="container" data-astro-cid-sqo7kzfw><!-- Section Heading --><div class="section-heading" data-astro-cid-sqo7kzfw><span class="eyebrow" data-astro-cid-sqo7kzfw>Best Deals</span><h2 data-astro-cid-sqo7kzfw>SPECIAL PRICING</h2></div><div class="menu__card" data-astro-cid-sqo7kzfw><div class="carousel" data-carousel data-astro-cid-sqo7kzfw><!-- =========================
                     LEFT ARROW
                     ========================= --><button class="carousel__btn carousel__btn--prev" data-carousel-prev aria-label="Previous category" type="button" data-astro-cid-sqo7kzfw>&#10094;</button><!-- =========================
                     MENU CAROUSEL
                     ========================= --><div class="carousel__track" data-carousel-track data-astro-cid-sqo7kzfw>${[
		{
			title: "Body Massage",
			items: [
				{
					name: "CLASSIC SWEDISH THERAPY",
					price: "₹2,200 / 3,300 / 4,000",
					sessions: "60 / 90 / 120 minute sessions"
				},
				{
					name: "DEEP TISSUE THERAPY",
					price: "₹2,750 / 4,000 / 5,500",
					sessions: "60 / 90 / 120 minute sessions"
				},
				{
					name: "AROMA THERAPY",
					price: "₹2,400 / 3,600 / 4,800",
					sessions: "60 / 90 / 120 minute sessions"
				},
				{
					name: "BALINESE THERAPY",
					price: "₹2,750 / 4,000 / 5,500",
					sessions: "60 / 90 / 120 minute sessions"
				},
				{
					name: "IRA SIGNATURE THERAPY",
					price: "₹3,000 / 4,500",
					sessions: "60 / 90 minute sessions"
				},
				{
					name: "TANDEM (FOUR HANDS) THERAPY",
					price: "₹4,000 / 5,500",
					sessions: "60 / 90 minute sessions"
				}
			]
		},
		{
			title: "Herbal Therapy",
			items: [{
				name: "HERBAL POTLI",
				price: "₹3,000 / 4,000",
				sessions: "60 / 90 minute sessions"
			}, {
				name: "HOT STONE THERAPY",
				price: "₹3,200 / 4,800",
				sessions: "60 / 90 minute sessions"
			}]
		},
		{
			title: "Thai Therapy",
			items: [{
				name: "TRADITIONAL THAI THERAPY",
				price: "₹2,400 / 3,600 / 4,800",
				sessions: "60 / 90 / 120 minute sessions"
			}, {
				name: "BAMBOO THERAPY",
				price: "₹4,000 / 5,500",
				sessions: "60 / 90 minute sessions"
			}]
		},
		{
			title: "Body Polishing",
			items: [
				{
					name: "FULL BODY - Black Currant (Dry Skin)",
					price: "₹3,500",
					sessions: "60 minute session"
				},
				{
					name: "FULL BODY - Chocolate (Brightening and Nourishing)",
					price: "₹3,500",
					sessions: "60 minute session"
				},
				{
					name: "FULL BODY - Orange (De-tan)",
					price: "₹3,500",
					sessions: "60 minute session"
				}
			]
		},
		{
			title: "Clean-Ups & Facial-Essential",
			items: [
				{
					name: "Watermelon Clean-Up",
					price: "₹700",
					sessions: "30 minute session"
				},
				{
					name: "Strawberry Clean-Up",
					price: "₹800",
					sessions: "30 minute session"
				},
				{
					name: "Hydra Dew (Dry & Dehydrated)",
					price: "₹1,000",
					sessions: "45 minute session"
				},
				{
					name: "Rejuvenating (All skin type)",
					price: "₹1,200",
					sessions: "45 minute session"
				},
				{
					name: "Herbal Pearl",
					price: "₹2,000",
					sessions: "45 minute session"
				}
			]
		},
		{
			title: "Facial-Premium & Signature",
			items: [
				{
					name: "Deep Pore Cleansing (Oily Skin)",
					price: "₹2,400",
					sessions: "60 minute session"
				},
				{
					name: "Whitening Facial (Dull & Uneven Skin Tone)",
					price: "₹2,500",
					sessions: "60 minute session"
				},
				{
					name: "Herbal Gold Signature",
					price: "₹3,500",
					sessions: "60 minute session"
				}
			]
		},
		{
			title: "Quick Massage",
			items: [
				{
					name: "Foot Reflexology",
					price: "₹1,200",
					sessions: "30 minute session"
				},
				{
					name: "Back (without shower)",
					price: "₹1,600",
					sessions: "30 minute session"
				},
				{
					name: "Head, Neck & Shoulder",
					price: "₹1,300",
					sessions: "30 minute session"
				}
			]
		},
		{
			title: "Foot Spa / Pedicure",
			items: [
				{
					name: "Classic Paraffin Wax Pedicure (Melon & Litchi)",
					price: "₹800",
					sessions: "45 minute session"
				},
				{
					name: "Anti-Oxidant Pedicure (Lemon)",
					price: "₹800",
					sessions: "60 minute session"
				},
				{
					name: "Moisturizing Exotic Pedicure (Berry)",
					price: "₹800",
					sessions: "60 minute session"
				},
				{
					name: "Brightening De-Tan Pedicure (Sheen Tangy)",
					price: "₹1,200",
					sessions: "60 minute session"
				},
				{
					name: "De-Stress Refreshment (Mint)",
					price: "₹1,000",
					sessions: "60 minute session"
				}
			]
		}
	].map((category) => renderTemplate`<div class="carousel__slide" data-carousel-slide data-astro-cid-sqo7kzfw><p class="menu__category" data-astro-cid-sqo7kzfw>${category.title}</p><ul class="menu__list" data-astro-cid-sqo7kzfw>${category.items.map((item, i) => renderTemplate`<li class="menu__item"${addAttribute(`--i: ${i}`, "style")} data-astro-cid-sqo7kzfw><div class="menu__item-top" data-astro-cid-sqo7kzfw><span class="menu__item-name" data-astro-cid-sqo7kzfw>${item.name}</span><span class="menu__item-line" data-astro-cid-sqo7kzfw></span><span class="menu__item-price" data-astro-cid-sqo7kzfw>${item.price}</span></div><p class="menu__item-sessions" data-astro-cid-sqo7kzfw>${item.sessions}</p></li>`)}</ul></div>`)}</div><!-- =========================
                     RIGHT ARROW
                     ========================= --><button class="carousel__btn carousel__btn--next" data-carousel-next aria-label="Next category" type="button" data-astro-cid-sqo7kzfw>&#10095;</button></div><!-- =========================
                 CTA
                 ========================= --><div class="menu__cta" data-astro-cid-sqo7kzfw><a href="/ourservice" class="btn-secondary" data-astro-cid-sqo7kzfw>View Full Service</a></div></div></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/MenuList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/MenuList.astro", void 0);
//#endregion
export { $$MenuList as t };
