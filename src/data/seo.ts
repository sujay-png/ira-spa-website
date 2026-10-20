/**
 * Centralized SEO Management for Ira Spa
 * Provides strongly-typed, dynamic SEO metadata, keywords, Open Graph, 
 * image & alt text, and canonical resolution across all pages and dynamic routes.
 */

import { serviceData } from "./services";

export interface PageSEO {
	/** Display heading for hero banners or visible page titles (e.g., "The Story of Ira Spa") */
	pageTitle: string;
	/** SEO <title> tag for search engines, browser tabs, and Open Graph */
	seoTitle: string;
	/** Alias for seoTitle for 100% compatibility with Astro Layout title prop */
	title?: string;
	/** SEO meta description for SERPs and social sharing */
	seoDescription: string;
	/** Alias for seoDescription for Astro Layout description prop */
	description?: string;
	/** Target keywords list for meta keywords */
	keywords: string[];
	/** Comma-separated keywords string ready for <meta name="keywords" content="..." /> */
	keywordsString?: string;
	/** Open Graph and Twitter card banner/preview image path or URL */
	image: string;
	/** Accessible alt text for Open Graph & Twitter social preview image */
	imageAlt: string;
	/** Optional category/eyebrow tag (e.g., "About Us", "Services", "Our Rituals") */
	eyebrow?: string;
	/** Canonical URL or relative path override */
	canonical?: string;
	/** Meta robots noindex directive */
	noindex?: boolean;
	/** Open Graph type: website, article, etc. */
	ogType?: "website" | "article";
}

export const SITE_CONFIG = {
	name: "Ira Spa",
	siteUrl: "https://www.iraspa.in",
	defaultTitle: "Ira Spa | Luxury Massage & Wellness Spa in Mangalore & Kalaburagi",
	defaultDescription:
		"Relax, rejuvenate and restore at Ira Spa — premium massage therapy, herbal treatments and body rituals in Mangalore and Kalaburagi. Book your restorative escape today.",
	defaultImage: "/images/serviceimage1.webp",
	defaultImageAlt: "Ira Spa - Luxury Wellness & Massage Spa in Mangalore & Kalaburagi",
	defaultKeywords: [
		"ira spa",
		"spa in mangalore",
		"massage in mangalore",
		"luxury spa mangalore",
		"wellness spa kalaburagi",
		"best spa in mangalore",
		"body massage",
		"thai therapy",
		"herbal treatment",
		"karnataka spa"
	]
};

/**
 * Normalizes route paths so that looking up '/', '/about', '/about/', or 'about'
 * consistently resolves to the same key.
 */
export function normalizeRoute(path: string): string {
	if (!path) return "/";
	let clean = path.trim().toLowerCase();
	// Remove query parameters or hashes
	clean = clean.split("?")[0].split("#")[0];
	// Ensure leading slash
	if (!clean.startsWith("/")) {
		clean = "/" + clean;
	}
	// Normalize trailing slash (keep single "/" for root, add "/" for subpaths)
	if (clean !== "/" && !clean.endsWith("/")) {
		clean = clean + "/";
	}
	return clean;
}

/**
 * Static SEO dictionary for all core pages
 */
