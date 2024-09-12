import { NavItem } from "./types";

export const siteConfig = {
  name: "PH Fitness",
  url: "https://www.ph-fitness.makje.com",
  description:
    "PH Fitness is your destination for achieving your fitness goals with state-of-the-art equipment, expert trainers, and personalized workout plans. Whether you're a beginner or a seasoned athlete, we provide a welcoming environment to help you succeed in your fitness journey. Get fit, stay motivated, and join our community today!",
  links: {},
};

export type SiteConfig = typeof siteConfig;

type RoutesConfig = {
  mainNav: NavItem[];
};

export const routesConfig: RoutesConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "Gallery",
      href: "/#gallery",
    },
  ],
};
