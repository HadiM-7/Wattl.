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

function VisaIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="Visa">
      <rect width="48" height="32" rx="4" fill="#1A1F71" />
      <path d="M19.5 21h-3l1.87-11.5h3L19.5 21zm12.87-11.22c-.6-.23-1.53-.48-2.7-.48-2.97 0-5.07 1.58-5.08 3.83-.02 1.67 1.49 2.6 2.63 3.16 1.17.57 1.56.94 1.56 1.45-.01.78-.94 1.14-1.8 1.14-1.2 0-1.84-.18-2.83-.6l-.39-.18-.42 2.6c.7.32 2 .6 3.35.62 3.16 0 5.22-1.56 5.24-3.96.01-1.32-.79-2.33-2.52-3.16-1.05-.54-1.7-.9-1.69-1.44 0-.48.54-1 1.72-1 .98-.02 1.69.21 2.24.44l.27.13.41-2.55zM37.5 9.5h-2.33c-.72 0-1.26.21-1.58.97L29.5 21h3.16s.52-1.43.63-1.75h3.86c.09.41.37 1.75.37 1.75H40.5l-3-11.5zm-3.7 7.42c.25-.67 1.2-3.27 1.2-3.27-.02.03.25-.67.4-1.1l.2 1 .7 3.37h-2.5zM16.5 9.5l-2.95 7.85-.31-1.6c-.55-1.87-2.27-3.9-4.2-4.91l2.7 10.15h3.18L19.68 9.5H16.5z" fill="#fff" />
      <path d="M10.5 9.5H5.56l-.06.3c3.77.96 6.26 3.3 7.3 6.1l-1.05-5.35c-.18-.73-.71-.96-1.25-1.05z" fill="#F9A51A" />
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="Mastercard">
      <rect width="48" height="32" rx="4" fill="#252525" />
      <circle cx="19" cy="16" r="8" fill="#EB001B" />
      <circle cx="29" cy="16" r="8" fill="#F79E1B" />
      <path d="M24 9.84A7.97 7.97 0 0 1 27 16a7.97 7.97 0 0 1-3 6.16A7.97 7.97 0 0 1 21 16a7.97 7.97 0 0 1 3-6.16z" fill="#FF5F00" />
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="American Express">
      <rect width="48" height="32" rx="4" fill="#006FCF" />
      <text x="24" y="18.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AMEX</text>
    </svg>
  );
}

function GooglePayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="Google Pay">
      <rect width="48" height="32" rx="4" fill="#fff" stroke="#ddd" strokeWidth="1" />
      <text x="24" y="18.5" textAnchor="middle" fill="#5F6368" fontSize="7" fontWeight="600" fontFamily="sans-serif">G Pay</text>
    </svg>
  );
}

function ApplePayIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="Apple Pay">
      <rect width="48" height="32" rx="4" fill="#000" />
      <text x="24" y="18.5" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="500" fontFamily="sans-serif">Pay</text>
    </svg>
  );
}

function PayPalIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-6 w-auto" aria-label="PayPal">
      <rect width="48" height="32" rx="4" fill="#003087" />
      <text x="24" y="18.5" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PayPal</text>
    </svg>
  );
}

const paymentIcons = [
  { name: "Visa", Icon: VisaIcon },
  { name: "Mastercard", Icon: MastercardIcon },
  { name: "Amex", Icon: AmexIcon },
  { name: "Google Pay", Icon: GooglePayIcon },
  { name: "Apple Pay", Icon: ApplePayIcon },
  { name: "PayPal", Icon: PayPalIcon },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-blue text-white overflow-hidden">
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
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-brand-yellow">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-white/60 transition-colors hover:text-brand-yellow"
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
        <div className="relative my-10 h-px bg-white/20" />

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
          <div className="flex items-center gap-3">
            {paymentIcons.map(({ name, Icon }) => (
              <span
                key={name}
                className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                title={name}
              >
                <Icon />
              </span>
            ))}
          </div>

          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Wattl Charging PTY LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
