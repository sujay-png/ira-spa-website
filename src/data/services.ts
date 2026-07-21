import spaSalon from "../images/spa-salon.jpg";

export const serviceData = {
  "body-massage": {
    name: "Body Massage",
    category: "RELAXATION & WELLNESS",
    title: "Body Massage",
    description: "A relaxing massage designed to release tension and restore balance.",
    price60: "₹2,750",
    price90: "₹4,000",
    image: spaSalon.src, // FIX: Removed broken string syntax quotes and stray comma
  },
  "herbal-therapy": {
    name: "Herbal Therapy",
    category: "NATURAL HEALING",
    title: "Herbal Therapy",
    description: "A restorative treatment using aromatic herbs to calm the body and mind.",
    price60: "₹2,500",
    price90: "₹3,700",
    image: "/images/spa-salon.jpg",
  },
  "body-polishing": {
    name: "Body Polishing",
    category: "SKIN RENEWAL",
    title: "Body Polishing",
    description: "An exfoliating ritual that leaves your skin soft, smooth and radiant.",
    price60: "₹2,200",
    price90: "₹3,400",
    image: "/images/spa-salon.jpg",
  },
  "foot-spa": {
    name: "Foot Spa",
    category: "FOOT CARE",
    title: "Foot Spa",
    description: "A soothing foot treatment to relax tired feet and improve comfort.",
    price60: "₹1,600",
    price90: "₹2,400",
    image: "/images/spa-salon.jpg",
  },
};
