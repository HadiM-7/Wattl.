import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { AppDownloadCTA } from "@/components/sections/AppDownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <AppDownloadCTA />
    </>
  );
}