export const staticPagesSEO: Record<string, PageSEO> = {
	"/": {
		pageTitle: "Ira Spa | Luxury Massage & Wellness in Mangalore & Kalaburagi",
		seoTitle: "Ira Spa | Luxury Massage & Wellness Spa in Mangalore & Kalaburgi",
		seoDescription:
			"Relax, rejuvenate and restore at Ira Spa — premium massage therapy, herbal treatments and body rituals in Mangalore and Kalaburagi. Book your session online.",
		keywords: [
			"spa in mangalore",
			"luxury massage mangalore",
			"wellness spa kalaburagi",
			"body massage mangalore",
			"herbal spa karnataka",
			"best spa in mangalore",
			"couples massage mangalore",
			"ayurvedic spa treatment",
			"day spa mangalore"
		],
		image: "/images/serviceimage1.webp",
		imageAlt: "Luxury Spa and Massage Treatment in Mangalore at Ira Spa",
		eyebrow: "Holistic Sanctuary",
		canonical: "/",
		ogType: "website"
	},
	"/about/": {
		pageTitle: "The Story of Ira Spa",
		seoTitle: "About Ira Spa Mangalore | Expert Spa Service",
		seoDescription:
			"Discover the story of Ira Spa in Mangalore and Kalaburagi. We have offered expert massage therapies, organic treatments, and holistic wellness.",
		keywords: [
			"about ira spa",
			"spa story mangalore",
			"massage history mangalore",
			"organic spa treatments karnataka",
			"holistic wellness mangalore",
			"professional therapists mangalore"
		],
		image: "/images/Aboutus_story.webp",
		imageAlt: "The Story and Heritage of Ira Spa Mangalore",
		eyebrow: "About Us",
		canonical: "/about/",
		ogType: "website"
	},
	"/menu/": {
		pageTitle: "Ira Spa Menu",
		seoTitle: "Menu | Ira Spa",
		seoDescription:
			"Explore our range of wellness treatments, threading, facials, and clean ups at Ira Spa.",
		keywords: [
			"spa menu mangalore",
			"massage price list",
			"facial treatments menu",
			"threading cleanups price mangalore",
			"ira spa packages",
			"wellness treatment costs"
		],
		image: "/images/spa-treatment.jpg",
		imageAlt: "Ira Spa Full Wellness, Massage, and Facial Treatment Menu",
		eyebrow: "Services",
		canonical: "/menu/",
		ogType: "website"
	},
	"/book-an-appointment/": {
		pageTitle: "Book a Spa Appointment",
		seoTitle: "Book Spa Service Online Appointment In Mangalore",
		seoDescription:
			"Easily book a relaxing spa session online at Ira Spa, Mangalore. Choose your preferred luxury massage or wellness therapy and schedule your appointment instantly.",
		keywords: [
			"book spa appointment online",
			"spa booking mangalore",
			"schedule massage mangalore",
			"reserve spa session kalaburagi",
			"online massage booking mangalore"
		],
		image: "/images/spa-treatment.jpg",
		imageAlt: "Book a Spa Appointment Online at Ira Spa Mangalore",
		eyebrow: "Reservation",
		canonical: "/book-an-appointment/",
		ogType: "website"
	},
	"/download-brochure/": {
		pageTitle: "Download Brochure",
		seoTitle: "Download Brochure | Ira Spa",
		seoDescription:
			"Download the Ira Spa brochure to explore our holistic massage and wellness rituals.",
		keywords: [
			"ira spa brochure",
			"download spa catalogue",
			"spa services pdf mangalore",
			"wellness treatments brochure",
			"ira spa price list pdf"
		],
		image: "/images/spa-treatment.jpg",
		imageAlt: "Download Ira Spa Holistic Treatments Brochure",
		eyebrow: "Brochure",
		canonical: "/download-brochure/",
		ogType: "website"
	},
	"/ourservice/": {
		pageTitle: "Best Spa Services",
		seoTitle: "Ira Spa | Spa Therapy Service in Mangalore",
		seoDescription:
			"Discover a complete range of relaxation rituals at Ira Spa. From expert body massages and Thai therapies to refreshing facials and foot spas. Book your session.",
		keywords: [
			"spa therapy services mangalore",
			"best spa treatments karnataka",
			"body massages",
			"facial treatments",
			"foot reflexology mangalore",
			"thai therapy kalaburagi",
			"body polishing"
		],
		image: "/images/spa-treatment.jpg",
		imageAlt: "Best Spa Therapy Services and Relaxation Rituals at Ira Spa",
		eyebrow: "Our Rituals",
		canonical: "/ourservice/",
		ogType: "website"
	},
	"/ourservice/body-massage/": {
		pageTitle: "Body Massage in Mangalore & Kalaburagi",
		seoTitle: "Body Massage Service In Mangalore | Ira Spa",
		seoDescription:
			"Experience ultimate relaxation with professional body massage services in Mangalore at Ira Spa. Choose from Swedish, Deep Tissue, Balinese & more. Book now!",
		keywords: [
			"body massage mangalore",
			"swedish massage mangalore",
			"deep tissue massage kalaburagi",
			"balinese massage",
			"full body massage for men and women",
			"relaxation massage mangalore"
		],
		image: "/images/spa-salon.jpg",
		imageAlt: "Professional Full Body Massage at Ira Spa Mangalore",
		eyebrow: "Massage Therapy",
		canonical: "/ourservice/body-massage/",
		ogType: "website"
	},
	"/ourservice/body-polishing/": {
		pageTitle: "Body Polishing in Mangalore & Kalaburagi",
		seoTitle: "Ira Spa | Body Polishing in Mangalore",
		seoDescription:
			"Get glowing, smooth skin with professional body polishing services in Mangalore at Ira Spa. Choose from Black Currant, Chocolate & Orange treatments. Book now!",
		keywords: [
			"body polishing mangalore",
			"skin exfoliation treatment",
			"chocolate body polish",
			"glowing skin treatment mangalore",
			"body scrub spa karnataka"
		],
		image: "/images/serviceimage1.webp",
		imageAlt: "Exfoliating and Hydrating Body Polishing Ritual at Ira Spa",
		eyebrow: "Skin Rejuvenation",
		canonical: "/ourservice/body-polishing/",
		ogType: "website"
	},
	"/ourservice/facial-essentials/": {
		pageTitle: "Clean-Ups And Facial-Essential in Mangalore & Kalaburagi",
		seoTitle: "Spa Facial Service Mangalore | Ira Spa",
		seoDescription:
			"Get radiant, nourished skin with expert facial services and clean-ups in Mangalore at Ira Spa. Experience Hydra Dew, Rejuvenating & Herbal Pearl facials. Book now!.",
		keywords: [
			"facial service mangalore",
			"clean up treatment spa",
			"hydra dew facial",
			"herbal pearl facial",
			"skin brightening facial mangalore",
			"rejuvenating facial"
		],
		image: "/images/serviceimage2.webp",
		imageAlt: "Nourishing Facial and Clean-Up Rituals at Ira Spa",
		eyebrow: "Facial Care",
		canonical: "/ourservice/facial-essentials/",
		ogType: "website"
	},
	"/ourservice/facial-premium-signature/": {
		pageTitle: "Facial-Premium And Signature in Mangalore & Kalaburagi",
		seoTitle: "Facial-Premium And Signature | Ira Spa Rituals",
		seoDescription:
			"Revitalize your skin with advanced premium and signature facials at Ira Spa. Enjoy deep pore cleansing, skin lightening, and luminous herbal gold rituals.",
		keywords: [
			"premium facial mangalore",
			"signature facial rituals",
			"herbal gold facial",
			"anti aging facial",
			"luxury skincare treatment mangalore",
			"skin lightening facial"
		],
		image: "/images/serviceimage1.webp",
		imageAlt: "Signature Herbal Gold Facial and Premium Skincare at Ira Spa",
		eyebrow: "Luxury Facials",
		canonical: "/ourservice/facial-premium-signature/",
		ogType: "website"
	},
	"/ourservice/foot-spa/": {
		pageTitle: "Foot Spa in Mangalore & Kalaburagi",
		seoTitle: "Ira Spa | Foot Spa in Mangalore",
		seoDescription:
			"Relieve stress and soothe tired feet with professional foot spa and luxury pedicure services in Mangalore at Ira Spa. Book your relaxing session today!",
		keywords: [
			"foot spa mangalore",
			"foot reflexology kalaburagi",
			"luxury pedicure mangalore",
			"foot massage spa",
			"stress relief foot therapy"
		],
		image: "/images/serviceimage2.webp",
		imageAlt: "Soothing Foot Spa and Reflexology Session at Ira Spa",
		eyebrow: "Foot Care",
		canonical: "/ourservice/foot-spa/",
		ogType: "website"
	},
	"/ourservice/herbal-therapy/": {
		pageTitle: "Herbal Therapy in Mangalore & Kalaburagi",
		seoTitle: "Herbal Massage Spa in Mangalore | Ira Spa",
		seoDescription:
			"Experience deep relaxation with professional herbal massage therapy in Mangalore at Ira Spa. Discover healing Herbal Potli and Hot Stone therapies. Book now!",
		keywords: [
			"herbal massage spa mangalore",
			"herbal potli therapy",
			"hot stone massage mangalore",
			"ayurvedic poultice therapy",
			"holistic herbal healing karnataka"
		],
		image: "/images/Signature-Herbal-Gold-Facial-Instant-Glow-Naturally.webp",
		imageAlt: "Traditional Herbal Potli and Hot Stone Therapy at Ira Spa",
		eyebrow: "Ancient Healing",
		canonical: "/ourservice/herbal-therapy/",
		ogType: "website"
	},
	"/ourservice/quick-massage/": {
		pageTitle: "Quick Massage in Mangalore & Kalaburagi",
		seoTitle: "Quick Massage Service in Mangalore | Ira Spa",
		seoDescription:
			"Need a quick break? Experience express quick massage services in Mangalore at Ira Spa. Enjoy 30-min foot reflexology, back, head, neck & shoulder relief today!",
		keywords: [
			"quick massage mangalore",
			"express head neck shoulder massage",
			"30 min massage mangalore",
			"back pain massage",
			"office stress relief massage"
		],
		image: "/images/spa-salon.jpg",
		imageAlt: "Express Quick Massage for Neck, Shoulders and Back at Ira Spa",
		eyebrow: "Express Relief",
		canonical: "/ourservice/quick-massage/",
		ogType: "website"
	},
	"/ourservice/thai-therapy/": {
		pageTitle: "Thai Therapy in Mangalore & Kalaburagi",
		seoTitle: "Ira Spa | Thai Therapy Spa in Mangalore",
		seoDescription:
			"Relieve daily stress and muscle tension at Ira Spa in Mangalore. Discover traditional Thai massage and holistic bamboo therapies for total wellness. Book today.",
		keywords: [
			"thai massage mangalore",
			"traditional thai therapy",
			"bamboo massage mangalore",
			"acupressure yoga massage",
			"authentic thai spa karnataka"
		],
		image: "/images/spa-salon.jpg",
		imageAlt: "Traditional Thai Therapy and Acupressure Treatment at Ira Spa",
		eyebrow: "Signature Therapies",
		canonical: "/ourservice/thai-therapy/",
		ogType: "website"
	},
	"/contactus/mangalore/": {
		pageTitle: "Contact Ira Spa – Mangalore",
		seoTitle: "Contact Us | Book a Spa Appointment in Mangalore – Ira Spa",
		seoDescription:
			"Contact Ira Spa in Kodialbail, Mangalore to book massages, facials, and wellness therapies. Call +91 89716 67199 or reserve online today.",
		keywords: [
			"contact ira spa mangalore",
			"spa in kodialbail mangalore",
			"ira spa phone number",
			"book massage mangalore appointment",
			"spa near AJ grand hotel"
		],
		image: "/images/spa-salon.jpg",
		imageAlt: "Ira Spa Kodialbail Mangalore Facility and Reception",
		eyebrow: "Get in Touch",
		canonical: "/Contactus/Mangalore/",
		ogType: "website"
	},
	"/contactus/kalaburgi/": {
		pageTitle: "Contact Ira Spa – Kalaburagi",
		seoTitle: "Contact Us | Book a Spa Appointment in Kalaburagi – Ira Spa",
		seoDescription:
			"Contact Ira Spa in Sedam Rd, Kalaburagi to book massages, facials, and wellness therapies. Call +91 7022865999 or reserve online today.",
		keywords: [
			"contact ira spa kalaburagi",
			"spa in gulbarga",
			"ira spa kalaburagi phone number",
			"tulips inn hotel spa sedam road",
			"best spa gulbarga"
		],
		image: "/images/spa-salon.jpg",
		imageAlt: "Ira Spa Sedam Road Kalaburagi Facility and Reception",
		eyebrow: "Get in Touch",
		canonical: "/Contactus/Kalaburgi/",
		ogType: "website"
	},
	"/blogs/": {
		pageTitle: "Ira Spa Journal & Articles",
		seoTitle: "Ira Spa | Blogs and Articles",
		seoDescription:
			"Read the latest wellness articles and spa tips from Ira Spa in Mangalore. Stay informed on massage benefits, self-care routines, skin treatments, and more.",
		keywords: [
			"spa blog mangalore",
			"wellness tips",
			"benefits of massage",
			"skincare guide",
			"ira spa journal",
			"self care advice"
		],
		image: "/images/spa-treatment.jpg",
		imageAlt: "Ira Spa Journal — Wellness Guides and Spa Tips",
		eyebrow: "Our Journal",
		canonical: "/blogs/",
		ogType: "website"
	},
	"/sitemap/": {
		pageTitle: "Site Map",
		seoTitle: "Sitemap | Ira Spa",
		seoDescription:
			"Sitemap for Ira Spa Mangalore and Kalaburagi — easily find all treatments, services, blog articles and pages.",
		keywords: ["ira spa sitemap", "spa directory mangalore", "site links ira spa"],
		image: "/logo.webp",
		imageAlt: "Ira Spa Sitemap Directory",
		eyebrow: "Directory",
		canonical: "/sitemap/",
		ogType: "website"
	},
	"/terms-and-conditions/": {
		pageTitle: "Terms & Conditions",
		seoTitle: "Terms & Conditions | Ira Spa",
		seoDescription:
			"Terms and conditions for using the Ira Spa website and wellness services.",
		keywords: ["ira spa terms", "terms and conditions", "spa policy mangalore"],
		image: "/logo.webp",
		imageAlt: "Ira Spa Terms and Conditions",
		eyebrow: "Legal",
		canonical: "/terms-and-conditions/",
		ogType: "website"
	},
	"/privacy-policy/": {
		pageTitle: "Privacy Policy",
		seoTitle: "Privacy Policy | Ira Spa",
		seoDescription:
			"Privacy Policy for Ira Spa — learn how we protect your personal information.",
		keywords: ["ira spa privacy policy", "privacy policy", "data protection"],
		image: "/logo.webp",
		imageAlt: "Ira Spa Privacy Policy",
		eyebrow: "Legal",
		canonical: "/privacy-policy/",
		ogType: "website"
	},
	"/refund-and-return-policy/": {
		pageTitle: "Refund & Returns Policy",
		seoTitle: "Refund & Returns Policy | Ira Spa",
		seoDescription:
			"Refund and Returns Policy for Ira Spa services and appointment bookings.",
		keywords: ["ira spa refund policy", "cancellation policy", "returns policy"],
		image: "/logo.webp",
		imageAlt: "Ira Spa Refund and Return Policy",
		eyebrow: "Legal",
		canonical: "/refund-and-return-policy/",
		ogType: "website"
	},
	"404": {
		pageTitle: "Page Not Found",
		seoTitle: "Page Not Found | Ira Spa",
		seoDescription:
			"We're sorry, the page you're looking for doesn't exist or has been moved.",
		keywords: ["404", "page not found", "ira spa"],
		image: "/logo.webp",
		imageAlt: "Ira Spa 404 Page Not Found",
		noindex: true,
		ogType: "website"
	}
};

