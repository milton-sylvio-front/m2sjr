"use client";

import { useEffect, useState } from "react";

const logs = [
  "Kernel & Architecture loaded",
  "Systems: React, Next.js, Node.js BFF",
  "Telemetry & Agentic Dev online",
];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"run" | "hide" | "gone">("run");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("gone");
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    let hideTimer = 0;
    let goneTimer = 0;

    const tick = (now: number) => {
      const raw = Math.min((now - start) / duration, 1);
      setProgress(Math.floor((1 - (1 - raw) ** 3) * 100));
      if (raw < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      hideTimer = window.setTimeout(() => {
        setPhase("hide");
        goneTimer = window.setTimeout(() => setPhase("gone"), 550);
      }, 150);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(hideTimer);
      window.clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  const status =
    progress >= 100
      ? "system online"
      : progress >= 85
        ? "runtime: ready // rendering"
        : "initializing modules...";

  return (
    <div
      className={`preloader fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background font-mono select-none transition-all duration-500 ${
        phase === "hide" ? "preloader-hidden" : ""
      }`}
    >
      <div className="pointer-events-none absolute h-[500px] w-[500px] -translate-y-10 rounded-full bg-mint-neon/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#054D4B_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
      <div className="preloader-scan pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-mint-neon/10 to-transparent" />
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-3 w-3 animate-ping rounded-full bg-mint-neon opacity-75 shadow-[0_0_12px_#01FBA1]" />
          <div className="font-display text-3xl font-extrabold tracking-tight text-text-primary drop-shadow-[0_0_16px_rgba(1,251,161,0.35)]">
            M2S<span className="text-mint-neon">Jr.</span>
          </div>
          <span className="rounded bg-abyss-surface px-2 py-0.5 font-mono text-[10px] tracking-widest text-mint-neon border border-abyss-border/60">
            SYS_INIT
          </span>
        </div>
        <div className="mb-2 flex w-full items-center justify-between font-mono text-xs text-text-muted">
          <span className="flex items-center gap-1.5 text-text-secondary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-neon" />
            <span>{status}</span>
          </span>
          <span className="font-semibold text-mint-neon">{progress}%</span>
        </div>
        <div className="relative mb-4 h-1.5 w-full overflow-hidden rounded-full border border-abyss-border/60 bg-abyss-void shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-secondary-container via-mint-neon to-tertiary-fixed shadow-[0_0_12px_#01FBA1] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mb-4 w-full space-y-1 rounded border border-abyss-border/60 bg-abyss-void/90 p-3 font-mono text-[11px] text-text-secondary shadow-inner">
          <div className="mb-1.5 flex items-center justify-between border-b border-abyss-border/40 pb-1 text-text-muted">
            <span className="text-[10px] tracking-widest">BOOT_LOG // 64-BIT RUNTIME</span>
            <span className="text-[10px] text-mint-neon">latency: 14ms</span>
          </div>
          {logs.map((line, index) => {
            const visible = progress >= [25, 55, 85][index];
            return (
              <div
                key={line}
                className={`flex items-center gap-2 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
              >
                <span className="font-bold text-mint-neon">[OK]</span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-text-muted uppercase">
          <span>Syntactic Void Environment</span>
          <span>•</span>
          <span className="text-mint-neon">READY 2025</span>
        </div>
      </div>
    </div>
  );
}
