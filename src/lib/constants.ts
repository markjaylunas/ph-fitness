import LandscapeMin1 from "@/assets/gallery/landscape-1-min.jpg";
import LandscapeFull1 from "@/assets/gallery/landscape-1.jpg";
import LandscapeMin2 from "@/assets/gallery/landscape-2-min.jpg";
import LandscapeFull2 from "@/assets/gallery/landscape-2.jpg";
import LandscapeMin3 from "@/assets/gallery/landscape-3-min.jpg";
import LandscapeFull3 from "@/assets/gallery/landscape-3.jpg";
import PortraitMin1 from "@/assets/gallery/portrait-1-min.jpg";
import PortraitFull1 from "@/assets/gallery/portrait-1.jpg";
import PortraitMin2 from "@/assets/gallery/portrait-2-min.jpg";
import PortraitFull2 from "@/assets/gallery/portrait-2.jpg";
import PortraitMin3 from "@/assets/gallery/portrait-3-min.jpg";
import PortraitFull3 from "@/assets/gallery/portrait-3.jpg";
import { BentoCard, Package } from "./types";

export const BENTO_LIST: BentoCard[] = [
  {
    title: "Challenge Your Limits",
    description: "Strength and endurance at new heights",
    image: PortraitMin3,
    imageFull: PortraitFull3,
  },
  {
    title: "Train with Confidence",
    description: "Top-tier equipment for safe performance",
    image: PortraitMin2,
    imageFull: PortraitFull2,
  },
  {
    title: "Rest and Recover",
    description: "Energize with real-time workout streams",
    image: PortraitMin1,
    imageFull: PortraitFull1,
  },
  {
    title: "Lift Your Potential",
    description: "Strengthen with progressive weight training",
    image: LandscapeMin3,
    imageFull: LandscapeFull3,
  },
  {
    title: "Build Strength with Precision",
    description: "Transform with expert-led training routines",
    image: LandscapeMin2,
    imageFull: LandscapeFull2,
  },
  {
    title: "Train with Confidence",
    description: "Top-tier equipment for safe performance",
    image: LandscapeMin1,
    imageFull: LandscapeFull1,
  },
];

export const PACKAGE_LIST: Package[] = [
  {
    name: "Basic Package",
    pricing: {
      monthly: {
        currency: "$",
        price: 25,
        description: "Per month",
      },
      yearly: {
        currency: "$",
        price: 255, // After 15% discount
        description: "Per year is 15% off compared to monthly payments",
      },
    },
    features: [
      "Unlimited Gym Access",
      "2x Fitness Consultant",
      "Nutrition Tracking",
      "1x Free Supplement",
      "3 Days per week",
      "Personal Trainer",
    ],
  },
  {
    name: "Mid Package",
    pricing: {
      monthly: {
        currency: "$",
        price: 55,
        description: "Per month",
      },
      yearly: {
        currency: "$",
        price: 561, // After 15% discount
        description: "Per year is 15% off compared to monthly payments",
      },
    },
    features: [
      "Unlimited Gym Access",
      "4x Fitness Consultant",
      "Nutrition Tracking",
      "3x Free Supplement",
      "5 Days per week",
      "Personal Trainer",
    ],
    bestOffer: true,
  },
  {
    name: "Pro Package",
    pricing: {
      monthly: {
        currency: "$",
        price: 75,
        description: "Per month",
      },
      yearly: {
        currency: "$",
        price: 765, // After 15% discount
        description: "Per year is 15% off compared to monthly payments",
      },
    },
    features: [
      "Unlimited Gym Access",
      "7x Fitness Consultant",
      "Nutrition Tracking",
      "5x Free Supplement",
      "Gym Card",
      "Personal Trainer",
    ],
  },
  {
    name: "Athlete Package",
    pricing: {
      monthly: {
        currency: "$",
        price: 105,
        description: "Per month",
      },
      yearly: {
        currency: "$",
        price: 1071, // After 15% discount
        description: "Per year is 15% off compared to monthly payments",
      },
    },
    features: [
      "Unlimited Gym Access",
      "Free Clothes",
      "All Training Program",
      "Free Fitness Consultant",
      "Free Supplement",
      "Gym Card",
    ],
  },
];