/**
 * Formats a PageSEO object, guaranteeing title, description, and keywordsString are populated.
 */
export function formatSEO(data: Partial<PageSEO>): PageSEO {
	const seoTitle = data.seoTitle || data.title || SITE_CONFIG.defaultTitle;
	const seoDescription = data.seoDescription || data.description || SITE_CONFIG.defaultDescription;
	const pageTitle = data.pageTitle || seoTitle.split("|")[0].trim();
	
	const keywordsList = Array.isArray(data.keywords) && data.keywords.length > 0
		? data.keywords
		: SITE_CONFIG.defaultKeywords;
	
	// Deduplicate keywords
	const cleanKeywords = Array.from(new Set(keywordsList.map((k) => k.trim()).filter(Boolean)));

	const image = data.image || SITE_CONFIG.defaultImage;
	const imageAlt = data.imageAlt || `${pageTitle} | ${SITE_CONFIG.name}`;

	return {
		pageTitle,
		seoTitle,
		title: seoTitle,
		seoDescription,
		description: seoDescription,
		keywords: cleanKeywords,
		keywordsString: cleanKeywords.join(", "),
		image,
		imageAlt,
		eyebrow: data.eyebrow,
		canonical: data.canonical,
		noindex: data.noindex,
		ogType: data.ogType || "website"
	};
}

