"use client";

import { motion } from "framer-motion";
import { QrCode, Zap, MapPin } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Scan the QR Code",
    description:
      "Instantly unlock a power bank at any of our stations. No app download required for checkout.",
    animation: "animate-pulse",
  },
  {
    icon: Zap,
    number: "02",
    title: "Charge on the Go",
    description:
      "High-speed charging compatible with all major devices. Keep moving while you refuel your tech.",
    animation: "animate-[glow_2s_ease-in-out_infinite]",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Return Anywhere",
    description:
      "Done charging? Simply drop the bank off at any station in our city-wide network.",
    animation: "animate-[pulse_2s_ease-in-out_infinite]",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="bg-brand-black py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-[40px]">
              Fast Charging,{" "}
              <em className="text-brand-yellow">Zero Hassle.</em>
            </h2>
            <p className="mx-auto max-w-xl text-gray-400">
              Portable banks that fit in your pocket. Compatible with Lightning,
              USB-C, and Micro-USB.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group rounded-card border border-gray-800 bg-gray-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/30 hover:shadow-[0_0_30px_rgba(255,198,0,0.1)]"
              >
                <step.icon className="mb-6 h-12 w-12 text-brand-yellow" />
                <p className="mb-2 font-mono text-sm text-brand-yellow/60">
                  {step.number}
                </p>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <WaveDivider topColor="#000000" bottomColor="#FFFFF3" />
    </>
  );
}
