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
  { href: "/contact-us", label: "Contact Support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [howItWorksActive, setHowItWorksActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track if #how-it-works section is in view
      const section = document.getElementById("how-it-works");
      if (section) {
        const rect = section.getBoundingClientRect();
        setHowItWorksActive(rect.top <= 100 && rect.bottom > 100);
      } else {
        setHowItWorksActive(false);
      }
    };
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
    if (href === "/#how-it-works") return howItWorksActive;
    if (href === "/") return pathname === "/" && !howItWorksActive;
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
      {/* Outer wrapper — always full width, provides top padding when scrolled */}
      <div
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled ? "px-4 pt-3 md:px-8" : "px-0 pt-0"
        )}
      >
        <nav
          className={cn(
            "mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            scrolled
              ? "max-w-[1100px] rounded-full border-2 border-brand-black/10 bg-white/90 shadow-lg backdrop-blur-xl"
              : "max-w-full bg-transparent"
          )}
        >
          <div className={cn(
            "mx-auto flex max-w-[1200px] items-center justify-between transition-all duration-500",
            scrolled ? "px-5 py-3.5 md:px-6" : "px-4 py-4 md:px-6"
          )}>
            <Link href="/" aria-label="Wattl Home">
              <Image
                src="/images/wattl-dark.png"
                alt="Wattl."
                width={130}
                height={44}
                className={cn(
                  "w-auto transition-all duration-500",
                  scrolled ? "h-6 md:h-8" : "h-8 md:h-10"
                )}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-[800] transition-all duration-300",
                      active
                        ? "border-2 border-brand-black bg-brand-yellow text-brand-black"
                        : scrolled
                          ? "border-2 border-transparent text-brand-black/70 hover:bg-brand-black/5 hover:text-brand-black"
                          : "border-2 border-transparent text-brand-blue hover:text-brand-black"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/partner-with-us">
                <Button variant="primary" className="ml-1 text-xs">
                  Partner With Us
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
                    "h-6 w-6 transition-colors duration-300",
                    scrolled ? "text-brand-black" : "text-brand-blue"
                  )}
                />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-brand-blue/95 backdrop-blur-sm">
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
          <Link href="/partner-with-us" onClick={() => setMobileOpen(false)}>
            <Button variant="primary" className="mt-4 text-base">
              Partner With Us
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