/**
 * Fully dynamic SEO resolver.
 * Looks up any path or identifier in the static dictionary, normalizes route paths,
 * and merges any specific overrides passed by the calling page.
 */
export function getSEO(pathOrKey: string, overrides?: Partial<PageSEO>): PageSEO {
	const normalized = normalizeRoute(pathOrKey);
	const base = staticPagesSEO[normalized] || staticPagesSEO[pathOrKey] || {
		pageTitle: overrides?.pageTitle || SITE_CONFIG.defaultTitle,
		seoTitle: overrides?.seoTitle || overrides?.title || SITE_CONFIG.defaultTitle,
		seoDescription: overrides?.seoDescription || overrides?.description || SITE_CONFIG.defaultDescription,
		keywords: SITE_CONFIG.defaultKeywords,
		image: SITE_CONFIG.defaultImage,
		imageAlt: SITE_CONFIG.defaultImageAlt,
		canonical: normalized,
		ogType: "website"
	};

	return formatSEO({
		...base,
		...overrides
	});
}

/**
 * Dynamic generator for /services/[slug] service detail pages
 */
export function getServiceSEO(
	slug: string,
	customService?: { title?: string; name?: string; description?: string; image?: string; category?: string },
	overrides?: Partial<PageSEO>
): PageSEO {
	const service = customService || (serviceData as Record<string, any>)[slug];

	if (!service) {
		return getSEO("/ourservice/", overrides);
	}

	const serviceTitle = service.title || service.name || "Spa Ritual";
	const serviceDesc = service.description || SITE_CONFIG.defaultDescription;
	const serviceImg = service.image || SITE_CONFIG.defaultImage;

	return formatSEO({
		pageTitle: serviceTitle,
		seoTitle: `${serviceTitle} | Ira Spa Rituals`,
		seoDescription: serviceDesc,
		eyebrow: service.category || "Spa Ritual",
		keywords: [
			serviceTitle.toLowerCase(),
			`${serviceTitle.toLowerCase()} mangalore`,
			`${serviceTitle.toLowerCase()} kalaburagi`,
			"ira spa rituals",
			"spa therapies karnataka",
			"wellness treatments"
		],
		image: serviceImg,
		imageAlt: `${serviceTitle} Treatment at Ira Spa`,
		canonical: `/services/${slug}/`,
		ogType: "website",
		...overrides
	});
}

