import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SuggestLocationForm } from "@/components/forms/SuggestLocationForm";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find Wattl power bank rental stations near you. Locations coming soon across Australia.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero - Coming Soon */}
      <section className="relative overflow-hidden bg-brand-yellow py-20 text-center md:py-28">
        {/* Floating map pin decorations */}
        <div className="pointer-events-none absolute top-10 left-[15%] opacity-20">
          <MapPin className="h-16 w-16 text-brand-blue" />
        </div>
        <div className="pointer-events-none absolute right-[20%] bottom-16 opacity-15">
          <MapPin className="h-12 w-12 text-brand-blue" />
        </div>

        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <MapPin className="mx-auto mb-6 h-16 w-16 text-brand-blue" />
          <h1 className="mb-4 font-heading text-3xl font-bold text-brand-blue md:text-[48px]">
            Locations coming soon :)
          </h1>
          <p className="mx-auto max-w-md text-lg text-brand-blue/70">
            We&apos;re rolling out across Australia. Stay tuned!
          </p>
        </div>
      </section>

      <WaveDivider topColor="#FFC600" bottomColor="#FCE79E" />

      {/* Suggest a Location */}
      <section className="bg-brand-pale-yellow py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left text */}
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-brand-blue md:text-[36px]">
                Want Wattl<span className="text-brand-yellow">.</span> at your
                local?
              </h2>
              <p className="max-w-md text-gray-700">
                Tell us where we should launch next. We go where the crowd goes.
                From cafes to festivals, suggest a hotspot and we&apos;ll power
                up.
              </p>
              {/* Station illustration placeholder */}
              <div className="pointer-events-none mt-8 text-5xl opacity-30">
                🔌
              </div>
            </div>

            {/* Right form */}
            <SuggestLocationForm />
          </div>
        </div>
      </section>
    </>
  );
}
