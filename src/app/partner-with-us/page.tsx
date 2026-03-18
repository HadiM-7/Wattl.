"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";
import { StationRequestForm } from "@/components/forms/StationRequestForm";

const shadowColors = ["#38AAD4", "#E88D9D", "#003CA7", "#208334", "#F4722B", "#1A1A1A"];

const benefits = [
  {
    emoji: "💰",
    title: "Revenue Share",
    description: "Every rental nets you passive revenue.",
    color: "#FFC600",
  },
  {
    emoji: "⏰",
    title: "Boost Dwell Time",
    description: "Patrons stay for longer, with less anxiety.",
    color: "#38AAD4",
  },
  {
    emoji: "✅",
    title: "Reduce Staff Disruptions",
    description: "Let staff focus on service.",
    color: "#208334",
  },
  {
    emoji: "😊",
    title: "Drive New Traffic",
    description: "Attract nearby app users, seeking a charger.",
    color: "#E88D9D",
  },
  {
    emoji: "📱",
    title: "Enhance Customer Experience",
    description: "Provide a modern amenity, and build loyalty.",
    color: "#F4722B",
  },
  {
    emoji: "♾️",
    title: "0 Cost, Ever",
    description: "No surprise fees, and we handle maintenance.",
    color: "#003CA7",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Benefits Hero */}
      <section className="relative flex min-h-screen items-center bg-brand-yellow py-24 md:py-40">
        {/* Toucan decoration */}
        <div className="pointer-events-none absolute top-8 right-4 hidden md:block md:right-12" aria-hidden="true">
          <Image
            src="/images/decorations/toucan.png"
            alt=""
            width={180}
            height={180}
            className="h-44 w-44 object-contain"
          />
        </div>
        {/* Wattle flower decoration */}
        <div className="pointer-events-none absolute bottom-4 left-4 hidden md:block md:left-8" aria-hidden="true">
          <Image
            src="/images/decorations/wattle-flower.png"
            alt=""
            width={160}
            height={160}
            className="h-40 w-40 object-contain"
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-14 text-center">
            <h1
              className="mb-4 font-heading text-4xl font-bold text-brand-blue md:text-[60px]"
              style={{ textShadow: "3px 3px 0 rgba(26, 26, 26, 0.1)" }}
            >
              Free Stations,{" "}
              <em className="not-italic text-brand-black">Passive Income.</em>
            </h1>
            <p className="mx-auto max-w-lg text-lg text-brand-black/70" style={{ fontWeight: 700 }}>
              Host a Wattl station at your venue. Zero cost, zero maintenance, passive revenue.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} variants={cardVariants}>
                <Card className="text-center" shadowColor={shadowColors[i % shadowColors.length]}>
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-3 border-brand-black text-2xl"
                    style={{
                      backgroundColor: benefit.color,
                      boxShadow: "3px 3px 0 #1A1A1A",
                    }}
                  >
                    {benefit.emoji}
                  </div>
                  <h3 className="mb-2 font-heading text-2xl font-normal text-brand-black">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-brand-black/80" style={{ fontWeight: 500 }}>
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SquigglyDivider color="#1A1A1A" bg="#FCE79E" />

      {/* Station Request Form */}
      <section className="relative bg-brand-pale-yellow py-20 md:py-32">
        {/* Cockatoo decoration */}
        <div className="pointer-events-none absolute bottom-8 left-4 hidden md:block md:left-12" aria-hidden="true">
          <Image
            src="/images/decorations/cockatoo.png"
            alt=""
            width={130}
            height={130}
            className="h-44 w-44 object-contain"
          />
        </div>
        <div className="mx-auto max-w-lg px-4 text-center md:px-6">
          <h2 className="mb-2 font-heading text-2xl font-bold text-brand-blue md:text-[36px]">
            Request a station
          </h2>
          <p className="mb-8 text-brand-black/70" style={{ fontWeight: 700 }}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          {/* Form on surface */}
          <div
            className="rounded-card border-3 border-brand-black bg-white p-8 text-left"
            style={{ boxShadow: "6px 6px 0 #003CA7" }}
          >
            <StationRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