/**
 * Dynamic generator for WordPress blog posts (/blogs/[slug])
 */
export function getBlogSEO(
	post: {
		title: string | { rendered: string };
		excerpt?: string | { rendered: string };
		slug?: string;
		featuredImage?: { src?: string; alt?: string };
		categories?: Array<{ name: string; slug: string }>;
	},
	overrides?: Partial<PageSEO>
): PageSEO {
	const rawTitle = typeof post.title === "string" ? post.title : post.title?.rendered || "Journal Article";
	const cleanTitle = rawTitle.replace(/<[^>]*>/g, "").trim();

	const rawExcerpt = typeof post.excerpt === "string" ? post.excerpt : post.excerpt?.rendered || "";
	const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, "").slice(0, 160).trim();

	const categoryKeywords = post.categories ? post.categories.map((c) => c.name.toLowerCase()) : [];
	const imgUrl = post.featuredImage?.src || SITE_CONFIG.defaultImage;
	const imgAlt = post.featuredImage?.alt || cleanTitle;

	return formatSEO({
		pageTitle: cleanTitle,
		seoTitle: `${cleanTitle} | Ira Spa Journal`,
		seoDescription: cleanExcerpt || `Read ${cleanTitle} on the Ira Spa wellness journal.`,
		keywords: [
			...categoryKeywords,
			"ira spa journal",
			"wellness blog",
			"spa tips mangalore",
			"massage advice"
		],
		image: imgUrl,
		imageAlt: imgAlt,
		eyebrow: post.categories?.[0]?.name || "Journal",
		canonical: post.slug ? `/blogs/${post.slug}/` : undefined,
		ogType: "article",
		...overrides
	});
}

