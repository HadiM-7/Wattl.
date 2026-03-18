import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-yellow text-center">
        {/* Floating map pin decorations */}
        <div className="pointer-events-none absolute top-16 left-[15%] opacity-25">
          <MapPin className="h-20 w-20 text-brand-blue md:h-28 md:w-28" />
        </div>
        <div className="pointer-events-none absolute right-[18%] bottom-20 opacity-20">
          <MapPin className="h-16 w-16 text-brand-blue md:h-20 md:w-20" />
        </div>
        <div className="pointer-events-none absolute bottom-32 left-[10%] opacity-15">
          <MapPin className="h-12 w-12 text-brand-blue" />
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-6">
          <MapPin className="mx-auto mb-8 h-24 w-24 text-brand-blue md:h-32 md:w-32" />
          <h1
            className="mb-6 font-heading text-brand-blue"
            style={{
              fontSize: "clamp(40px, 8vw, 64px)",
              textShadow: "4px 4px 0 rgba(26, 26, 26, 0.12)",
            }}
          >
            Locations coming soon :)
          </h1>
          <p className="mx-auto max-w-lg text-xl text-brand-black/70" style={{ fontWeight: 700 }}>
            We&apos;re rolling out across Australia. Stay tuned!
          </p>
        </div>
      </section>

      <SquigglyDivider color="#1A1A1A" bg="#FCE79E" />

      {/* Suggest a Location */}
      <section className="relative bg-brand-pale-yellow py-20 md:py-32">
        {/* Waratah decoration */}
        <div className="pointer-events-none absolute right-4 bottom-8 hidden md:block md:right-12" aria-hidden="true">
          <Image
            src="/images/decorations/waratah.png"
            alt=""
            width={120}
            height={120}
            className="h-36 w-36 object-contain"
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            {/* Left text */}
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold text-brand-blue md:text-[42px]">
                Want Wattl<span className="text-brand-yellow">.</span> at your
                local?
              </h2>
              <p className="max-w-lg text-lg text-brand-black/70" style={{ fontWeight: 700 }}>
                Tell us where we should launch next. We go where the crowd goes.
                From cafes to festivals, suggest a hotspot and we&apos;ll power
                up.
              </p>
              {/* Kangaroo decoration */}
              <div className="pointer-events-none mt-8" aria-hidden="true">
                <Image
                  src="/images/decorations/kangaroo.png"
                  alt=""
                  width={130}
                  height={130}
                  className="h-28 w-28 object-contain md:h-40 md:w-40"
                />
              </div>
            </div>

            {/* Right form - on surface */}
            <div
              className="rounded-card border-3 border-brand-black bg-white p-8"
              style={{ boxShadow: "6px 6px 0 #003CA7" }}
            >
              <SuggestLocationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
