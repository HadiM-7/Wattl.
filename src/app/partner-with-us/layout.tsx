import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Host a Wattl power bank station at your venue. Zero cost, zero maintenance, passive revenue. Request a station today.",
  alternates: {
    canonical: "https://wattl.io/partner-with-us",
  },
};

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