/**
 * Dynamic generator for Blog Category pages (/blogs/category/[category])
 */
export function getBlogCategorySEO(
	categoryName: string,
	categorySlug: string,
	pageNum: number = 1,
	overrides?: Partial<PageSEO>
): PageSEO {
	const pageSuffix = pageNum > 1 ? ` — Page ${pageNum}` : "";
	return formatSEO({
		pageTitle: categoryName,
		seoTitle: `${categoryName} Articles${pageSuffix} | Ira Spa Journal`,
		seoDescription: `Browse Ira Spa journal articles on ${categoryName}. Restorative tips, expert advice, and wellness guides.`,
		keywords: [
			categoryName.toLowerCase(),
			`${categoryName.toLowerCase()} articles`,
			"ira spa journal",
			"wellness guides mangalore"
		],
		image: SITE_CONFIG.defaultImage,
		imageAlt: `${categoryName} - Ira Spa Journal Articles`,
		eyebrow: "Journal Category",
		canonical: `/blogs/category/${categorySlug}/`,
		noindex: pageNum > 1,
		ogType: "website",
		...overrides
	});
}

/**
 * Dynamic generator for Blog pagination (/blogs/page/[page])
 */
export function getBlogPaginationSEO(
	pageNum: number,
	totalPages?: number,
	overrides?: Partial<PageSEO>
): PageSEO {
	return formatSEO({
		pageTitle: `The Serenity Feed — Page ${pageNum}`,
		seoTitle: `The Serenity Feed — Page ${pageNum} | Ira Spa Journal`,
		seoDescription:
			"Wellness notes from Ira Spa — mindfulness, treatment guides and rituals for a calmer, more restorative life.",
		keywords: ["wellness blog page", "ira spa journal feed", "spa articles"],
		image: SITE_CONFIG.defaultImage,
		imageAlt: `Ira Spa Journal Feed Page ${pageNum}`,
		eyebrow: "Our Journal",
		canonical: `/blogs/page/${pageNum}/`,
		noindex: true, // Paginated subpages shouldn't compete with main blog index
		ogType: "website",
		...overrides
	});
}

