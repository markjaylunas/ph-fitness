import { BentoCard, Package } from "./types";

export const BENTO_LIST: BentoCard[] = [
  {
    title: "Challenge Your Limits",
    description: "Strength and endurance at new heights",
    image: "/gallery/portrait-3.webp",
  },
  {
    title: "Train with Confidence",
    description: "Top-tier equipment for safe performance",
    image: "/gallery/portrait-2.webp",
  },
  {
    title: "Rest and Recover",
    description: "Energize with real-time workout streams",
    image: "/gallery/portrait-1.webp",
  },
  {
    title: "Lift Your Potential",
    description: "Strengthen with progressive weight training",
    image: "/gallery/landscape-3.webp",
  },
  {
    title: "Build Strength with Precision",
    description: "Transform with expert-led training routines",
    image: "/gallery/landscape-2.webp",
  },
  {
    title: "Train with Confidence",
    description: "Top-tier equipment for safe performance",
    image: "/gallery/landscape-1.webp",
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
