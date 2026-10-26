import type { ImageMetadata } from "astro";
import fullBodyIcon from "../assets/icons/full-body-massage.svg";

export interface MomCareItem {
  id: string;
  title: string;
  icon: ImageMetadata;
  alt: string;
}

export interface MomCareData {
  title: string;
  subtitle: string;
  items: MomCareItem[];
}

export const momCareData: MomCareData = {
  title: "Mom Care",
  subtitle: "Post Delivery",
  items: [
    {
      id: "full-body-massage",
      title: "Full Body Massage",
      icon: fullBodyIcon,
      alt: "Post-delivery restorative full body massage icon",
    },
  ],
};
