import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import FounderAndContact from "@/components/sections/FounderAndContact";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <Portfolio />
      <Services />
      <FounderAndContact />
      <Testimonials />
    </div>
  );
}