/**
 * Helper to construct custom on-the-fly SEO objects with defaults
 */
export function createCustomSEO(custom: Partial<PageSEO>): PageSEO {
	return formatSEO(custom);
}


/**
 * Centralized Alt Text Registry for Image Gallery & Visual Assets
 * Maps file names, relative paths, or image slugs to descriptive, keyword-rich alt texts.
 */
export const galleryAltTexts: Record<string, string> = {
	// --- Ira Spa Gallery Images (src/images) ---
	"Aboutus_story.webp": "Therapist performing a restorative holistic massage ritual at Ira Spa",
	"homepage_image.jpg": "Relaxing full body back massage with aromatic essential oils and frangipani flower",
	"homepage_image1.jpg": "Client relaxing peacefully on a candlelit massage bed at Ira Spa",
	"image1.jpg": "Traditional herbal potli poultice massage therapy for pain relief and relaxation",
	"ira-spa.png": "Therapist providing deep tissue shoulder and back massage therapy",
	"logo.webp": "Ira Spa Luxury Massage and Wellness Sanctuary Emblem Logo",
	"sacred stone.jpg": "Warm sacred hot stone therapy for deep muscle relaxation and stress relief",
	"sacred-stone.jpg": "Warm sacred hot stone therapy for deep muscle relaxation and stress relief",
	"serviceimage1.webp": "Rejuvenating organic facial treatment with revitalizing skincare mask",
	"serviceimage2.webp": "Gentle head, scalp, and temple acupressure massage for anxiety and headache relief",
	"serviceimg2.jpg": "Nourishing facial cleanup and gentle skin exfoliation treatment",
	"Signature-Herbal-Gold-Facial-Instant-Glow-Naturally.webp": "Signature herbal gold facial treatment providing instant radiant skin glow",
	"spa-reception.jpg": "Tranquil luxury reception and welcoming lounge area at Ira Spa",
	"spa-salon.jpg": "Private luxury spa treatment suite with ambient mood lighting",
	"spa-treatment.jpg": "Therapist applying botanical oils during a restorative spa treatment",
	"spa.png": "Relaxing neck, cervical spine, and shoulder tension release massage",
	"tea.jpg": "Post-treatment complimentary detox herbal tea ritual served in traditional teapot",

	// --- Public Service & Treatment Gallery Assets (public/images) ---
	"bodypolishing.jpg": "Exfoliating full body polishing treatment for radiant and soft skin",
	"Clean-Ups And Facial-Essential.jpg": "Nourishing facial cleanup and botanical hydration treatment",
	"deep-tissue.jpg": "Deep tissue therapeutic massage for chronic muscle tension relief",
	"Facial-Premium And Signature.jpg": "Premium signature facial for skin brightening and anti-aging care",
	"foot-spa.jpg": "Soothing foot spa soak and reflexology treatment at Ira Spa",
	"footspa1.jpg": "Revitalizing foot spa and luxury pedicure therapy session",
	"herbal-gold.jpg": "Luminous herbal gold facial ritual for instant natural glow",
	"hot-stonetherapy.jpg": "Therapeutic hot stone massage along energy pathways",
	"quickmassage.jpg": "Express quick massage focusing on upper back, neck, and shoulder relief",
	"thai-massage.jpg": "Traditional authentic Thai massage with assisted yoga stretches",
	"TraditionalThai.jpg": "Authentic ancient Thai therapy and pressure-point stimulation",

	// --- Instagram Gallery Feed (public/insta-post) ---
	"imgi_62_WhatsApp-Image-2026-06-15-at-2.43.04-PM-819x1024.jpg": "Holistic body massage treatment highlights from Ira Spa Instagram",
	"imgi_63_WhatsApp-Image-2026-06-15-at-1.16.26-PM-819x1024.jpg": "Relaxing spa therapy room and wellness setup from Ira Spa Instagram",
	"imgi_64_720408192_17941609788232822_6146910874462510615_n-819x1024.jpg": "Client wellness and rejuvenation journey at Ira Spa",
	"imgi_65_713563222_17940549111232822_7584340239445424097_n-819x1024.jpg": "Organic facial and skincare treatment session at Ira Spa",
	"imgi_66_707561540_17939421015232822_95968831005194178_n-819x1024.jpg": "Therapeutic body scrub and skin polishing session at Ira Spa",
	"imgi_67_700955472_17938645245232822_3396926590912006148_n-819x1024.jpg": "Ayurvedic herbal massage oils and therapies at Ira Spa"
};

