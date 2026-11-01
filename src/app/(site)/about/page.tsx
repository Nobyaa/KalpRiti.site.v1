import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Glass } from "@/components/ui/Glass";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About — KalpRiti",
  description:
    "Founder-led, on purpose. Learn about Vaibhav Kumbhar and the thinking behind KalpRiti.",
};

export default function AboutPage() {
  const { about, socials } = siteContent;

  return (
    <div className="w-full">
      {/* Header */}
      <Section spacing="default" className="pt-6 sm:pt-10 md:pt-12 pb-6">
        <Container size="narrow">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono block">
              Studio & Leadership
            </span>
            <Heading as="h1" size="display" className="text-ink">
              {about.header.heading}
            </Heading>
          </div>
        </Container>
      </Section>

      {/* Founder Story */}
      <Section spacing="default" className="pt-0">
        <Container size="narrow">
          <div className="p-6 sm:p-10 lg:p-12 rounded-large border border-ink/10 bg-white/40 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center font-heading font-bold text-lg">
                  VK
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-ink">
                    Vaibhav Kumbhar
                  </h3>
                  <p className="text-xs text-ink/60 font-sans mt-0.5">
                    Founder, KalpRiti
                  </p>
                </div>
              </div>

              {/* Founder LinkedIn Link */}
              <a
                href={socials.founderLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink/5 hover:bg-accent/10 border border-ink/10 hover:border-accent/30 text-ink/80 hover:text-accent transition-all text-xs font-semibold self-start sm:self-auto focus-visible:outline-accent"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-ink/85 leading-relaxed font-normal">
              {about.story.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 1 ? "font-medium text-ink" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <Hairline variant="horizontal" />

            {/* What we believe */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-accent block">
                {about.beliefs.heading}
              </span>
              <p className="font-heading text-xl sm:text-2xl text-ink font-semibold leading-snug">
                &ldquo;{about.beliefs.text}&rdquo;
              </p>
            </div>

            <Hairline variant="horizontal" />

            {/* Where we are */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-ink/60 block">
                {about.whereWeAre.heading}
              </span>
              {about.whereWeAre.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-ink/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Closing CTA */}
            <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ink/60">
                Let&apos;s build an experience for your product.
              </p>
              <Button href="/contact" size="md">
                Discuss a Campaign
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

