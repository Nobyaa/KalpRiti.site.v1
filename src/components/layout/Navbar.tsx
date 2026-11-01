"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 py-2 sm:py-2.5">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <nav
          aria-label="Main Navigation"
          className={cn(
            "w-full rounded-full transition-all duration-300 px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between",
            scrolled ? "liquid-glass shadow-sm" : "bg-bg/80 backdrop-blur-md border border-ink/5"
          )}
        >
          {/* Brand Logo only with official color */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-accent rounded-md py-1"
            aria-label="KalpRiti Home"
          >
            <div className="relative h-6 sm:h-7 md:h-8 w-auto flex items-center">
              <Image
                src="/Assets/Logos/logo_Dark.svg"
                alt="KalpRiti"
                width={140}
                height={32}
                className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {siteContent.navigation.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent relative py-1 focus-visible:outline-accent",
                    isActive ? "text-accent font-semibold" : "text-ink/80"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href={siteContent.navigation.cta.href}
              size="sm"
              className="hidden sm:inline-flex text-xs sm:text-sm font-medium"
            >
              {siteContent.navigation.cta.label}
            </Button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-ink hover:bg-ink/5 focus-visible:outline-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 liquid-glass rounded-card flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {siteContent.navigation.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base py-2 font-medium transition-colors hover:text-accent",
                    isActive ? "text-accent font-semibold" : "text-ink/90"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-ink/10">
              <Button
                href={siteContent.navigation.cta.href}
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteContent.navigation.cta.label}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

