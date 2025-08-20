// components/AssistantWidget.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const AVATAR_SRC = "/avatar.png"; // your cartoon avatar (PNG with transparency)

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {/* Chat Panel */}
      {open && (
        <div
          className="mb-3 w-80 rounded-2xl border border-violet-700/40 bg-black/85 p-3 shadow-xl backdrop-blur"
          role="dialog"
          aria-label="Chaimae’s assistant"
          style={{ animation: "fadeIn .18s ease-out both" }}
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-zinc-100">Chaimae’s Assistant</p>
            <button
              onClick={() => setOpen(false)}
              className="rounded p-1 text-zinc-400 hover:text-zinc-200"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="rounded-xl bg-zinc-900/60 p-2">
              Hi! I can help you find a project, your CV, or contact.
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-lg border border-violet-700/40 px-2 py-1 text-xs text-violet-200 hover:bg-violet-700/20"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <a
                className="rounded-lg border border-violet-700/40 px-2 py-1 text-xs text-violet-200 hover:bg-violet-700/20"
                href="#projects"
              >
                Show Projects
              </a>
              <a
                className="rounded-lg border border-violet-700/40 px-2 py-1 text-xs text-violet-200 hover:bg-violet-700/20"
                href="mailto:abl.chaimaie.2000@gmail.com"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Avatar Button + Bubble */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Open assistant"
        className="relative select-none"
      >
        {/* Speech bubble (shown only when closed) */}
        {!open && (
          <div
          className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py- text-base font-semibold text-zinc-900 shadow"
        >
          <span className="inline-flex items-center gap-2 text-lg">
            Hi!
            <span
              aria-hidden
              style={{
                display: "inline-block",
                fontSize: "1.5rem", // make the hand bigger
                animation: "wave 1.6s ease-in-out infinite",
              }}
            >
              👋
            </span>
          </span>
          <span
            aria-hidden
            className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white/95"
          />
        </div>
        
        )}

        {/* Avatar (no circle behind) */}
        <Image
          src={AVATAR_SRC}
          alt="Assistant avatar"
          width={150}
          height={150}
          className="h-44 w-44 object-contain"
          priority
          style={{ animation: "breathe 4.5s ease-in-out infinite" }}
        />
      </button>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* subtle zoom in/out on the avatar */
        @keyframes breathe {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        /* gentle up/down float for bubble */
        @keyframes bob {
          0%, 100% { transform: translate(-50%, 0); }
          50%      { transform: translate(-50%, -4px); }
        }
        /* small hand waving rotation */
        @keyframes wave {
          0%   { transform: rotate(0deg) translateZ(0); }
          20%  { transform: rotate(12deg); }
          40%  { transform: rotate(-8deg); }
          60%  { transform: rotate(10deg); }
          80%  { transform: rotate(-6deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
