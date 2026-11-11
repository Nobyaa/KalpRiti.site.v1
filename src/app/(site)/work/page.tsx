import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { Check } from "lucide-react";
import { WorkViewer } from "@/components/work/WorkViewer";

export const metadata = {
  title: "Work & Proof of Concept — Keus Smart Home",
  description:
    "A self-initiated proof of concept demonstrating how a campaign narrative carries into an interadaptive digital experience for luxury smart home systems.",
};

export default function WorkPage() {
  const { work } = siteContent;

  return (
    <div className="w-full">
      {/* Header */}
      <Section spacing="default" className="pt-6 sm:pt-10 md:pt-12 pb-6">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-accent-deep font-semibold font-mono mb-2 block">
              Portfolio & Explorations
            </span>
            <Heading as="h1" size="display" className="mb-4">
              {work.header.heading}
            </Heading>
            <Text size="lead" className="text-ink/80">
              {work.header.subhead}
            </Text>
          </div>
        </Container>
      </Section>

      {/* The Keus Concept */}
      <Section spacing="default" className="pt-0">
        <Container>
          <div className="rounded-large border border-ink/10 bg-white/40 p-6 sm:p-10 lg:p-14 space-y-10">
            {/* Title & Tag */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-deep/10 border border-accent-deep/20 text-accent-deep text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent-deep" />
                <span>{work.concept.tag}</span>
              </div>
              <Heading as="h2" size="display" className="text-ink">
                {work.concept.title}
              </Heading>
            </div>

            {/* The Experience Embed (Client Component) */}
            <WorkViewer />

            {/* Context & Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* The Challenge */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-ink/60">
                  {work.concept.challengeHeading}
                </h4>
                <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
                  {work.concept.challenge}
                </p>
              </div>

              {/* The Thinking */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-accent-deep">
                  {work.concept.thinkingHeading}
                </h4>
                <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
                  {work.concept.thinking}
                </p>
              </div>
            </div>

            <Hairline variant="horizontal" />

            {/* What it shows / What it doesn't show */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-ink/70">
                  {work.concept.whatItShowsHeading}
                </h4>
                <ul className="space-y-2">
                  {work.concept.whatItShows.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-ink/85 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-accent-deep">
                  {work.concept.whatItDoesNotShowHeading}
                </h4>
                <p className="text-sm text-ink/75 leading-relaxed">
                  {work.concept.whatItDoesNotShow}
                </p>
              </div>
            </div>

            {/* Footer note & CTA */}
            <div className="pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs sm:text-sm text-ink/60">
                {work.footerNote}
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
