import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Locations", href: "/locations" },
  ],
  Partners: [
    { label: "Partner with us", href: "/partner-with-us" },
    { label: "Contact support", href: "/contact-us" },
  ],
  Wattl: [
    { label: "Legal", href: "/legal" },
    { label: "Delete Account", href: "/delete-account" },
  ],
};

const paymentIcons = ["Visa", "MC", "Amex", "GPay", "APay", "PayPal"];

export function Footer() {
  return (
    <footer className="relative bg-brand-black text-white overflow-hidden">
      {/* Large branded watermark background - spans footer width */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div
          className="font-heading font-black text-brand-yellow leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(300px, 60vw, 800px)",
            opacity: 0.08,
            transform: "rotate(-12deg) translateY(15%) translateX(10%)",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          Wattl.
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-12 md:px-6 md:py-16">
        {/* Link columns */}
        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-gray-400">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors hover:text-brand-yellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-10 h-px bg-gray-800" />

        {/* Bottom section */}
        <div className="relative flex flex-col items-center gap-6">
          <Image
            src="/images/wattl-light.png"
            alt="Wattl."
            width={120}
            height={40}
            className="h-8 w-auto"
          />

          {/* Payment icons */}
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-gray-500 transition-colors hover:text-white"
                title={icon}
              >
                {icon}
              </span>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Wattl Charging PTY LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
