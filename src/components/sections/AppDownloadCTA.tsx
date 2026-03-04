"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

export function AppDownloadCTA() {
  return (
    <>
      <SquigglyDivider color="#1A1A1A" bg="#38AAD4" />
      <section className="bg-brand-teal py-16 md:py-24">
        <div className="relative mx-auto max-w-[1200px] px-4 text-center md:px-6">
{/* Cockatoo decoration (bottom-right, larger) */}
          <div className="pointer-events-none absolute right-4 bottom-0 md:right-8" aria-hidden="true">
            <Image
              src="/images/decorations/cockatoo.png"
              alt=""
              width={120}
              height={120}
              className="h-24 w-24 object-contain md:h-36 md:w-36"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mx-auto mb-6 max-w-lg font-heading text-3xl font-bold text-white md:text-[40px]">
              Never Run Out{" "}
              <em className="not-italic text-brand-yellow">Again.</em>
            </h2>

            <p className="mx-auto mb-12 max-w-md text-white/70" style={{ fontWeight: 700 }}>
              Download Wattl. to find stations near you and grab a power bank
              in seconds. Stay charged, stay connected.
            </p>

            {/* Official app store badges */}
            <AppStoreBadges />
          </motion.div>
        </div>
      </section>
    </>
  );
}
