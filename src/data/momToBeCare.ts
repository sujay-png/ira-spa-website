import type { ImageMetadata } from "astro";
import headNeckIcon from "../assets/icons/head-neck-massage-new.svg";
import shoulderBackIcon from "../assets/icons/shoulder-back-massage.svg";
import footReflexologyIcon from "../assets/icons/foot-reflexology-new.svg";

export interface MomToBeCareItem {
  id: string;
  title: string;
  icon: ImageMetadata;
}

export interface MomToBeCareData {
  title: string;
  subtitle: string;
  items: MomToBeCareItem[];
}

export const momToBeCareData: MomToBeCareData = {
  title: "Mom to Be Care",
  subtitle: "Pre Delivery Massage Session",
  items: [
    {
      id: "head-neck-massage",
      title: "Head and Neck Massage",
      icon: headNeckIcon,
    },
    {
      id: "shoulder-back-massage",
      title: "Shoulder and Back Massage",
      icon: shoulderBackIcon,
    },
    {
      id: "foot-reflexology",
      title: "Foot Reflexology",
      icon: footReflexologyIcon,
    },
  ],
};
