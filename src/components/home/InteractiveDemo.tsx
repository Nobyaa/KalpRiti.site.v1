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
import {
  Sparkles,
  ShieldCheck,
  Palette,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const choiceIcons = [ShieldCheck, Palette, Zap, Clock];

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
      {/* Decorative architectural arc */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-30 pointer-events-none">
        <Hairline variant="arc" className="w-64 h-64" />
      </div>

      <Container>
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-deep/10 border border-accent-deep/20 text-accent-deep text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {demo.badge}
          </div>
          <Heading as="h2" size="h2" className="text-balance">
            {demo.heading}
          </Heading>
          <Text size="base" className="mx-auto text-ink/75 max-w-2xl">
            {demo.lead}
          </Text>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink/60 bg-ink/5 px-3 py-1 rounded-full">
              <SlidersHorizontal className="w-3 h-3 text-accent" />
              {demo.scenario}
            </span>
          </div>
        </div>

        {/* 1. Explicit Choice Selector (The 4 Personas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {demo.choices.map((choice, idx) => {
            const isSelected = choice.id === selectedId;
            const IconComponent = choiceIcons[idx % choiceIcons.length];

            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => handleSelect(choice.id)}
                aria-pressed={isSelected}
                className={cn(
                  "relative text-left p-4 sm:p-5 rounded-card transition-all duration-300 border flex flex-col justify-between group cursor-pointer focus-visible:outline-accent",
                  isSelected
                    ? "bg-white/80 border-accent shadow-md shadow-accent/5 ring-1 ring-accent"
                    : "bg-white/30 border-white/50 hover:bg-white/50 hover:border-ink/20 text-ink/80"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center transition-colors",
                        isSelected
                          ? "bg-accent text-white"
                          : "bg-ink/5 text-ink/60 group-hover:bg-ink/10"
                      )}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        ACTIVE PATH
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm font-semibold leading-snug transition-colors",
                      isSelected ? "text-ink font-bold" : "text-ink/85"
                    )}
                  >
                    {choice.label}
                  </p>
                </div>
                <p className="text-[11px] text-ink/50 mt-3 font-mono">
                  {choice.persona}
                </p>
              </button>
            );
          })}
        </div>

        {/* 2. The Adapted Campaign Experience Window */}
        <Glass className="p-6 sm:p-10 lg:p-12 mb-8 relative overflow-hidden transition-all duration-300 border-accent/20">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-accent-deep block mb-1">
                Campaign Experience Adapted for: {currentChoice.persona}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-ink font-bold leading-tight">
                &ldquo;{currentChoice.hook}&rdquo;
              </h3>
            </div>
            <div className="text-xs font-mono text-ink/60 bg-ink/5 border border-ink/10 px-3 py-1.5 rounded-full self-start whitespace-nowrap">
              Explicit Choice 0{selectedId} of 04
            </div>
          </div>

          <Hairline variant="horizontal" className="mb-6 opacity-40" />

          {/* Adapted Narrative */}
          <div className="max-w-3xl mb-8">
            <p className="text-base sm:text-lg text-ink/90 leading-relaxed font-normal">
              {currentChoice.narrative}
            </p>
          </div>

          {/* Active Adaptive Demonstration Protocols */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-ink/60">
              Adaptive Information Architecture Activated:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentChoice.adaptiveProtocols.map((protocol, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/60 border border-ink/10 text-xs sm:text-sm font-medium text-ink/85 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{protocol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Action tailored to this exact persona */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-ink/10">
            <p className="text-xs text-ink/60 max-w-sm">
              Notice how the call-to-action matches what this buyer explored, rather than a generic contact link.
            </p>

            <Button
              href={currentChoice.actionHref}
              size="md"
              className="shadow-md text-xs sm:text-sm font-semibold"
            >
              {currentChoice.actionLabel}
            </Button>
          </div>
        </Glass>

        {/* 3. The Explainer Card */}
        <div className="mb-6 p-6 sm:p-8 rounded-card bg-highlight/30 border border-highlight/80 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="font-heading text-lg font-bold text-ink">
                {demo.explainer.title}
              </h4>
              <p className="font-sans text-sm sm:text-base text-ink/85 leading-relaxed">
                {demo.explainer.text}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Choice-Based Privacy Statement */}
        <p className="text-center text-xs text-ink/50 tracking-tight">
          {demo.disclaimer}
        </p>
      </Container>
    </Section>
  );
};
