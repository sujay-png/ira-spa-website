import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_7epPRZx5.mjs";
import { t as createComponent } from "./compiler_EtoVAV3U.mjs";
import { i as renderScript, n as $$Icon, r as $$Layout, t as $$Footer } from "./Footer_B92XJ6Rl.mjs";
import { r as getAllPosts } from "./wordpress_Dx8ZMR5Y.mjs";
import { t as $$PostCard } from "./PostCard_CsPJ88Bw.mjs";
import { t as $$MenuList } from "./MenuList_Yx7EJlkq.mjs";
import { t as serviceimage1_default } from "./serviceimage1_neoqT795.mjs";
//#region src/components/Home/bookings_form.astro
var $$BookingsForm = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="booking-bar" data-astro-cid-gdqpwc7v><div class="container" data-astro-cid-gdqpwc7v><form class="booking-pill" id="home-booking-form" data-astro-cid-gdqpwc7v><div class="pill-section" data-astro-cid-gdqpwc7v><label for="pill-name" data-astro-cid-gdqpwc7v>Full Name</label><input type="text" id="pill-name" name="name" placeholder="John Doe" required data-astro-cid-gdqpwc7v></div><div class="pill-divider" data-astro-cid-gdqpwc7v></div><div class="pill-section" data-astro-cid-gdqpwc7v><label for="pill-phone" data-astro-cid-gdqpwc7v>Phone</label><input type="tel" id="pill-phone" name="phone" placeholder="+91 00000 00000" required data-astro-cid-gdqpwc7v></div><div class="pill-divider" data-astro-cid-gdqpwc7v></div><div class="pill-section" data-astro-cid-gdqpwc7v><label for="pill-service" data-astro-cid-gdqpwc7v>Service</label><div class="select-wrapper" data-astro-cid-gdqpwc7v><select id="pill-service" name="service" required data-astro-cid-gdqpwc7v><option value="" disabled selected data-astro-cid-gdqpwc7v>Select therapy</option><option value="massage" data-astro-cid-gdqpwc7v>Body Massage</option><option value="herbal" data-astro-cid-gdqpwc7v>Herbal Therapy</option><option value="polishing" data-astro-cid-gdqpwc7v>Body Polishing</option><option value="facial-essentials" data-astro-cid-gdqpwc7v>Clean-Ups And Facial-Essential</option><option value="thai" data-astro-cid-gdqpwc7v>Thai Therapy</option><option value="quick-massage" data-astro-cid-gdqpwc7v>Quick Massage</option><option value="facial-premium" data-astro-cid-gdqpwc7v>Facial Premium </option><option value="foot-spa" data-astro-cid-gdqpwc7v>Foot-Spa</option></select><!-- Hardcoded SVG dimensions to prevent blowout --><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gdqpwc7v><path d="M6 9l6 6 6-6" data-astro-cid-gdqpwc7v></path></svg></div></div><div class="pill-divider" data-astro-cid-gdqpwc7v></div><div class="pill-section" data-astro-cid-gdqpwc7v><label for="pill-location" data-astro-cid-gdqpwc7v>Location</label><div class="select-wrapper" data-astro-cid-gdqpwc7v><select id="pill-location" name="location" required data-astro-cid-gdqpwc7v><option value="mangalore" selected data-astro-cid-gdqpwc7v>Mangalore</option><option value="kalaburagi" data-astro-cid-gdqpwc7v>Kalaburagi</option></select><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gdqpwc7v><path d="M6 9l6 6 6-6" data-astro-cid-gdqpwc7v></path></svg></div></div><div class="pill-divider" data-astro-cid-gdqpwc7v></div><div class="pill-section" data-astro-cid-gdqpwc7v><label for="pill-date" data-astro-cid-gdqpwc7v>Date</label><input type="date" id="pill-date" name="date" required data-astro-cid-gdqpwc7v></div><div class="pill-divider" data-astro-cid-gdqpwc7v></div><div class="pill-section" data-astro-cid-gdqpwc7v><label for="pill-time" data-astro-cid-gdqpwc7v>Time</label><div class="select-wrapper" data-astro-cid-gdqpwc7v><select id="pill-time" name="time" required data-astro-cid-gdqpwc7v><option value="" disabled selected data-astro-cid-gdqpwc7v>Select time</option><option value="10:00" data-astro-cid-gdqpwc7v>10:00 AM - 11:00 AM</option><option value="11:00" data-astro-cid-gdqpwc7v>11:00 AM - 12:00 PM</option><option value="12:00" data-astro-cid-gdqpwc7v>12:00 PM - 1:00 PM</option><option value="13:00" data-astro-cid-gdqpwc7v>1:00 PM - 2:00 PM</option><option value="14:00" data-astro-cid-gdqpwc7v>2:00 PM - 3:00 PM</option><option value="15:00" data-astro-cid-gdqpwc7v>3:00 PM - 4:00 PM</option><option value="16:00" data-astro-cid-gdqpwc7v>4:00 PM - 5:00 PM</option><option value="17:00" data-astro-cid-gdqpwc7v>5:00 PM - 6:00 PM</option></select><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gdqpwc7v><path d="M6 9l6 6 6-6" data-astro-cid-gdqpwc7v></path></svg></div></div><button type="submit" class="pill-btn" id="home-submit-btn" data-astro-cid-gdqpwc7v>Reserve</button></form><p id="home-form-message" style="display: none; text-align: center; width: 100%; margin-top: 1rem; color: #dfb14a; font-weight: bold; font-size: 0.9rem;" data-astro-cid-gdqpwc7v></p></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/bookings_form.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/bookings_form.astro", void 0);
//#endregion
//#region src/components/Home/Aboutspa.astro
var $$Aboutspa = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="about-spa" data-astro-cid-72damzhu><div class="container about-spa__grid" data-astro-cid-72damzhu><div class="about-spa__media reveal" data-astro-cid-72damzhu><img src="/images/spa.png" alt="Therapist performing a relaxing massage at Ira Spa" width="640" height="760" loading="lazy" data-astro-cid-72damzhu></div><div class="about-spa__content reveal" data-astro-cid-72damzhu><span class="eyebrow" data-astro-cid-72damzhu>Get to Know Us</span><h2 data-astro-cid-72damzhu>About Ira Spa</h2><p data-astro-cid-72damzhu>Welcome to IRA Spa, your destination for massage in Mangalore. Get deep relief and relaxation from pain or stress in your shoulder, neck, upper and lower back, legs, feet, and overall body with effective massage techniques that calm your nervous system, release stress hormones, soothe muscle aches, ease anxiety and depression, and keep your body, mind, and spirit rejuvenated.</p><p data-astro-cid-72damzhu>The spa’s interior setting has been designed to create a peaceful atmosphere and sense of calmness from the moment you enter. It’s time to take a break from your daily routine and invest in your mental and physical well-being. Whether you’re looking for massage therapy or beauty spa sessions, you’ll experience personalized service from our expert therapists at IRA Spa.</p><a href="/about" class="btn-secondary" data-astro-cid-72damzhu>Discover Our Story</a></div></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/Aboutspa.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/Aboutspa.astro", void 0);
//#endregion
//#region src/components/Home/TrustIndicators.astro
var $$TrustIndicators = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="trust-indicators" data-astro-cid-kxjep7j3><div class="container" data-astro-cid-kxjep7j3><div class="trust-grid" data-astro-cid-kxjep7j3><!-- Card 1 --><div class="trust-card" data-astro-cid-kxjep7j3><div class="card-inner" data-astro-cid-kxjep7j3><div class="icon" data-astro-cid-kxjep7j3><img src="/icons/expertise.png" alt="Experience Icon" loading="lazy" data-astro-cid-kxjep7j3></div><div class="stat" data-astro-cid-kxjep7j3><span class="counter" data-target="24" data-astro-cid-kxjep7j3>0</span></div><div class="label" data-astro-cid-kxjep7j3>Years Experience</div></div></div><!-- Card 2 --><div class="trust-card" data-astro-cid-kxjep7j3><div class="card-inner" data-astro-cid-kxjep7j3><div class="icon" data-astro-cid-kxjep7j3><img src="/icons/wellness.png" alt="Wellness Icon" loading="lazy" data-astro-cid-kxjep7j3></div><div class="stat" data-astro-cid-kxjep7j3><span class="counter" data-target="3" data-astro-cid-kxjep7j3>0</span>+</div><div class="label" data-astro-cid-kxjep7j3>Wellness & Spa</div></div></div><!-- Card 3 --><div class="trust-card" data-astro-cid-kxjep7j3><div class="card-inner" data-astro-cid-kxjep7j3><div class="icon" data-astro-cid-kxjep7j3><img src="/icons/herbal-treatment.png" alt="Herbal Treatment Icon" loading="lazy" data-astro-cid-kxjep7j3></div><div class="stat" data-astro-cid-kxjep7j3><span class="counter" data-target="40" data-astro-cid-kxjep7j3>0</span>+</div><div class="label" data-astro-cid-kxjep7j3>Herbal Treatment</div></div></div><!-- Card 4 --><div class="trust-card" data-astro-cid-kxjep7j3><div class="card-inner" data-astro-cid-kxjep7j3><div class="icon" data-astro-cid-kxjep7j3><img src="/icons/costumer.png" alt="Happy Clients Icon" loading="lazy" data-astro-cid-kxjep7j3></div><div class="stat" data-astro-cid-kxjep7j3><span class="counter" data-target="10000" data-astro-cid-kxjep7j3>0</span>+</div><div class="label" data-astro-cid-kxjep7j3>Happy Clients</div></div></div></div></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/TrustIndicators.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/TrustIndicators.astro", void 0);
//#endregion
//#region src/components/Home/HowItWorks.astro
var $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="how-it-works-modern" data-astro-cid-duqy5y3d><div class="process-container" data-astro-cid-duqy5y3d><div class="process-header" data-astro-cid-duqy5y3d><div class="eyebrow-pill" data-astro-cid-duqy5y3d><span class="dot" data-astro-cid-duqy5y3d></span> HOW WE WORK</div><h2 data-astro-cid-duqy5y3d>Treatment <span class="highlight" data-astro-cid-duqy5y3d>Process</span></h2></div><div class="process-grid" data-astro-cid-duqy5y3d>${[
		{
			number: "01",
			title: "Meeting",
			icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
			description: "Upon arrival, you’ll be warmly greeted by our friendly staff, who will guide you through a brief check-in process. We’ll take the time to understand your needs, preferences, and any areas you’d like us to focus on during your session."
		},
		{
			number: "02",
			title: "Treatment",
			icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="M6 13l8.5 8"></path><path d="M6 13h3a5 5 0 0 0 5-5"></path></svg>`,
			description: "Your customized massage session begins in a serene, private room with soothing music and aromatherapy. Our skilled therapist will apply techniques best suited to your preferences—be it Swedish, deep tissue, We focus on providing a healing, tranquil experience that aligns with your comfort level and wellness goals."
		},
		{
			number: "03",
			title: "Finalizing",
			icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
			description: "After your massage, you’ll have a moment to relax and rehydrate. Our staff will check in with you to ensure your satisfaction and offer aftercare tips for prolonged benefits. If you enjoyed your experience, we’ll be happy to help you schedule your next visit"
		}
	].map((step) => renderTemplate`<div class="process-card" data-astro-cid-duqy5y3d><div class="process-card__top" data-astro-cid-duqy5y3d><div class="icon-box" data-astro-cid-duqy5y3d>${unescapeHTML(step.icon)}</div><span class="step-num" data-astro-cid-duqy5y3d>${step.number}</span></div><h3 data-astro-cid-duqy5y3d>${step.title}</h3><p data-astro-cid-duqy5y3d>${step.description}</p><div class="watermark" aria-hidden="true" data-astro-cid-duqy5y3d>${step.number}</div></div>`)}</div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/HowItWorks.astro", void 0);
//#endregion
//#region src/components/Home/list.astro
var $$List = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="benefits" data-astro-cid-fa7hwp2d><div class="container" data-astro-cid-fa7hwp2d><div class="section-heading" data-astro-cid-fa7hwp2d><span class="eyebrow" data-astro-cid-fa7hwp2d>Why Ira Spa</span><h2 class="benefits__title" data-astro-cid-fa7hwp2d>The Benefits of Ritual</h2></div><div class="benefits__wrapper" data-astro-cid-fa7hwp2d><div class="benefits__column" data-astro-cid-fa7hwp2d>${[
		{
			icon: "mdi:brain",
			label: "Relieves Stress and Anxiety"
		},
		{
			icon: "mdi:water-check",
			label: "Improves Blood Circulation"
		},
		{
			icon: "mdi:shield-account",
			label: "Boosts Immunity"
		},
		{
			icon: "mdi:arrow-expand-all",
			label: "Reduces Muscle Tension and Pain"
		},
		{
			icon: "mdi:sleep",
			label: "Improves Sleep Quality"
		},
		{
			icon: "mdi:face-woman-shimmer",
			label: "Enhances Skin Texture and Glow"
		}
	].map((b) => renderTemplate`<div class="benefit-item" data-astro-cid-fa7hwp2d>${renderComponent($$result, "Icon", $$Icon, {
		"name": b.icon,
		"width": "26",
		"height": "26",
		"data-astro-cid-fa7hwp2d": true
	})}<p data-astro-cid-fa7hwp2d>${b.label}</p></div>`)}</div><div class="benefits__column" data-astro-cid-fa7hwp2d>${[
		{
			icon: "mdi:water-outline",
			label: "Flushes Out Toxins"
		},
		{
			icon: "mdi:emoticon-happy-outline",
			label: "Boosts Mood and Mental Clarity"
		},
		{
			icon: "mdi:human-handsup",
			label: "Increases Flexibility and Joint Mobility"
		},
		{
			icon: "mdi:meditation",
			label: "Reduces Signs of Fatigue and Burnout"
		},
		{
			icon: "mdi:weather-sunny",
			label: "Improves Skin Tone and Brightness"
		},
		{
			icon: "mdi:account-heart",
			label: "Promotes Overall Well-being and Self-care"
		}
	].map((b) => renderTemplate`<div class="benefit-item" data-astro-cid-fa7hwp2d>${renderComponent($$result, "Icon", $$Icon, {
		"name": b.icon,
		"width": "26",
		"height": "26",
		"data-astro-cid-fa7hwp2d": true
	})}<p data-astro-cid-fa7hwp2d>${b.label}</p></div>`)}</div></div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/list.astro", void 0);
//#endregion
//#region src/components/Home/Services-list.astro
var $$ServicesList = createComponent(($$result, $$props, $$slots) => {
	const services = [
		{
			title: "DEEP TISSUE THERAPY",
			description: "Intense therapy designed to release chronic muscle tension and promote long-term recovery.",
			price: "2750/4000/5500",
			minutes: "60/90/120 min",
			image: "/images/deep-tissue.jpg",
			featured: true
		},
		{
			title: "Aromatherapy Ritual",
			description: "",
			price: "2400/3600/4800",
			minutes: "60/90/120",
			image: "/images/serviceimg2.jpg",
			featured: false
		},
		{
			title: "Foot Reflexology",
			description: "",
			price: "1200",
			minutes: "30 min",
			image: "/images/image1.jpg",
			featured: false
		},
		{
			title: "Herbal Gold",
			description: "",
			price: "₹3500",
			minutes: "60 min",
			image: "/images/herbal-gold.jpg",
			featured: false
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="services" data-astro-cid-x5r3bcsf><div class="container" data-astro-cid-x5r3bcsf><div class="services__header" data-astro-cid-x5r3bcsf><div data-astro-cid-x5r3bcsf><span class="eyebrow" data-astro-cid-x5r3bcsf>Exclusive Treatments</span><h2 data-astro-cid-x5r3bcsf>Signature Rituals</h2></div><a href="/ourservice" class="link-arrow" data-astro-cid-x5r3bcsf>View All Services <span data-astro-cid-x5r3bcsf>&rarr;</span></a></div><div class="services__grid" data-astro-cid-x5r3bcsf><div class="service-card service-card--featured reveal" data-astro-cid-x5r3bcsf><img${addAttribute(services[0].image, "src")}${addAttribute(services[0].title, "alt")} loading="lazy" data-astro-cid-x5r3bcsf><div class="card-overlay" data-astro-cid-x5r3bcsf></div><div class="card-info" data-astro-cid-x5r3bcsf><h3 data-astro-cid-x5r3bcsf>${services[0].title}</h3><p class="description" data-astro-cid-x5r3bcsf>${services[0].description}</p><p class="price" data-astro-cid-x5r3bcsf>${services[0].price}</p><p class="minutes" data-astro-cid-x5r3bcsf>${services[0].minutes}</p></div></div><div class="service-card reveal" data-astro-cid-x5r3bcsf><img${addAttribute(services[1].image, "src")}${addAttribute(services[1].title, "alt")} loading="lazy" data-astro-cid-x5r3bcsf><div class="card-overlay" data-astro-cid-x5r3bcsf></div><div class="card-info" data-astro-cid-x5r3bcsf><h3 data-astro-cid-x5r3bcsf>${services[1].title}</h3><p class="price" data-astro-cid-x5r3bcsf>${services[1].price}</p><p class="minutes" data-astro-cid-x5r3bcsf>${services[1].minutes}</p></div></div><div class="service-pair" data-astro-cid-x5r3bcsf><div class="service-card reveal" data-astro-cid-x5r3bcsf><img${addAttribute(services[2].image, "src")}${addAttribute(services[2].title, "alt")} loading="lazy" data-astro-cid-x5r3bcsf><div class="card-overlay" data-astro-cid-x5r3bcsf></div><div class="card-info" data-astro-cid-x5r3bcsf><h3 data-astro-cid-x5r3bcsf>${services[2].title}</h3><p class="price" data-astro-cid-x5r3bcsf>${services[2].price}</p><p class="minutes" data-astro-cid-x5r3bcsf>${services[2].minutes}</p></div></div><div class="service-card reveal" data-astro-cid-x5r3bcsf><img${addAttribute(services[3].image, "src")}${addAttribute(services[3].title, "alt")} loading="lazy" data-astro-cid-x5r3bcsf><div class="card-overlay" data-astro-cid-x5r3bcsf></div><div class="card-info" data-astro-cid-x5r3bcsf><h3 data-astro-cid-x5r3bcsf>${services[3].title}</h3><p class="price" data-astro-cid-x5r3bcsf>${services[3].price}</p><p class="minutes" data-astro-cid-x5r3bcsf>${services[3].minutes}</p></div></div></div></div></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/Services-list.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/Services-list.astro", void 0);
//#endregion
//#region src/components/Home/Customerreview.astro
var $$Customerreview = createComponent(($$result, $$props, $$slots) => {
	const testimonials = [
		{
			name: "Vaishali Kini",
			role: "Customer",
			rating: 5,
			quote: "After a busy week, I was looking for a relaxing weekend. The Balinese massage was so much relaxing, after an hour of massage followed by 15 minutes of steam, I felt great.The place is very clean,"
		},
		{
			name: "Shreeshail Udachan",
			role: "Customer",
			rating: 5,
			quote: "Visited Ira Spa and had a great experience. The ambience was excellent, and the interiors were clean and well-maintained. Kudos to the staff, they were incredibly polite and professional. I was assigned a fantastic therapist who was extremely skilled and helped relieve my shoulder and knee pain."
		},
		{
			name: "Preethu Supri",
			role: "Customer",
			rating: 5,
			quote: "My friend recommended IRA Spa, and I’m so glad I followed her advice. The place is calm, clean, and beautifully designed. My massage was both relaxing and therapeutic. The staff were friendly and ensured it was an experience I’d want to repeat."
		},
		{
			name: "Raghu Gowda R",
			role: "Customer",
			rating: 5,
			quote: "Best quality of the massage, the cleanliness and ambiance of the spa, the professionalism and friendliness of the staff, and potentially the value for money.Totally I Love This Spa. "
		},
		{
			name: "ANIL KUMAR",
			role: "Customer",
			rating: 5,
			quote: "Very nice spa in Kalaburgi very professional service I never had like massage like in life time so professional"
		},
		{
			name: "Preethu Supri",
			role: "Customer",
			rating: 5,
			quote: "My friend recommended IRA Spa, and I’m so glad I followed her advice. The place is calm, clean, and beautifully designed. My massage was both relaxing and therapeutic. The staff were friendly and ensured it was an experience I’d want to repeat."
		},
		{
			name: "Swathi Baliga",
			role: "Verified Guest",
			rating: 5,
			quote: "I had a wonderful and relaxing experience at the Ira Spa. They are highly professional and extremely hygienic. The therapists are well trained and amazing at what they do. I was taken into a meditative state of mind since the moment I stepped in."
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="reviews" data-astro-cid-vtynly2g><div class="container container--narrow" data-astro-cid-vtynly2g><div class="section-heading" data-astro-cid-vtynly2g><span class="eyebrow" data-astro-cid-vtynly2g>Customer Reviews</span><h2 data-astro-cid-vtynly2g>What They’re Talking About Us</h2></div><div class="carousel" data-carousel data-astro-cid-vtynly2g><div class="carousel__track" data-track data-astro-cid-vtynly2g>${testimonials.map((t) => renderTemplate`<div class="slide" data-astro-cid-vtynly2g><div class="stars" data-astro-cid-vtynly2g>${Array.from({ length: 5 }).map((_, i) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "mdi:star",
		"color": i < t.rating ? "#cfa23c" : "rgba(255,255,255,0.15)",
		"width": "22",
		"height": "22",
		"data-astro-cid-vtynly2g": true
	})}`)}</div><p class="quote" data-astro-cid-vtynly2g>&ldquo;${t.quote}&rdquo;</p><div class="reviewer" data-astro-cid-vtynly2g><span class="reviewer__avatar" aria-hidden="true" data-astro-cid-vtynly2g>${t.name.charAt(0)}</span><span class="reviewer__name" data-astro-cid-vtynly2g>${t.name}</span><span class="reviewer__role" data-astro-cid-vtynly2g>${t.role}</span></div></div>`)}</div><button class="carousel__arrow prev" data-prev aria-label="Previous testimonial" data-astro-cid-vtynly2g>${renderComponent($$result, "Icon", $$Icon, {
		"name": "mdi:chevron-left",
		"width": "24",
		"height": "24",
		"data-astro-cid-vtynly2g": true
	})}</button><button class="carousel__arrow next" data-next aria-label="Next testimonial" data-astro-cid-vtynly2g>${renderComponent($$result, "Icon", $$Icon, {
		"name": "mdi:chevron-right",
		"width": "24",
		"height": "24",
		"data-astro-cid-vtynly2g": true
	})}</button><div class="carousel__dots" data-dots data-astro-cid-vtynly2g>${testimonials.map((_, i) => renderTemplate`<button class="dot"${addAttribute(i, "data-dot")}${addAttribute(`Go to testimonial ${i + 1}`, "aria-label")} data-astro-cid-vtynly2g></button>`)}</div></div></div></section>${renderScript($$result, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/Customerreview.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/Customerreview.astro", void 0);
//#endregion
//#region src/components/Home/InstagramFeed.astro
var $$InstagramFeed = createComponent(($$result, $$props, $$slots) => {
	const instagramLink = "https://www.instagram.com/the_ira_spa";
	return renderTemplate`${maybeRenderHead($$result)}<section class="instagram-section" data-astro-cid-3jo2hwar><div class="instagram-header" data-astro-cid-3jo2hwar><div class="line" data-astro-cid-3jo2hwar></div><h2 data-astro-cid-3jo2hwar>FOLLOW US ON INSTAGRAM</h2><div class="line" data-astro-cid-3jo2hwar></div></div><div class="instagram-grid" data-astro-cid-3jo2hwar>${[
		"/insta-post/imgi_62_WhatsApp-Image-2026-06-15-at-2.43.04-PM-819x1024.jpg",
		"/insta-post/imgi_63_WhatsApp-Image-2026-06-15-at-1.16.26-PM-819x1024.jpg",
		"/insta-post/imgi_64_720408192_17941609788232822_6146910874462510615_n-819x1024.jpg",
		"/insta-post/imgi_65_713563222_17940549111232822_7584340239445424097_n-819x1024.jpg",
		"/insta-post/imgi_66_707561540_17939421015232822_95968831005194178_n-819x1024.jpg",
		"/insta-post/imgi_67_700955472_17938645245232822_3396926590912006148_n-819x1024.jpg"
	].map((post) => renderTemplate`<a${addAttribute(instagramLink, "href")} target="_blank" rel="noopener noreferrer" class="instagram-item" data-astro-cid-3jo2hwar><img${addAttribute(post, "src")} alt="Ira Spa Instagram Post" loading="lazy" data-astro-cid-3jo2hwar></a>`)}</div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/InstagramFeed.astro", void 0);
//#endregion
//#region src/components/Home/HomeBlogs.astro
var $$HomeBlogs = createComponent(async ($$result, $$props, $$slots) => {
	const latestPosts = (await getAllPosts()).slice(0, 3);
	return renderTemplate`${maybeRenderHead($$result)}<section class="home-blogs" data-astro-cid-oevr3whs><div class="container" data-astro-cid-oevr3whs><div class="section-heading" data-astro-cid-oevr3whs><span class="eyebrow" data-astro-cid-oevr3whs>The Serenity Feed</span><h2 data-astro-cid-oevr3whs>Blog Articles</h2><div class="ornament" data-astro-cid-oevr3whs><span data-astro-cid-oevr3whs></span></div></div><div class="blogs-grid" data-astro-cid-oevr3whs>${latestPosts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"post": post,
		"data-astro-cid-oevr3whs": true
	})}`)}</div><div class="view-all" data-astro-cid-oevr3whs><a href="/blogs" class="btn-secondary" data-astro-cid-oevr3whs>View All Articles</a></div></div></section>`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/components/Home/HomeBlogs.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"image": "src/images/logo.webp",
		"title": "Ira Spa | Luxury Massage & Wellness Spa in Mangalore & Kalaburagi",
		"description": "Relax, rejuvenate and restore at Ira Spa — premium massage therapy, herbal treatments and body rituals in Mangalore and Kalaburagi. Book your session online.",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero" id="hero-section" data-astro-cid-lcdefpme><img${addAttribute(serviceimage1_default.src, "src")} alt="Luxury Spa and Massage Treatment in Mangalore" fetchpriority="high" loading="eager" class="hero__bg-image" data-astro-cid-lcdefpme><div class="hero__scrim" aria-hidden="true" data-astro-cid-lcdefpme></div><div class="hero__content" data-astro-cid-lcdefpme><span class="eyebrow hero__eyebrow" data-astro-cid-lcdefpme>Mangalore &amp; Kalaburagi</span><h1 class="hero__title" data-astro-cid-lcdefpme>Luxury Spa Massage Therapies <br data-astro-cid-lcdefpme><em data-astro-cid-lcdefpme>in Mangalore</em></h1><p class="hero__tagline" data-astro-cid-lcdefpme>Ira Spa Beauty</p><a href="/ourservice" class="btn-primary" data-astro-cid-lcdefpme>Explore Services</a></div></section>${renderComponent($$result, "BookingsForm", $$BookingsForm, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Aboutspa", $$Aboutspa, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "TrustIndicators", $$TrustIndicators, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "HowItWorks", $$HowItWorks, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Benefits", $$List, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Services", $$ServicesList, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "MenuList", $$MenuList, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Customerreview", $$Customerreview, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "InstagramFeed", $$InstagramFeed, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "HomeBlogs", $$HomeBlogs, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lcdefpme": true })}` })}`;
}, "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/index.astro", void 0);
var $$file = "C:/Users/Lenovo/Documents/GitHub/ira-spa-website/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