/**
 * Resolves the centralized alt text for any gallery image.
 * Accepts filenames, relative paths, or URLs (e.g., 'tea.jpg', '../../images/tea.jpg', '/images/tea.jpg').
 */
export function getGalleryImageAlt(imagePathOrName: string, fallback?: string): string {
	if (!imagePathOrName) return fallback || SITE_CONFIG.defaultImageAlt;

	// Extract clean filename without queries or hashes
	const clean = imagePathOrName.split("?")[0].split("#")[0];
	const filename = clean.split("/").pop() || clean;
	const decoded = decodeURIComponent(filename);

	if (galleryAltTexts[filename]) return galleryAltTexts[filename];
	if (galleryAltTexts[decoded]) return galleryAltTexts[decoded];

	// Match case-insensitively or without extension
	const nameWithoutExt = filename.substring(0, filename.lastIndexOf(".")) || filename;
	for (const [key, alt] of Object.entries(galleryAltTexts)) {
		const keyWithoutExt = key.substring(0, key.lastIndexOf(".")) || key;
		if (
			key.toLowerCase() === filename.toLowerCase() ||
			keyWithoutExt.toLowerCase() === nameWithoutExt.toLowerCase()
		) {
			return alt;
		}
	}

	return fallback || `Ira Spa Wellness and Massage Treatment Gallery - ${nameWithoutExt.replace(/[-_]/g, " ")}`;
}

export default getSEO;

