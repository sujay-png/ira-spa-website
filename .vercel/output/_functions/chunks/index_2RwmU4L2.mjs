import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as renderComponent, f as renderTemplate, g as maybeRenderHead, o as Fragment, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { i as renderScript, r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
//#region src/pages/Contactus/Mangalore/index.astro
var Mangalore_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const locations = [{
		name: "Mangalore",
		address: "#301, 3rd Floor, Lotus Paradise Elite, Opp AJ Grand Hotel, Kodialbail, Mangalore 575003",
		locality: "Mangalore",
		region: "Karnataka",
		postalCode: "575003",
		phone: "+91 89716 67199",
		tel: "+918971667199",
		hours: "Mon – Sun: 9:00 AM – 9:30 PM",
		mapUrl: "https://www.google.com/maps/dir/?api=1&destination=",
		latitude: "12.8698",
		longitude: "74.8420"
	}];
	const pageTitle = "Contact Us | Book a Spa Appointment in Mangalore & Kalaburagi – Ira Spa";
	const pageDescription = "Contact Ira Spa to book massages, facials, and wellness therapies at our Mangalore or Kalaburagi locations. Call, message, or reserve your appointment online today.";
	const canonicalUrl = "https://www.theiraspa.com/contact";
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": locations.map((loc) => ({
			"@type": "DaySpa",
			"name": `Ira Spa – ${loc.name}`,
			"image": "https://www.theiraspa.com/images/spa-reception.jpg",
			"telephone": loc.tel,
			"priceRange": "₹₹",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": loc.address,
				"addressLocality": loc.locality,
				"addressRegion": loc.region,
				"postalCode": loc.postalCode,
				"addressCountry": "IN"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": loc.latitude,
				"longitude": loc.longitude
			},
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday"
				],
				"opens": "09:00",
				"closes": "21:30"
			},
			"url": canonicalUrl,
			"sameAs": [
				"https://www.instagram.com/the_ira_spa/",
				"https://www.facebook.com/share/1BW2YTGEVW/",
				"https://www.youtube.com/@IraSpa-n5f"
			]
		}))
	};
	const breadcrumbData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "https://www.theiraspa.com/"
		}, {
			"@type": "ListItem",
			"position": 2,
			"name": "Contact Us",
			"item": canonicalUrl
		}]
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": pageTitle,
		"description": pageDescription,
		"data-astro-cid-iaxhzi6y": true
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="page-banner" style="background-image: url('/images/spa-reception.jpg');" role="img" aria-label="Ira Spa reception and relaxation area" data-astro-cid-iaxhzi6y><div class="container" data-astro-cid-iaxhzi6y><nav aria-label="Breadcrumb" class="breadcrumb" data-astro-cid-iaxhzi6y></nav><span class="eyebrow" data-astro-cid-iaxhzi6y>Private Service</span><h1 data-astro-cid-iaxhzi6y>Contact Ira Spa – Mangalore</h1><p data-astro-cid-iaxhzi6y>Step into a world of curated tranquility. Whether you seek to rejuvenate in Mangalore, our team is ready to tailor your wellness journey. Reach out below to book a massage, facial, or spa therapy appointment.</p></div></section><section class="concierge" data-astro-cid-iaxhzi6y><div class="container concierge__grid" data-astro-cid-iaxhzi6y><form class="inquiry-form" id="inquiry-form" aria-label="Spa appointment inquiry form" data-astro-cid-iaxhzi6y><h2 data-astro-cid-iaxhzi6y>Submit an Inquiry</h2><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-name" data-astro-cid-iaxhzi6y>Full Name</label><input type="text" id="c-name" name="name" placeholder="Your name" autocomplete="name" required data-astro-cid-iaxhzi6y></div><div class="form-row" data-astro-cid-iaxhzi6y><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-email" data-astro-cid-iaxhzi6y>Email Address</label><input type="email" id="c-email" name="email" placeholder="email@example.com" autocomplete="email" required data-astro-cid-iaxhzi6y></div><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-phone" data-astro-cid-iaxhzi6y>Phone Number</label><input type="tel" id="c-phone" name="phone" placeholder="+91 00000 00000" autocomplete="tel" required data-astro-cid-iaxhzi6y></div></div><input type="hidden" name="location" value="mangalore" data-astro-cid-iaxhzi6y><div class="form-row" data-astro-cid-iaxhzi6y><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-date" data-astro-cid-iaxhzi6y>Appointment Date</label><input type="date" id="c-date" name="date" required data-astro-cid-iaxhzi6y></div><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-time" data-astro-cid-iaxhzi6y>Preferred Time</label><select id="c-time" name="time" required data-astro-cid-iaxhzi6y><option value="" disabled selected hidden data-astro-cid-iaxhzi6y>Select a time slot</option><option value="10:00" data-astro-cid-iaxhzi6y>10:00 AM - 11:00 AM</option><option value="11:00" data-astro-cid-iaxhzi6y>11:00 AM - 12:00 PM</option><option value="12:00" data-astro-cid-iaxhzi6y>12:00 PM - 1:00 PM</option><option value="13:00" data-astro-cid-iaxhzi6y>1:00 PM - 2:00 PM</option><option value="14:00" data-astro-cid-iaxhzi6y>2:00 PM - 3:00 PM</option><option value="15:00" data-astro-cid-iaxhzi6y>3:00 PM - 4:00 PM</option><option value="16:00" data-astro-cid-iaxhzi6y>4:00 PM - 5:00 PM</option><option value="17:00" data-astro-cid-iaxhzi6y>5:00 PM - 6:00 PM</option></select></div></div><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-service" data-astro-cid-iaxhzi6y>Select Service</label><select id="c-service" name="service" required data-astro-cid-iaxhzi6y><option value="" disabled selected data-astro-cid-iaxhzi6y>Select therapy</option><option value="massage" data-astro-cid-iaxhzi6y>Body Massage</option><option value="herbal" data-astro-cid-iaxhzi6y>Herbal Therapy</option><option value="polishing" data-astro-cid-iaxhzi6y>Body Polishing</option><option value="facial-essentials" data-astro-cid-iaxhzi6y>Clean-Ups And Facial-Essential</option><option value="thai" data-astro-cid-iaxhzi6y>Thai Therapy</option><option value="quick-massage" data-astro-cid-iaxhzi6y>Quick Massage</option><option value="facial-premium" data-astro-cid-iaxhzi6y>Facial Premium</option><option value="foot-spa" data-astro-cid-iaxhzi6y>Foot-Spa</option></select></div><div class="form-group" data-astro-cid-iaxhzi6y><label for="c-message" data-astro-cid-iaxhzi6y>Message</label><textarea id="c-message" name="message" rows="4" placeholder="How may we assist your journey?" data-astro-cid-iaxhzi6y></textarea></div><button type="submit" class="btn-primary" id="contact-submit-btn" data-astro-cid-iaxhzi6y>Send Inquiry <span data-astro-cid-iaxhzi6y>&rarr;</span></button><p class="form-note" id="form-note" hidden data-astro-cid-iaxhzi6y>Thank you — our concierge team will be in touch shortly.</p></form><div class="locations" data-astro-cid-iaxhzi6y>${locations.map((loc) => renderTemplate`<div class="location-card" itemscope itemtype="https://schema.org/DaySpa" data-astro-cid-iaxhzi6y><h3 itemprop="name" data-astro-cid-iaxhzi6y>Ira Spa – ${loc.name}</h3><address class="location-card__address" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" data-astro-cid-iaxhzi6y><span itemprop="streetAddress" data-astro-cid-iaxhzi6y>${loc.address}</span></address><a class="location-card__phone"${addAttribute(`tel:${loc.tel}`, "href")} itemprop="telephone" data-astro-cid-iaxhzi6y>${loc.phone}</a><p class="location-card__hours" data-astro-cid-iaxhzi6y><meta itemprop="openingHours" content="Mo-Su 09:00-21:30"><span data-astro-cid-iaxhzi6y>${loc.hours}</span><a class="directionbutton"${addAttribute(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Get directions to Ira Spa ${loc.name}`, "aria-label")} data-astro-cid-iaxhzi6y>Get Direction</a></p></div>`)}<div class="map-container" data-astro-cid-iaxhzi6y><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3734005885233!2d74.8407421!3d12.8837136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b91b8d5a1f5%3A0xcafdbd3a391515f4!2sLotus%20Paradise%20Elite!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="300" style="border:0; border-radius: var(--radius-md); margin-top: var(--space-md);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ira Spa Mangalore Location" data-astro-cid-iaxhzi6y>
					</iframe></div></div></div></section><section class="concierge-quote" data-astro-cid-iaxhzi6y><div class="container concierge-quote__row" data-astro-cid-iaxhzi6y><blockquote data-astro-cid-iaxhzi6y>"In silence, we find the true essence of luxury and the rhythm of the self."</blockquote><div class="socials" data-astro-cid-iaxhzi6y><a href="https://www.instagram.com/the_ira_spa/" target="_blank" rel="noopener noreferrer" aria-label="Ira Spa on Instagram" data-astro-cid-iaxhzi6y>Instagram</a><a href="https://www.facebook.com/share/1BW2YTGEVW/" target="_blank" rel="noopener noreferrer" aria-label="Ira Spa on Facebook" data-astro-cid-iaxhzi6y>Facebook</a><a href="https://www.youtube.com/@IraSpa-n5f" target="_blank" rel="noopener noreferrer" aria-label="Ira Spa on YouTube" data-astro-cid-iaxhzi6y>YouTube</a></div></div></section>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-iaxhzi6y": true })}`,
		"head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result) => renderTemplate`<link rel="canonical"${addAttribute(canonicalUrl, "href")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDescription, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image" content="https://www.theiraspa.com/images/spa-reception.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(pageDescription, "content")}><script type="application/ld+json">${unescapeHTML(JSON.stringify(structuredData))}<\/script><script type="application/ld+json">${unescapeHTML(JSON.stringify(breadcrumbData))}<\/script>` })}`
	})}${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/Contactus/Mangalore/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/Contactus/Mangalore/index.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/Contactus/Mangalore/index.astro";
var $$url = "/Contactus/Mangalore";
//#endregion
//#region \0virtual:astro:page:src/pages/Contactus/Mangalore/index@_@astro
var page = () => Mangalore_exports;
//#endregion
export { page };
