"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-yellow">
        {/* Subtle radial gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Leaf decoration */}
        <div className="pointer-events-none absolute top-8 left-8 text-5xl opacity-30 md:text-7xl">
          🍃
        </div>

        {/* Battery decoration with floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25, y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute bottom-12 right-8 text-6xl md:text-7xl"
          aria-hidden="true"
        >
          🔋
        </motion.div>

        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 pt-12 pb-20 md:grid-cols-2 md:items-center md:px-6 md:pt-20 md:pb-28">
          {/* Text column */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-brand-blue/70"
            >
              —— Portable Power Bank Rentals
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-heading text-4xl leading-[1.1] font-bold tracking-tight text-brand-blue md:text-[56px]"
            >
              Don&apos;t Let a Dead Battery Kill the{" "}
              <em className="not-italic text-brand-black">Vibe</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-md text-lg leading-relaxed text-brand-blue/80"
            >
              Australia&apos;s first dedicated power bank rental network. Grab a
              charger, stay connected, return it when you&apos;re done.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/locations">
                <Button variant="dark">Find a Station</Button>
              </Link>
              <Link
                href="/#how-it-works"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:text-brand-black"
              >
                See How It Works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Plant decoration at base */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-4xl opacity-40 md:text-5xl">
              🌿
            </div>
            <div className="relative z-10 md:translate-y-10">
              <Image
                src="/images/station.png"
                alt="Wattl charging station — a bright yellow kiosk with multiple power bank slots"
                width={450}
                height={500}
                className="h-auto w-full max-w-[350px] object-contain md:max-w-[450px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      <WaveDivider topColor="#FFC600" bottomColor="#000000" />
    </>
  );
}
