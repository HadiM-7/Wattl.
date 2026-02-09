"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/locations", label: "Locations" },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/contact-us", label: "Contact Support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "/#how-it-works" && pathname === "/") {
      const el = document.getElementById("how-it-works");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" aria-label="Wattl Home">
            <Image
              src="/images/wattl-dark.png"
              alt="Wattl."
              width={120}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="group relative text-sm font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:text-brand-blue/80"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
            <Link href="/locations">
              <Button variant="dark" className="text-xs">
                Find a Station
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6",
                  scrolled ? "text-brand-black" : "text-brand-blue"
                )}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-brand-black/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/locations" onClick={() => setMobileOpen(false)}>
            <Button variant="primary" className="mt-4 text-base">
              Find a Station
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
