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
};

export type Pricing = {
  currency: string;
  price: number;
  description: string;
};

export type Package = {
  name: string;
  pricing: {
    monthly: Pricing;
    yearly: Pricing;
  };
  features: string[];
  bestOffer?: boolean;
};
