"use client";

import Image from "next/image";
import { useState } from "react";
import { nav, profile } from "@/lib/content";
import { Icon } from "./icon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-abyss-border/40 bg-abyss-void/80 shadow-[0_1px_8px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-gutter-mobile lg:px-gutter">
        <div className="flex items-center gap-space-md">
          <a className="group flex items-center gap-space-sm transition-transform duration-200 active:scale-95" href="#topo">
            <span className="h-2 w-2 rounded-full bg-mint-neon shadow-[0_0_8px_#01FBA1] transition-transform duration-300 group-hover:scale-125" />
            <span className="font-display text-headline-sm tracking-tight text-text-primary transition-colors duration-200 group-hover:text-mint-neon">
              M2S<span className="text-mint-neon">Jr.</span>
            </span>
          </a>
          <span className="hidden rounded border border-transparent bg-surface-container px-2 py-0.5 font-mono text-label-caps text-text-muted uppercase transition-all hover:border-mint-neon/30 hover:text-text-secondary xl:inline-block">
            {profile.badge}
          </span>
        </div>
        <nav className="hidden items-center gap-space-lg md:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              className="group relative py-1 font-mono text-label-code text-on-surface-variant transition-colors hover:text-mint-neon"
              href={item.href}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-mint-neon transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="group relative hidden overflow-hidden rounded bg-primary-container px-space-md py-space-sm font-mono text-label-code font-semibold text-on-primary-container shadow-[0_0_16px_rgba(1,251,161,0.25)] transition-all duration-200 hover:bg-mint-shift hover:shadow-[0_0_24px_rgba(1,251,161,0.55)] active:scale-95 sm:inline-flex"
            href="#contato"
          >
            <span className="relative z-10">Entrar em contato</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <div className="flex items-center gap-space-xs pl-space-xs">
            <Image
              alt={profile.name}
              className="h-8 w-8 rounded-full object-cover ring-1 ring-mint-neon/40 shadow-[0_0_8px_rgba(1,251,161,0.2)] transition-all duration-200 hover:scale-105 hover:ring-mint-neon"
              height={32}
              src={profile.portrait}
              width={32}
            />
            <span className="relative hidden h-2 w-2 sm:flex">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-neon opacity-75" />
              <span className="glow-pulse relative inline-flex h-2 w-2 rounded-full bg-mint-neon" />
            </span>
          </div>
          <button
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-abyss-border text-text-primary md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <Icon className="text-[22px]" name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-abyss-border/40 bg-abyss-void px-gutter-mobile py-space-md md:hidden" aria-label="Seções móveis">
          <div className="flex flex-col gap-space-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                className="font-mono text-label-code text-on-surface-variant"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-space-xs rounded bg-primary-container px-space-md py-space-sm text-center font-mono text-label-code font-semibold text-on-primary-container"
              href="#contato"
              onClick={() => setOpen(false)}
            >
              Entrar em contato
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
