"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { Icon } from "./icon";

export function CopyCloneButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.cloneCommand);
    } catch {
      const area = document.createElement("textarea");
      area.value = profile.cloneCommand;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      if (!ok) return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button
      className={`group relative flex items-center gap-2 overflow-hidden rounded px-space-md py-2.5 font-mono text-label-code font-semibold whitespace-nowrap text-abyss-void shadow-[0_0_16px_rgba(1,251,161,0.3)] transition-all hover:-translate-y-0.5 hover:bg-mint-shift hover:shadow-[0_0_24px_rgba(1,251,161,0.5)] active:scale-95 ${
        copied ? "bg-secondary-fixed" : "bg-mint-neon"
      }`}
      onClick={copy}
      type="button"
    >
      <Icon className="text-[18px]" name={copied ? "check" : "content_copy"} />
      <span>{copied ? "Copiado para Clipboard!" : "$ git clone /milton-sylvio-front"}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </button>
  );
}
