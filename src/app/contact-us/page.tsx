import type { Metadata } from "next";
import Image from "next/image";
import { Accordion } from "@/components/ui/Accordion";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get answers to frequently asked questions or send us a message. We're here to help with your Wattl experience.",
};

const faqItems = [
  {
    question: "How is the rental pricing calculated?",
    answer:
      "We charge a simple half-hourly rate of $2. If you hold onto the power bank for a longer period, you will simply reach our daily maximum cap of $20 for that 24-hour period.",
  },
  {
    question: "What happens if I lose the power bank?",
    answer:
      'If the power bank is not returned within 36 hours, the system marks it as "purchased." You will be charged the full device fee of $50, and the power bank is yours to keep.',
  },
  {
    question: "Can I return the power bank to a different station?",
    answer:
      "Yes! You can rent a power bank from one venue and return it to any other station in our network. Use the app to find the nearest available return slot.",
  },
  {
    question: "What cables are attached?",
    answer:
      "Each power bank comes with three built-in cables — Lightning (iPhone), USB-C, and Micro-USB — so you're covered no matter what device you carry. No need to bring your own cable.",
  },
  {
    question: "How fast do the power banks charge?",
    answer:
      "Our power banks deliver fast charging at up to 10W output. Most phones get a meaningful boost in just 15-20 minutes — enough to get you through the rest of your night.",
  },
  {
    question: "What if the station is full when I try to return it?",
    answer:
      "If a station has no empty slots, simply use the app to find the nearest station with availability. You won't be charged extra while you make your way to another return point.",
  },
];

export default function ContactUsPage() {
  return (
    <>
      {/* FAQ Section */}
      <section className="bg-brand-yellow py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left text */}
            <div>
              <h1 className="mb-4 font-heading text-3xl font-bold text-brand-blue md:text-[48px]">
                Frequently Asked Questions
              </h1>
              <p className="max-w-sm text-brand-blue/70">
                Answers about pricing, lost power banks, and charging speeds.
                We&apos;re here to keep you powered up.
              </p>
              {/* Toucan decoration */}
              <div className="pointer-events-none mt-8 opacity-40" aria-hidden="true">
                <Image
                  src="/images/decorations/toucan.png"
                  alt=""
                  width={72}
                  height={72}
                  className="h-[4.2rem] w-[4.2rem] object-contain"
                />
              </div>
            </div>

            {/* Right accordion */}
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <WaveDivider topColor="#FFC600" bottomColor="#000000" />

      {/* Contact Form Section */}
      <section className="bg-brand-black py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left text */}
            <div>
              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-[40px]">
                Send Us a{" "}
                <em className="not-italic text-brand-yellow">Message</em>
              </h2>
              <p className="mb-6 max-w-sm text-gray-400">
                Having an issue with a station or payment? Let us know. Our
                dedicated support team is ready to resolve your power needs.
              </p>
              <p className="mb-2 text-sm text-gray-400">Or call us on:</p>
              <a
                href="tel:0423234799"
                className="font-heading text-2xl font-bold text-brand-yellow transition-colors hover:text-brand-yellow/80"
              >
                0423 234 799
              </a>
              {/* Parrot decoration */}
              <div className="pointer-events-none mt-8 opacity-35" aria-hidden="true">
                <Image
                  src="/images/decorations/parrot.png"
                  alt=""
                  width={60}
                  height={60}
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>

            {/* Right form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
