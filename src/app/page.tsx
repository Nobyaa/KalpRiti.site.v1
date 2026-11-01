import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Glass } from "@/components/ui/Glass";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { InteractiveDemo } from "@/components/home/InteractiveDemo";
import { siteContent } from "@/content/siteContent";
import { ArrowUpRight, Check, Compass, Layers, Sparkles } from "lucide-react";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Section spacing="default" className="relative pt-6 sm:pt-10 md:pt-14 pb-8 sm:pb-12">
        {/* Subtle decorative construction line & geometric arc */}
        <div className="absolute top-6 right-6 md:right-16 opacity-35 pointer-events-none">
          <Hairline variant="arc" className="w-48 h-48 md:w-80 md:h-80" />
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-highlight/25 via-highlight/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 border border-white/70 text-ink/80 text-xs sm:text-sm font-medium shadow-sm mb-1">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Founder-led creative studio</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Heading as="h1" size="display" className="text-ink">
                Your product does more than{" "}
                <span className="text-accent underline decoration-accent/30 underline-offset-8">
                  your customers understand.
                </span>
              </Heading>
            </Reveal>

            <Reveal delay={0.2}>
              <Text size="lead" className="mx-auto max-w-2xl text-ink/80">
                {home.hero.subhead}
              </Text>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button href={home.hero.buttons.primary.href} size="lg">
                  {home.hero.buttons.primary.label}
                </Button>
                <Button
                  href={home.hero.buttons.secondary.href}
                  variant="secondary"
                  size="lg"
                >
                  {home.hero.buttons.secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2. The Gap Section */}
      <Section spacing="default" className="border-t border-ink/5 bg-ink/[0.015]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
                The Disconnect
              </span>
              <Heading as="h2" size="h2">
                {home.theGap.heading}
              </Heading>
              <p className="text-sm sm:text-base text-ink/70 leading-relaxed pt-2">
                Most teams try to solve this by producing more content, but adding volume rarely solves confusion.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {home.theGap.items.map((item, i) => (
                  <Glass
                    key={i}
                    className="p-5 sm:p-6 border-white/40 bg-white/30 hover:bg-white/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-mono font-bold mb-3">
                      {i + 1}
                    </div>
                    <p className="text-sm sm:text-base text-ink/85 font-medium leading-relaxed">
                      {item}
                    </p>
                  </Glass>
                ))}
              </div>

              <div className="p-6 rounded-card bg-highlight/30 border border-highlight/70 mt-6">
                <p className="font-heading text-base sm:text-lg text-ink font-semibold italic">
                  &ldquo;{home.theGap.closing}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Why It Keeps Happening */}
      <Section spacing="default">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono">
              The Structural Problem
            </span>
            <Heading as="h2" size="h2">
              {home.whyItHappens.heading}
            </Heading>
            <Text size="lg" className="mx-auto text-ink/80">
              {home.whyItHappens.lead}
            </Text>
            <p className="font-heading text-xl sm:text-2xl text-accent font-semibold pt-2">
              {home.whyItHappens.closing}
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. The Approach */}
      <Section spacing="default" className="border-y border-ink/5 bg-ink/[0.015]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono mb-2 block">
              Our Methodology
            </span>
            <Heading as="h2" size="h2" className="mb-4">
              {home.approach.heading}
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {home.approach.points.map((point, idx) => (
              <Glass key={idx} className="p-8 relative group hover:border-accent/40 transition-all">
                <div className="text-xs font-mono font-bold text-accent mb-4 tracking-widest">
                  PHASE 0{idx + 1}
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                  {point.desc}
                </p>
              </Glass>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed italic">
              {home.approach.closing}
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. The Interadaptive Demo (Hero Module) */}
      <InteractiveDemo />

      {/* 6. Work Preview (Keus Smart Home POC) */}
      <Section spacing="default" className="border-t border-ink/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-deep/10 border border-accent-deep/20 text-accent-deep text-xs font-semibold">
                <span>{home.workPreview.tag}</span>
              </div>
              <Heading as="h2" size="h2">
                {home.workPreview.heading}
              </Heading>
              <Text size="base" className="text-ink/80">
                {home.workPreview.text}
              </Text>
              <div>
                <Button href={home.workPreview.link.href} variant="outline" size="md">
                  {home.workPreview.link.label}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Glass className="p-6 sm:p-8 border-accent/20 bg-gradient-to-br from-white/60 to-highlight/20 relative group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent/80" />
                    <span className="text-xs font-mono font-medium text-ink/70">
                      Keus Smart Home · Concept Experience
                    </span>
                  </div>
                  <span className="text-xs bg-ink/5 px-2.5 py-1 rounded-full font-mono text-ink/60">
                    POC
                  </span>
                </div>
                <div className="aspect-video w-full rounded-lg bg-ink/5 border border-ink/10 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-ink text-lg">
                      Keus Interactive Walkthrough
                    </h4>
                    <p className="text-xs text-ink/60 mt-1 max-w-sm">
                      Self-initiated proof of concept demonstrating interadaptive storytelling for complex luxury smart home hardware.
                    </p>
                  </div>
                  <Link
                    href="/work"
                    className="text-xs font-semibold text-accent hover:text-accent-deep transition-colors inline-flex items-center gap-1 pt-2"
                  >
                    View concept breakdown & placeholders →
                  </Link>
                </div>
              </Glass>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. What We Make (3 Offers Overview) */}
      <Section spacing="default" className="bg-ink/[0.015] border-t border-ink/5">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono block mb-2">
                Our Engagements
              </span>
              <Heading as="h2" size="h2">
                {home.whatWeMake.heading}
              </Heading>
            </div>
            <Link
              href={home.whatWeMake.link.href}
              className="text-sm font-semibold text-accent hover:text-accent-deep transition-colors inline-flex items-center gap-1"
            >
              {home.whatWeMake.link.label}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.whatWeMake.offers.map((offer, idx) => (
              <Glass key={idx} className="p-8 flex flex-col justify-between hover:bg-white/50 transition-all">
                <div>
                  <div className="text-xs font-mono text-ink/50 mb-3">0{idx + 1}</div>
                  <h3 className="font-heading text-xl font-bold text-ink mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-ink/5">
                  <Link
                    href="/what-we-do"
                    className="text-xs font-medium text-ink/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Explore scope →
                  </Link>
                </div>
              </Glass>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Where We Are */}
      <Section spacing="default">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-large border border-ink/10 bg-white/30 backdrop-blur-sm text-center space-y-4">
            <span className="text-xs font-mono text-ink/50 uppercase tracking-widest block">
              Honest Positioning
            </span>
            <Heading as="h2" size="h2" className="text-ink">
              {home.whereWeAre.heading}
            </Heading>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed max-w-xl mx-auto">
              {home.whereWeAre.body}
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Closing CTA */}
      <Section spacing="spacious" className="border-t border-ink/10 bg-gradient-to-b from-transparent to-highlight/15">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <Heading as="h2" size="h1" className="text-ink max-w-xl mx-auto">
              {home.closingCta.heading}
            </Heading>
            <div>
              <Button href={home.closingCta.button.href} size="lg" className="shadow-lg">
                {home.closingCta.button.label}
              </Button>
            </div>
            <p className="text-xs text-ink/50 pt-2">
              We talk through scope and investment on a call, once we understand your product.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
