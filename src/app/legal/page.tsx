"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tabs = ["Terms of Service", "Refund Policy"] as const;
type Tab = (typeof tabs)[number];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Terms of Service");

  return (
    <section className="relative bg-brand-off-white py-16 md:py-24">
      {/* Toucan decoration */}
      <div className="pointer-events-none absolute top-8 right-8 opacity-30" aria-hidden="true">
        <Image
          src="/images/decorations/toucan.png"
          alt=""
          width={72}
          height={72}
          className="h-[4.2rem] w-[4.2rem] object-contain"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h1 className="mb-2 font-heading text-3xl font-bold text-brand-blue md:text-[48px]">
          Terms and Conditions
        </h1>
        <div className="mb-8 h-1 w-16 rounded-full bg-brand-yellow" />

        {/* Tabs */}
        <div className="mb-10 flex gap-0 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "cursor-pointer border-b-2 px-6 py-3 text-sm font-semibold transition-colors",
                activeTab === tab
                  ? "border-brand-yellow text-brand-blue"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-brand-black md:grid md:grid-cols-[200px_1fr] md:gap-12">
          {activeTab === "Terms of Service" ? (
            <TermsOfService />
          ) : (
            <RefundPolicy />
          )}
        </div>
      </div>
    </section>
  );
}

