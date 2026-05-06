import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Services = dynamic(() => import("@/components/sections/Services"));
const FounderAndContact = dynamic(() => import("@/components/sections/FounderAndContact"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));

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
