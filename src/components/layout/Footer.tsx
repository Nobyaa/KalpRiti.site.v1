"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/siteContent";
import { Mail, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const { socials } = siteContent;
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <footer className="w-full mt-auto border-t border-ink/10 pt-10 sm:pt-14 pb-8 bg-bg/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-accent"
              aria-label="KalpRiti Home"
            >
              <Image
                src="/Assets/Logos/logo_Dark.svg"
                alt="KalpRiti"
                width={120}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-ink/75 max-w-sm leading-relaxed">
              {siteContent.footer.blurb}
            </p>
          </div>

          {/* Links & Socials Column */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-5 sm:gap-7 items-center">
              {siteContent.navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink/80 hover:text-accent transition-colors focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm font-semibold text-accent hover:text-accent-deep transition-colors focus-visible:outline-accent"
              >
                Discuss a Campaign →
              </Link>
            </div>

            {/* Social Icons & Email (Desktop hover reveal / mobile always visible) */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Instagram Icon */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KalpRiti Instagram"
                className="p-2.5 rounded-full bg-ink/5 hover:bg-accent/10 text-ink/80 hover:text-accent border border-ink/10 hover:border-accent/30 transition-all focus-visible:outline-accent"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KalpRiti LinkedIn"
                className="p-2.5 rounded-full bg-ink/5 hover:bg-accent/10 text-ink/80 hover:text-accent border border-ink/10 hover:border-accent/30 transition-all focus-visible:outline-accent"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email Button with Hover Reveal on Desktop & Always Visible on Mobile */}
              <a
                href={`mailto:${socials.email}`}
                onMouseEnter={() => setIsEmailHovered(true)}
                onMouseLeave={() => setIsEmailHovered(false)}
                aria-label={`Email KalpRiti: ${socials.email}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-ink/5 hover:bg-accent/10 text-ink/80 hover:text-accent border border-ink/10 hover:border-accent/30 transition-all focus-visible:outline-accent"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {/* On mobile: always visible. On desktop: revealed on hover */}
                <span className="text-xs font-mono font-medium md:hidden">
                  {socials.email}
                </span>
                <span
                  className={`text-xs font-mono font-medium hidden md:inline-block transition-all duration-200 overflow-hidden ${
                    isEmailHovered
                      ? "max-w-[200px] opacity-100"
                      : "max-w-0 opacity-0"
                  }`}
                >
                  {socials.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-ink/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/50">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} KalpRiti. All rights reserved.</p>
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors underline underline-offset-2"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-[11px] text-ink/40">
            Designed as one connected campaign experience.
          </p>
        </div>
      </Container>
    </footer>
  );
};

