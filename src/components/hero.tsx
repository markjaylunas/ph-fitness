import HeroImage from "@/assets/hero-image.png";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse sm:flex-row max-h-screen max-w-screen-2xl mx-auto px-4 sm:px-32">
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h2 className="flex flex-col scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl">
          <span>Build your</span>
          <span>fitness journey</span>
        </h2>

        <p className="text-foreground-400 max-w-screen-xl text-sm lg:text-base">
          Embark on a transformative fitness journey tailored just for you. At
          PH Fitness, we offer personalized workout plans, expert guidance, and
          a supportive community to help you reach your goals, no matter your
          starting point. Let&apos;s get stronger, healthier, and more
          confident—one step at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="solid" color="primary" size="lg">
            Start Training
          </Button>
          <Button variant="bordered" color="primary" size="lg">
            View Packages
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <div className="relative z-0 h-3/4">
          <h1 className="absolute -z-10 top-1/2 left-[32%] sm:left-[35%] -rotate-90 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl lg:text-8xl font-black text-white/25 text-nowrap">
            PH Fitness
          </h1>
          <Image
            src={HeroImage}
            alt="hero image"
            className="brightness-75 max-h-[350px] sm:max-h-full object-contain"
            unoptimized
          />
          {/* <div className="absolute top-0 right-0 z-10 h-full w-full bg-black/20" /> */}
        </div>
      </div>
    </section>
  );
}
