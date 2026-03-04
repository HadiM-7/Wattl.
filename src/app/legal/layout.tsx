import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Wattl Terms of Service and Refund Policy. Read our legal terms for power bank rentals in Australia.",
  alternates: {
    canonical: "https://wattl.io/legal",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
