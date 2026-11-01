"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Glass } from "@/components/ui/Glass";
import { Hairline } from "@/components/ui/Hairline";
import { siteContent } from "@/content/siteContent";
import { Play, Box, Check, ExternalLink, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const { work } = siteContent;
  const [activeTab, setActiveTab] = useState<"video" | "webgl">("video");

  return (
    <div className="w-full">
      {/* Header */}
      <Section spacing="default" className="pt-6 sm:pt-10 md:pt-12 pb-6">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold font-mono mb-2 block">
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

            {/* The Experience Embed Placeholders (YT Embed & WebGL Window) */}
            <div className="space-y-4">
              {/* Tab Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("video")}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer focus-visible:outline-accent",
                      activeTab === "video"
                        ? "bg-accent text-white shadow-sm"
                        : "bg-ink/5 text-ink/70 hover:bg-ink/10"
                    )}
                  >
                    <Video className="w-4 h-4" />
                    Adfilm
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("webgl")}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer focus-visible:outline-accent",
                      activeTab === "webgl"
                        ? "bg-accent text-white shadow-sm"
                        : "bg-ink/5 text-ink/70 hover:bg-ink/10"
                    )}
                  >
                    <Box className="w-4 h-4" />
                    Interactive Experience
                  </button>
                </div>

                {/* External link button for the live interactive experience */}
                <a
                  href="https://keus-poc-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-deep transition-colors px-3 py-1.5 rounded-full hover:bg-accent/5 focus-visible:outline-accent"
                >
                  <span>Open experience in new tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Display Window */}
              <div
                className="relative aspect-video w-full rounded-2xl overflow-hidden border border-ink/15 bg-black shadow-inner flex flex-col items-center justify-center"
              >
                {/* Persistent POC Label overlay */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono tracking-wider border border-white/10 pointer-events-none">
                  POC · Conceptual Demonstration
                </div>

                {activeTab === "video" ? (
                  /* YouTube Embed */
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/yskXD5P3mBk?si=xjnJV-Vq_KmvhMoe"
                    title="Keus POC — Adfilm"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  /* Interactive Experience Embed (Clean full width & height, 100% responsive) */
                  <iframe
                    className="w-full h-full border-0 bg-black block"
                    src="https://keus-poc-tau.vercel.app/"
                    title="Keus POC — Interactive Experience"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Mobile notice for interactive experience */}
              {activeTab === "webgl" && (
                <div className="sm:hidden flex items-center justify-between gap-3 p-3 rounded-xl bg-ink/5 border border-ink/10 text-xs text-ink/75">
                  <p>It is recommended to open the experience in full view in a new tab.</p>
                  <a
                    href="https://keus-poc-tau.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent hover:text-accent-deep underline whitespace-nowrap flex-shrink-0"
                  >
                    Open
                  </a>
                </div>
              )}
            </div>

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
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-accent">
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
