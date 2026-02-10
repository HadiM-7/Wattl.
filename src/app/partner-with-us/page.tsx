"use client";

import {
  DollarSign,
  Clock,
  CheckSquare,
  Smile,
  QrCode,
  Infinity,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { StationRequestForm } from "@/components/forms/StationRequestForm";

const benefits = [
  {
    icon: DollarSign,
    title: "Revenue Share",
    description: "Every rental nets you passive revenue.",
  },
  {
    icon: Clock,
    title: "Boost Dwell Time",
    description: "Patrons stay for longer, with less anxiety.",
  },
  {
    icon: CheckSquare,
    title: "Reduce Staff Disruptions",
    description: "Let staff focus on service.",
  },
  {
    icon: Smile,
    title: "Drive New Traffic",
    description: "Attract nearby app users, seeking a charger.",
  },
  {
    icon: QrCode,
    title: "Enhance Customer Experience",
    description: "Provide a modern amenity, and build loyalty.",
  },
  {
    icon: Infinity,
    title: "0 Cost, Ever",
    description: "No surprise fees, and we handle maintenance.",
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
      <section className="relative bg-brand-yellow py-16 md:py-24">
        {/* Koala decoration */}
        <div className="pointer-events-none absolute top-8 right-8 opacity-35" aria-hidden="true">
          <Image
            src="/images/decorations/koala.png"
            alt=""
            width={72}
            height={72}
            className="h-[4.2rem] w-[4.2rem] object-contain"
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="mb-2 font-heading text-3xl font-bold text-brand-blue md:text-[48px]">
              Free Stations,{" "}
              <em className="text-brand-blue">Passive Income.</em>
            </h1>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={cardVariants}>
                <Card className="text-center">
                  <benefit.icon className="mx-auto mb-4 h-10 w-10 text-brand-yellow" />
                  <h3 className="mb-2 font-heading text-lg font-bold text-brand-black">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WaveDivider topColor="#FFC600" bottomColor="#FCE79E" />

      {/* Station Request Form */}
      <section className="relative bg-brand-pale-yellow py-16 md:py-24">
        {/* Cockatoo decoration */}
        <div className="pointer-events-none absolute bottom-8 left-8 opacity-30" aria-hidden="true">
          <Image
            src="/images/decorations/cockatoo.png"
            alt=""
            width={72}
            height={72}
            className="h-[4.2rem] w-[4.2rem] object-contain"
          />
        </div>
        <div className="mx-auto max-w-lg px-4 text-center md:px-6">
          <h2 className="mb-2 font-heading text-2xl font-bold text-brand-blue md:text-[36px]">
            Request a station
          </h2>
          <p className="mb-8 text-gray-600">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <StationRequestForm />
        </div>
      </section>
    </>
  );
}
