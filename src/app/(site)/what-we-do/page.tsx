import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Glass } from "@/components/ui/Glass";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata = {
  title: "What We Do — KalpRiti",
  description:
    "Three ways to work with us: Campaign Strategy Sprint, Interactive Campaign Experience, and Campaign Growth Partner.",
};

export default function WhatWeDoPage() {
  const { whatWeDo } = siteContent;

  return (
    <div className="w-full">
      {/* Header */}
      <Section spacing="default" className="pt-6 sm:pt-10 md:pt-12 pb-6">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono mb-2 block">
              Services & Engagements
            </span>
            <Heading as="h1" size="display" className="mb-4">
              {whatWeDo.header.heading}
            </Heading>
            <Text size="lead" className="text-ink/80">
              {whatWeDo.header.subhead}
            </Text>
          </div>
        </Container>
      </Section>

      {/* The Three Offers */}
      <Section spacing="default" className="pt-0">
        <Container>
          <div className="space-y-12">
            {whatWeDo.offers.map((offer) => (
              <Glass
                key={offer.id}
                className="p-6 sm:p-10 lg:p-12 border-ink/10 hover:border-ink/20 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8">
                  <div className="max-w-2xl">
                    <span className="text-xs font-mono font-bold text-accent tracking-widest block mb-2">
                      OFFER {offer.num}
                    </span>
                    <Heading as="h2" size="h2" className="mb-3">
                      {offer.title}
                    </Heading>
                    <p className="font-sans text-base sm:text-lg text-ink/85 font-medium leading-relaxed">
                      {offer.subtitle}
                    </p>
                  </div>

                  <div>
                    <Button href="/contact" size="md">
                      Discuss a Campaign
                    </Button>
                  </div>
                </div>

                <Hairline variant="horizontal" className="mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* What you get */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-ink/70">
                      What you get
                    </h4>
                    <ul className="space-y-2.5">
                      {offer.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-ink/85 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not included */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-accent-deep/80">
                      Not included
                    </h4>
                    <ul className="space-y-2.5">
                      {offer.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-accent-deep/60 mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-ink/70 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {"noteOnExisting" in offer && (
                      <div className="mt-4 p-4 rounded-xl bg-ink/5 border border-ink/10 text-xs sm:text-sm text-ink/75 leading-relaxed">
                        <strong className="font-semibold text-ink">
                          A note on what you already have:
                        </strong>{" "}
                        {offer.noteOnExisting}
                      </div>
                    )}
                  </div>
                </div>
              </Glass>
            ))}
          </div>
        </Container>
      </Section>

      {/* What we don't promise */}
      <Section spacing="default" className="border-t border-ink/10 bg-ink/[0.015]">
        <Container size="narrow">
          <div className="p-8 sm:p-10 rounded-card bg-highlight/25 border border-highlight/70 text-center space-y-4">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
              Integrity First
            </span>
            <Heading as="h2" size="h3">
              {whatWeDo.whatWeDontPromise.heading}
            </Heading>
            <p className="text-sm sm:text-base text-ink/85 leading-relaxed max-w-xl mx-auto">
              {whatWeDo.whatWeDontPromise.text}
            </p>
          </div>
        </Container>
      </Section>

      {/* Who this is for / Who it isn't for */}
      <Section spacing="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Who this is for */}
            <div className="p-8 rounded-card bg-white/40 border border-white/60 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-ink">
                Who this is for
              </h3>
              <ul className="space-y-3">
                {whatWeDo.qualification.whoThisIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-ink/85 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it isn't for */}
            <div className="p-8 rounded-card bg-white/20 border border-white/40 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-ink/70">
                Who it isn&apos;t for
              </h3>
              <ul className="space-y-3">
                {whatWeDo.qualification.whoItIsNotFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-ink/65 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* How a project moves */}
      <Section spacing="default" className="border-t border-ink/5 bg-ink/[0.01]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono block mb-2">
              Workflow Progression
            </span>
            <Heading as="h2" size="h2" className="mb-2">
              {whatWeDo.process.heading}
            </Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.process.steps.map((step) => (
              <Glass key={step.num} className="p-6 relative">
                <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded-full bg-accent/10 inline-block mb-4">
                  STEP 0{step.num}
                </span>
                <h4 className="font-heading text-xl font-bold text-ink mb-2">
                  {step.name}
                </h4>
                <p className="text-sm text-ink/75 leading-relaxed">
                  {step.desc}
                </p>
              </Glass>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact" size="lg">
              Discuss a Campaign
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
