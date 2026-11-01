"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Glass } from "@/components/ui/Glass";
import { Button } from "@/components/ui/Button";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveDemo: React.FC = () => {
  const { demo } = siteContent.home;
  const [selectedId, setSelectedId] = useState<number>(1);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const currentChoice =
    demo.choices.find((c) => c.id === selectedId) || demo.choices[0];

  const handleSelect = (id: number) => {
    setSelectedId(id);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <Section id="demo" spacing="default" className="relative scroll-mt-24">
      {/* Subtle background hairline accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-30 pointer-events-none">
        <Hairline variant="arc" className="w-64 h-64" />
      </div>

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Demonstration
          </div>
          <Heading as="h2" size="h2" className="mb-4">
            {demo.heading}
          </Heading>
          <Text size="base" className="mx-auto text-ink/75">
            Select a scenario below to see how KalpRiti shapes the narrative,
            interaction, and next step to match.
          </Text>
        </div>

        {/* The 4 Choices Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {demo.choices.map((choice) => {
            const isSelected = choice.id === selectedId;
            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => handleSelect(choice.id)}
                aria-pressed={isSelected}
                className={cn(
                  "relative text-left p-4 sm:p-5 rounded-card transition-all duration-300 border flex flex-col justify-between group cursor-pointer focus-visible:outline-accent",
                  isSelected
                    ? "bg-white/70 border-accent shadow-md shadow-accent/5 ring-1 ring-accent"
                    : "bg-white/20 border-white/40 hover:bg-white/40 hover:border-ink/15 text-ink/80"
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={cn(
                      "text-xs font-mono font-semibold px-2 py-0.5 rounded-full transition-colors",
                      isSelected
                        ? "bg-accent text-white"
                        : "bg-ink/5 text-ink/60 group-hover:bg-ink/10"
                    )}
                  >
                    0{choice.id}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-accent animate-in fade-in zoom-in-75 duration-200" />
                  )}
                </div>
                <p
                  className={cn(
                    "text-sm sm:text-base font-medium leading-snug transition-colors",
                    isSelected ? "text-ink font-semibold" : "text-ink/85"
                  )}
                >
                  {choice.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* The Adapted Experience Display */}
        <Glass className="p-6 sm:p-10 lg:p-12 mb-8 relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-accent font-mono block mb-1">
                Context & Emphasis: {currentChoice.focusTitle}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-ink font-semibold">
                How KalpRiti approaches this scenario:
              </h3>
            </div>
            <div className="text-xs text-ink/60 bg-ink/5 px-3 py-1.5 rounded-full self-start">
              Explicit selection: Choice 0{selectedId}
            </div>
          </div>

          <Hairline variant="horizontal" className="mb-6 opacity-40" />

          {/* Adapted Response Copy */}
          <div className="max-w-3xl mb-8">
            <p className="font-sans text-base sm:text-lg md:text-xl text-ink/90 leading-relaxed font-normal">
              {currentChoice.response}
            </p>
          </div>

          {/* Adapted Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6 border-t border-ink/10">
            <Link
              href={currentChoice.linkHref}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-ink/80 hover:text-accent transition-colors group focus-visible:outline-accent"
            >
              <span>{currentChoice.linkText}</span>
            </Link>

            <Button
              href={currentChoice.buttonHref}
              size="md"
              className="shadow-md"
            >
              {currentChoice.buttonLabel}
            </Button>
          </div>
        </Glass>

        {/* Explainer: Appears after visitor interacts */}
        {hasInteracted && (
          <div className="mb-6 p-6 sm:p-8 rounded-card bg-highlight/25 border border-highlight/60 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-heading text-lg font-bold text-ink mb-1">
                  {demo.explainer.title}
                </h4>
                <p className="font-sans text-sm sm:text-base text-ink/85 leading-relaxed">
                  {demo.explainer.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Privacy / Tracking Disclaimer */}
        <p className="text-center text-xs text-ink/50 tracking-tight">
          {demo.disclaimer}
        </p>
      </Container>
    </Section>
  );
};
