"use client";

import React, { useState } from "react";
import { Video, Box, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export const WorkViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"video" | "webgl">("video");

  return (
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
            Adfilm Narrative
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
            Interadaptive 3D Experience
          </button>
        </div>

        {/* External link button for the live interactive experience */}
        <a
          href="https://keus-poc-tau.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-deep transition-colors px-3 py-1.5 rounded-full hover:bg-accent/5 focus-visible:outline-accent"
        >
          <span>Open experience in full tab</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Display Window */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-ink/15 bg-black shadow-inner flex flex-col items-center justify-center">
        {/* Persistent POC Label overlay */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono tracking-wider border border-white/10 pointer-events-none">
          POC · Self-Initiated Concept
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
          /* Interactive Experience Embed */
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
          <p>For the smoothest 3D controls on mobile, open in a full window:</p>
          <a
            href="https://keus-poc-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-accent-deep underline whitespace-nowrap flex-shrink-0"
          >
            Launch Full
          </a>
        </div>
      )}
    </div>
  );
};
