import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero />

      <Gallery />

      <Pricing />
    </main>
  );
}
