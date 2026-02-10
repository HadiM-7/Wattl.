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
    <section className="bg-brand-black py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left text */}
          <div>
            <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-[48px]">
              Delete your account
            </h1>
            <p className="max-w-sm text-gray-400">
              If you wish to permanently delete your Wattl account and
              associated data, fill out the form and we&apos;ll process your
              request.
            </p>
            {/* Parrot decoration */}
            <div className="pointer-events-none mt-8 opacity-30" aria-hidden="true">
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
          <DeleteAccountForm />
        </div>
      </div>
    </section>
  );
}
