import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute, w as createAstro } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { i as renderScript, r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
//#region src/components/Appointment/pageHero.astro
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero-section" aria-labelledby="reservation-title" data-astro-cid-5anuosmg><div class="hero-bg" role="img" aria-label="Luxury spa interior creating a relaxing and peaceful wellness atmosphere" data-astro-cid-5anuosmg></div><div class="hero-container" data-astro-cid-5anuosmg><span class="eyebrow" data-astro-cid-5anuosmg>Spa Reservation</span><h1 id="reservation-title" class="hero-title" data-astro-cid-5anuosmg>Book Your Spa Appointment</h1><p class="hero-description" data-astro-cid-5anuosmg>Step into a world of curated tranquility at IRA SPA. Experience restorative spa treatments designed to harmonize mind, body and spirit in a calm and luxurious wellness environment.</p><div class="stats-banner" aria-label="IRA SPA at a glance" data-astro-cid-5anuosmg>${[
		{
			number: "12+",
			label: "Years of Experience",
			icon: "experience"
		},
		{
			number: "2",
			label: "Spa Locations",
			icon: "location"
		},
		{
			number: "40+",
			label: "Herbal Treatments",
			icon: "herbal"
		},
		{
			number: "10,000+",
			label: "Happy Clients",
			icon: "clients"
		}
	].map((stat) => renderTemplate`<article class="stat-item" data-astro-cid-5anuosmg><div class="stat-icon" aria-hidden="true" data-astro-cid-5anuosmg>${stat.icon === "experience" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-5anuosmg><path d="M12 22C12 22 17 17.5 17 13C17 9.5 14.5 9 12 5C9.5 9 7 9.5 7 13C7 17.5 12 22 12 22Z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5anuosmg></path><path d="M12 22C12 22 21 18.5 20 12.5C19 6.5 15.5 8.5 12 5M12 22C12 22 3 18.5 4 12.5C5 6.5 8.5 8.5 12 5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5anuosmg></path></svg>`}${stat.icon === "location" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-5anuosmg><path d="M12 21V10M12 10C10.5 10 7.5 11 6 13M12 10C13.5 10 16.5 11 18 13" stroke-linecap="round" data-astro-cid-5anuosmg></path><path d="M3 21C3 13 7.02944 6 12 6C16.9706 6 21 13 21 21" stroke-linecap="round" data-astro-cid-5anuosmg></path></svg>`}${stat.icon === "herbal" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-5anuosmg><path d="M12 2v20M8 5h8M6 10h12M9 15h6" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5anuosmg></path><circle cx="12" cy="5" r="1.5" data-astro-cid-5anuosmg></circle><circle cx="12" cy="10" r="1.5" data-astro-cid-5anuosmg></circle><circle cx="12" cy="15" r="1.5" data-astro-cid-5anuosmg></circle></svg>`}${stat.icon === "clients" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-5anuosmg><path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 20v-1a7 7 0 0 1 14 0v1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5anuosmg></path><path d="M12 2v2M4.22 4.22l1.42 1.42M19.78 4.22l-1.42 1.42" stroke-linecap="round" data-astro-cid-5anuosmg></path></svg>`}</div><strong class="stat-number" data-astro-cid-5anuosmg>${stat.number}</strong><span class="stat-label" data-astro-cid-5anuosmg>${stat.label}</span></article>`)}</div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Appointment/pageHero.astro", void 0);
