import type { Metadata } from "next";
import Image from "next/image";
import { DeleteAccountForm } from "@/components/forms/DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Request permanent deletion of your Wattl account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <section className="bg-brand-blue pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left text */}
          <div>
            <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-[48px]">
              Delete your account
            </h1>
            <p className="max-w-sm text-white/70" style={{ fontWeight: 700 }}>
              If you wish to permanently delete your Wattl account and
              associated data, fill out the form and we&apos;ll process your
              request.
            </p>
            {/* Parrot decoration */}
            <div className="pointer-events-none mt-8" aria-hidden="true">
              <Image
                src="/images/decorations/parrot.png"
                alt=""
                width={120}
                height={120}
                className="h-28 w-28 object-contain md:h-36 md:w-36"
              />
            </div>
          </div>

          {/* Right form - on surface */}
          <div
            className="rounded-card border-3 border-brand-black bg-white p-8"
            style={{ boxShadow: "6px 6px 0 #E88D9D" }}
          >
            <DeleteAccountForm />
          </div>
        </div>
      </div>
    </section>
  );
}