function TermsOfService() {
  const sections = [
    "Overview",
    "Online Store Terms",
    "General Conditions",
    "Accuracy of Information",
    "Modifications",
    "Products or Services",
    "Billing & Account Info",
    "Optional Tools",
    "Third-Party Links",
    "User Submissions",
    "Personal Information",
    "Errors & Omissions",
    "Prohibited Uses",
    "Disclaimer",
    "Indemnification",
    "Severability",
    "Termination",
    "Entire Agreement",
    "Governing Law",
    "Changes to Terms",
    "Contact",
  ];

  return (
    <>
      {/* Sidebar ToC - desktop only */}
      <nav className="hidden md:block">
        <ul className="sticky top-24 flex flex-col gap-2">
          {sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className="text-xs text-gray-500 transition-colors hover:text-brand-blue"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-[75ch]">
        <section id="section-0" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Overview
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-gray-700">
            This website is operated by Wattl Charging PTY LTD. Throughout the
            site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and
            &ldquo;our&rdquo; refer to Wattl Charging PTY LTD. Wattl Charging
            PTY LTD offers this website, including all information, tools and
            services available from this site to you, the user, conditioned upon
            your acceptance of all terms, conditions, policies and notices stated
            here.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-gray-700">
            By visiting our site, renting our equipment, or engaging with our
            venues, you engage in our &ldquo;Service&rdquo; and agree to be
            bound by the following terms and conditions. These Terms of Service
            apply to all users of the site, including without limitation users
            who are browsers, vendors, customers, merchants, and/or contributors
            of content.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any services.
          </p>
        </section>

        <section id="section-1" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 1 — Online Store Terms
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            By agreeing to these Terms of Service, you represent that you are at
            least the age of majority in your state or province of residence.
            You may not use our products for any illegal or unauthorized purpose
            nor may you, in the use of the Service, violate any laws in your
            jurisdiction. You must not transmit any worms or viruses or any code
            of a destructive nature. A breach or violation of any of the Terms
            will result in an immediate termination of your Services.
          </p>
        </section>

        <section id="section-2" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 2 — General Conditions
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We reserve the right to refuse service to anyone for any reason at
            any time. You understand that your content (not including credit card
            information), may be transferred unencrypted and involve (a)
            transmissions over various networks; and (b) changes to conform and
            adapt to technical requirements of connecting networks or devices.
            Credit card information is always encrypted during transfer over
            networks.
          </p>
        </section>

        <section id="section-3" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 3 — Accuracy, Completeness and Timeliness of Information
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We are not responsible if information made available on this site is
            not accurate, complete or current. The material on this site is
            provided for general information only and should not be relied upon
            or used as the sole basis for making decisions without consulting
            primary, more accurate, more complete or more timely sources of
            information.
          </p>
        </section>

        <section id="section-4" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 4 — Modifications to the Service and Prices
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Prices for our products and rentals are subject to change without
            notice. We reserve the right at any time to modify or discontinue
            the Service without notice at any time. We shall not be liable to
            you or to any third-party for any modification, price change,
            suspension or discontinuance of the Service.
          </p>
        </section>

        <section id="section-5" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 5 — Products or Services
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Certain products or services may be available exclusively online
            through the website or app. These services may have limited
            quantities and are subject to our Refund Policy. We reserve the
            right to limit the sales of our products or Services to any person,
            geographic region or jurisdiction.
          </p>
        </section>

        <section id="section-6" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 6 — Accuracy of Billing and Account Information
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We reserve the right to refuse any order or rental you place with
            us. You agree to provide current, complete and accurate purchase and
            account information for all purchases made at our store. You agree
            to promptly update your account and other information so that we can
            complete your transactions and contact you as needed.
          </p>
        </section>

        <section id="section-7" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 7 — Optional Tools
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We may provide you with access to third-party tools over which we
            neither monitor nor have any control nor input. You acknowledge and
            agree that we provide access to such tools &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; without any warranties, representations
            or conditions of any kind.
          </p>
        </section>

        <section id="section-8" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 8 — Third-Party Links
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Certain content, products and services available via our Service may
            include materials from third-parties. We are not responsible for
            examining or evaluating the content or accuracy and we do not
            warrant and will not have any liability for any third-party
            materials or websites.
          </p>
        </section>

        <section id="section-9" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 9 — User Comments, Feedback and Other Submissions
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            If you send us creative ideas, suggestions, proposals, or other
            materials, you agree that we may, at any time, without restriction,
            edit, copy, publish, distribute, translate and otherwise use in any
            medium any comments that you forward to us. You are solely
            responsible for any comments you make and their accuracy.
          </p>
        </section>

        <section id="section-10" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 10 — Personal Information
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Your submission of personal information through the store is
            governed by our Privacy Policy.
          </p>
        </section>

        <section id="section-11" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 11 — Errors, Inaccuracies and Omissions
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Occasionally there may be information on our site that contains
            typographical errors, inaccuracies or omissions. We reserve the
            right to correct any errors, inaccuracies or omissions, and to
            change or update information at any time without prior notice.
          </p>
        </section>

        <section id="section-12" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 12 — Prohibited Uses
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            You are prohibited from using the site or its content for any
            unlawful purpose; to solicit others to perform unlawful acts; to
            violate any regulations; to infringe upon intellectual property
            rights; to harass or discriminate; to submit false information; to
            upload malicious code; to spam or scrape; or to interfere with
            security features.
          </p>
        </section>

        <section id="section-13" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 13 — Disclaimer of Warranties; Limitation of Liability
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We do not guarantee that your use of our service will be
            uninterrupted, timely, secure or error-free. The service and all
            products and services delivered to you through the service are
            provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; for your
            use. In no case shall Wattl Charging PTY LTD be liable for any
            injury, loss, claim, or any direct, indirect, incidental, punitive,
            special, or consequential damages of any kind.
          </p>
        </section>

        <section id="section-14" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 14 — Indemnification
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            You agree to indemnify, defend and hold harmless Wattl Charging PTY
            LTD and our parent, subsidiaries, affiliates, partners, officers,
            directors, agents, contractors, licensors, service providers,
            subcontractors, suppliers, interns and employees, from any claim or
            demand arising out of your breach of these Terms of Service.
          </p>
        </section>

        <section id="section-15" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 15 — Severability
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            In the event that any provision of these Terms of Service is
            determined to be unlawful, void or unenforceable, such provision
            shall nonetheless be enforceable to the fullest extent permitted by
            applicable law.
          </p>
        </section>

        <section id="section-16" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 16 — Termination
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            These Terms of Service are effective unless and until terminated by
            either you or us. You may terminate these Terms of Service at any
            time by notifying us that you no longer wish to use our Services.
          </p>
        </section>

        <section id="section-17" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 17 — Entire Agreement
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            These Terms of Service and any policies posted by us on this site
            constitute the entire agreement and understanding between you and
            us.
          </p>
        </section>

        <section id="section-18" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 18 — Governing Law
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of New South Wales, Australia.
          </p>
        </section>

        <section id="section-19" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 19 — Changes to Terms of Service
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and changes to our website. It
            is your responsibility to check our website periodically for
            changes.
          </p>
        </section>

        <section id="section-20" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Section 20 — Contact Information
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Questions about the Terms of Service should be sent to us at{" "}
            <a
              href="mailto:info@wattl.io"
              className="font-semibold text-brand-blue underline"
            >
              info@wattl.io
            </a>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Our mailing address is:
            <br />
            <strong>Wattl Charging PTY LTD</strong>
            <br />
            164 Blaxcell Street
            <br />
            Granville, NSW 2142
            <br />
            Australia
          </p>
        </section>
      </div>
    </>
  );
}

function RefundPolicy() {
  const sections = [
    "Refund Policy",
    "Damages and Issues",
    "Refunds & Credits",
    "Exchanges",
  ];

  return (
    <>
      {/* Sidebar ToC */}
      <nav className="hidden md:block">
        <ul className="sticky top-24 flex flex-col gap-2">
          {sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#refund-${i}`}
                className="text-xs text-gray-500 transition-colors hover:text-brand-blue"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-[75ch]">
        <section id="refund-0" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Refund Policy
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We strive to ensure every rental experience is seamless. If you
            encounter an issue with a machine or power bank (e.g., the power
            bank fails to dispense, is damaged, or does not charge your device),
            please contact us immediately. To be eligible for a refund or
            credit, you must report the issue within 24 hours of the
            transaction. To report an issue, please contact us at{" "}
            <a
              href="mailto:info@wattl.io"
              className="font-semibold text-brand-blue underline"
            >
              info@wattl.io
            </a>{" "}
            with your transaction details.
          </p>
        </section>

        <section id="refund-1" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Damages and Issues
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Please inspect your rental immediately upon retrieval. Contact us
            immediately if the item is defective, damaged or if you receive the
            wrong item, so that we can evaluate the issue and make it right.
          </p>
        </section>

        <section id="refund-2" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Refunds &amp; Credits
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            We will notify you once we&apos;ve received and inspected your
            claim, and let you know if the refund was approved or not. If
            approved, you will be issued a credit to your account for future
            use. In certain circumstances, at our sole discretion, we may apply
            a refund to your original payment method. Please remember it can
            take some time for your bank or credit card company to process and
            post the refund.
          </p>
        </section>

        <section id="refund-3" className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase text-brand-blue">
            Exchanges
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            If a power bank is defective, please return it to the station
            immediately and rent a new unit. Contact us to have the charge for
            the defective unit credited back to your account.
          </p>
        </section>
      </div>
    </>
  );
}