//#endregion
//#region src/components/Appointment/BookAppointment.astro
var $$BookAppointment = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="appointment" data-astro-cid-aetnmvfn><div class="container container--narrow" data-astro-cid-aetnmvfn><form class="appointment-form" id="appointment-form" data-astro-cid-aetnmvfn><div class="form-group" data-astro-cid-aetnmvfn><label for="name" data-astro-cid-aetnmvfn>Name</label><input type="text" id="name" name="name" placeholder="Your full name" required data-astro-cid-aetnmvfn></div><div class="form-group" data-astro-cid-aetnmvfn><label for="phone" data-astro-cid-aetnmvfn>Ph. No</label><input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" required data-astro-cid-aetnmvfn></div><div class="form-group" data-astro-cid-aetnmvfn><label for="location" data-astro-cid-aetnmvfn>Location</label><select id="location" name="location" required data-astro-cid-aetnmvfn><option value="" disabled selected hidden data-astro-cid-aetnmvfn>Select branch location</option><option value="mangalore" data-astro-cid-aetnmvfn>Mangalore</option><option value="kalaburagi" data-astro-cid-aetnmvfn>Kalaburagi</option></select></div><div class="form-group" data-astro-cid-aetnmvfn><label for="date" data-astro-cid-aetnmvfn>Appointment Date</label><input type="date" id="date" name="date" required data-astro-cid-aetnmvfn></div><div class="form-group" data-astro-cid-aetnmvfn><label for="services" data-astro-cid-aetnmvfn>Select Service</label><select id="services" name="services" required data-astro-cid-aetnmvfn><option value="" disabled selected hidden data-astro-cid-aetnmvfn>Choose your experience</option><option value="massage" data-astro-cid-aetnmvfn>Body Massage</option><option value="herbal" data-astro-cid-aetnmvfn>Herbal Therapy</option><option value="polishing" data-astro-cid-aetnmvfn>Body Polishing</option><option value="facial-essentials" data-astro-cid-aetnmvfn>Clean-Ups And Facial-Essential</option><option value="thai" data-astro-cid-aetnmvfn>Thai Therapy</option><option value="quick-massage" data-astro-cid-aetnmvfn>Quick Massage</option><option value="facial-premium" data-astro-cid-aetnmvfn>Facial Premium </option><option value="foot-spa" data-astro-cid-aetnmvfn>Foot-Spa</option></select></div><div class="form-group" data-astro-cid-aetnmvfn><label for="time" data-astro-cid-aetnmvfn>Preferred Time</label><select id="time" name="time" required data-astro-cid-aetnmvfn><option value="" disabled selected hidden data-astro-cid-aetnmvfn>Select a time slot</option><option value="10:00" data-astro-cid-aetnmvfn>10:00 AM - 11:00 AM</option><option value="11:00" data-astro-cid-aetnmvfn>11:00 AM - 12:00 PM</option><option value="12:00" data-astro-cid-aetnmvfn>12:00 PM - 1:00 PM</option><option value="13:00" data-astro-cid-aetnmvfn>1:00 PM - 2:00 PM</option><option value="14:00" data-astro-cid-aetnmvfn>2:00 PM - 3:00 PM</option><option value="15:00" data-astro-cid-aetnmvfn>3:00 PM - 4:00 PM</option><option value="16:00" data-astro-cid-aetnmvfn>4:00 PM - 5:00 PM</option><option value="17:00" data-astro-cid-aetnmvfn>5:00 PM - 6:00 PM</option></select></div><button type="submit" class="btn-primary reserve-btn" id="submit-btn" data-astro-cid-aetnmvfn>Reserve My Session</button><p id="form-error" style="grid-column: 1 / -1; text-align: center; display: none; margin-top: 1rem; color: red;" data-astro-cid-aetnmvfn></p></form></div></section><!-- Success Popup Modal --><div id="success-modal" class="modal-overlay" style="display: none;" data-astro-cid-aetnmvfn><div class="modal-content" data-astro-cid-aetnmvfn><div class="modal-icon" data-astro-cid-aetnmvfn>✨</div><h3 data-astro-cid-aetnmvfn>Booking Successful!</h3><p data-astro-cid-aetnmvfn>Thank you for choosing us. Your reservation has been received and we look forward to seeing you.</p><button type="button" id="close-modal" class="btn-primary" data-astro-cid-aetnmvfn>Awesome</button></div></div>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Appointment/BookAppointment.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Appointment/BookAppointment.astro", void 0);
//#endregion
//#region src/components/Appointment/whatToExpect.astro
createAstro("https://www.iraspa.in");
var $$WhatToExpect = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$WhatToExpect;
	const { imageSrc = "/images/spa.png" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="expect" data-astro-cid-umcyfy56><div class="container expect__grid" data-astro-cid-umcyfy56><div class="expect__media" data-astro-cid-umcyfy56><img${addAttribute(imageSrc, "src")} alt="Ira Spa treatment room" width="560" height="440" loading="lazy" data-astro-cid-umcyfy56></div><div class="expect__content" data-astro-cid-umcyfy56><span class="eyebrow" data-astro-cid-umcyfy56>Experience</span><h2 data-astro-cid-umcyfy56>What to Expect</h2><div class="expect__list" data-astro-cid-umcyfy56>${[
		{
			number: "01",
			title: "Arrival & Sanctuary",
			text: "Please arrive 15 minutes prior to your session. Enjoy our signature botanical infusion in the quiet lounge as you begin your transition into stillness."
		},
		{
			number: "02",
			title: "Curated Consultation",
			text: "Your therapist will tailor the pressure and aromatic oils to your specific needs, ensuring a bespoke restorative journey."
		},
		{
			number: "03",
			title: "Mindful Silence",
			text: "We maintain a digital-free environment. Kindly switch off mobile devices to preserve the sanctuary of Ira Spa for all guests."
		}
	].map((s) => renderTemplate`<div class="expect__item" data-astro-cid-umcyfy56><span class="expect__number" data-astro-cid-umcyfy56>${s.number}</span><div data-astro-cid-umcyfy56><h3 data-astro-cid-umcyfy56>${s.title}</h3><p data-astro-cid-umcyfy56>${s.text}</p></div></div>`)}</div><p class="expect__policy" data-astro-cid-umcyfy56><em data-astro-cid-umcyfy56>Cancellation Policy: please provide 24-hour notice for any rescheduling or cancellations.</em></p></div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Appointment/whatToExpect.astro", void 0);
//#endregion
//#region src/components/Appointment/properritual.astro
var $$Properritual = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="popular-rituals" data-astro-cid-6bslr3lv><div class="container container--narrow" data-astro-cid-6bslr3lv><div class="section-heading" data-astro-cid-6bslr3lv><span class="eyebrow" data-astro-cid-6bslr3lv>The Menu</span><h2 data-astro-cid-6bslr3lv>SPECIAL PRICING</h2><div class="ornament" aria-hidden="true" data-astro-cid-6bslr3lv><span data-astro-cid-6bslr3lv></span></div></div><div class="popular-rituals__list" data-astro-cid-6bslr3lv>${[
		{
			name: "Swedish Serenity Massage",
			duration: "60 min",
			price: "2,200",
			icon: "M4 13c0-3.5 2.5-6 5-8 .5 1.5-.5 3-1 4 2-1 4-1 5 1 1.5-1 3 0 3.5 1.5.8 2.3-1 5-4.5 6.5-4 1.7-8-1-8-5z"
		},
		{
			name: "IRA SIGNATURE THERAPY",
			duration: "90 min",
			price: "4,500",
			icon: "M12 3c3 3 5 6.5 5 10a5 5 0 0 1-10 0c0-3.5 2-7 5-10z"
		},
		{
			name: "HERBAL POTLI",
			duration: "60 min",
			price: "3,000",
			icon: "M9 12h6M12 9v6",
			circle: true
		},
		{
			name: "TRADITIONAL THAI THERAPY",
			duration: "60 min",
			price: "2,400",
			icon: "M12 4c1.8 2 2.8 4 2.8 6a2.8 2.8 0 1 1-5.6 0c0-2 1-4 2.8-6z"
		}
	].map((r) => renderTemplate`<div class="ritual-row" data-astro-cid-6bslr3lv><span class="ritual-row__icon" aria-hidden="true" data-astro-cid-6bslr3lv><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" data-astro-cid-6bslr3lv>${r.circle && renderTemplate`<circle cx="12" cy="12" r="7.5" data-astro-cid-6bslr3lv></circle>`}<path${addAttribute(r.icon, "d")} data-astro-cid-6bslr3lv></path></svg></span><span class="ritual-row__name" data-astro-cid-6bslr3lv>${r.name} ${r.duration && renderTemplate`<span class="ritual-row__duration" data-astro-cid-6bslr3lv>(${r.duration})</span>`}</span><span class="ritual-row__leader" aria-hidden="true" data-astro-cid-6bslr3lv></span><span class="ritual-row__price" data-astro-cid-6bslr3lv>₹${r.price}</span></div>`)}</div><div class="popular-rituals__action" data-astro-cid-6bslr3lv><a href="/ourservice" class="link-arrow" data-astro-cid-6bslr3lv>View Full Treatment Menu <span data-astro-cid-6bslr3lv>&rarr;</span></a></div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Appointment/properritual.astro", void 0);
//#endregion
//#region src/pages/book-an-appointment/index.astro
var book_an_appointment_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Book an Appointment | Ira Spa Mangalore & Kalaburagi",
		"description": "Reserve your massage or spa ritual at Ira Spa. Choose your location, service and preferred time — we'll confirm your appointment shortly after."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHero", $$PageHero, {})}${renderComponent($$result, "BookAppointment", $$BookAppointment, {})}${renderComponent($$result, "WhatToExpect", $$WhatToExpect, {})}${renderComponent($$result, "Properritual", $$Properritual, {})}${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/book-an-appointment/index.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/book-an-appointment/index.astro";
var $$url = "/book-an-appointment";
//#endregion
//#region \0virtual:astro:page:src/pages/book-an-appointment/index@_@astro
var page = () => book_an_appointment_exports;
//#endregion
export { page };
