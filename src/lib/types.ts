import { StaticImageData } from "next/image";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
};

export type BentoCard = {
  title: string;
  description: string;
  image: StaticImageData;
  imageFull: StaticImageData;
};
