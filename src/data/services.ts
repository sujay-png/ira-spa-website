import type { ImageMetadata } from "astro";

import bodyMassageImg from "../images/serviceimage2.webp";
import herbalTherapyImg from "../images/serviceimage1.webp";
import thaiTherapyImg from "../images/thai-massage.webp";
import bodyPolishingImg from "../images/bodypolishing.webp";
import facialEssentialsImg from "../images/Clean-Ups And Facial-Essential.webp";
import facialPremiumImg from "../images/Facial-Premium And Signature.webp";
import quickMassageImg from "../images/quickmassage.webp";
import footSpaImg from "../images/footspa1.webp";
import lomiLomiImg from "../images/lomi-lomi.webp";

export interface ServiceDetail {
    name: string;
    title: string;
    description: string;
    price60: string;
    price90: string;
    image: ImageMetadata;
    alt?: string;
}

export const serviceData: Record<string, ServiceDetail> = {
    "body-massage": {
        name: "Body Massage",
        title: "Body Massage",
        description:
            "A relaxing full-body massage designed to release tension, ease sore muscles and restore balance to a tired body.",
        price60: "₹2,750",
        price90: "₹4,000",
        image: bodyMassageImg,
        alt: "Therapeutic body massage at Ira Spa",
    },
    "herbal-therapy": {
        name: "Herbal Therapy",
        title: "Herbal Therapy",
        description:
            "A restorative treatment using warm, aromatic herbal poultices and oils to calm the body and quiet the mind.",
        price60: "₹2,500",
        price90: "₹3,700",
        image: herbalTherapyImg,
        alt: "Restorative herbal therapy at Ira Spa",
    },
    "thai-therapy": {
        name: "Thai Therapy",
        title: "Thai Therapy",
        description:
            "An ancient healing system combining acupressure, energy line work and assisted yoga postures to release the strain of the daily grind.",
        price60: "₹2,400",
        price90: "₹3,600",
        image: thaiTherapyImg,
        alt: "Traditional Thai therapy and yoga stretch massage at Ira Spa",
    },
    "body-polishing": {
        name: "Body Polishing",
        title: "Body Polishing",
        description:
            "An exfoliating full-body ritual that lifts away dullness, leaving skin soft, smooth and visibly radiant.",
        price60: "₹2,200",
        price90: "₹3,400",
        image: bodyPolishingImg,
        alt: "Exfoliating full body polishing ritual at Ira Spa",
    },
    "facial-essentials": {
        name: "Clean-Ups And Facial-Essential",
        title: "Clean-Ups And Facial-Essential",
        description:
            "Let our well trained aestheticians take over and grant you a nourished, smooth, and radiant skin.",
        price60: "₹700",
        price90: "₹2,000",
        image: facialEssentialsImg,
        alt: "Nourishing facial clean-up and botanical care at Ira Spa",
    },
    "facial-premium-signature": {
        name: "Facial-Premium And Signature",
        title: "Facial-Premium And Signature",
        description:
            "Let our well trained aestheticians take over and grant you a nourished, smooth, and radiant skin.",
        price60: "₹2,400",
        price90: "₹3,500",
        image: facialPremiumImg,
        alt: "Premium signature facial treatment at Ira Spa",
    },
    "quick-massage": {
        name: "Quick Massage",
        title: "Quick Massage",
        description:
            "A soothing massage using different kinds of essential oils for relaxing and de-stressing.",
        price60: "₹1,200",
        price90: "₹1,600",
        image: quickMassageImg,
        alt: "Quick express massage for neck and shoulders at Ira Spa",
    },
    "foot-spa": {
        name: "Foot Spa",
        title: "Foot Spa",
        description:
            "A soothing foot soak and massage ritual that relieves tired feet and improves circulation and comfort.",
        price60: "₹800",
        price90: "₹1,200",
        image: footSpaImg,
        alt: "Soothing foot spa soak and reflexology ritual at Ira Spa",
    },
    "lomi-lomi-massage": {
        name: "Lomi Lomi Massage",
        title: "Lomi Lomi Massage",
        description:
            "A traditional Hawaiian massage using long, flowing strokes to release deep muscle tension, improve circulation and bring calm to body and mind.",
        price60: "₹3,000",
        price90: "₹4,500",
        image: lomiLomiImg,
        alt: "Traditional Hawaiian Lomi Lomi massage therapy at Ira Spa",
    },
};
