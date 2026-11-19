"use client";

import { FormEvent } from "react";
import { profile } from "@/lib/content";
import { Icon } from "./icon";

const fieldClass =
  "w-full rounded border border-abyss-border bg-field px-3 py-2.5 font-mono text-body-sm text-text-primary placeholder:text-text-muted transition-all focus:border-mint-neon focus:bg-abyss-surface focus:ring-1 focus:ring-mint-neon focus:outline-none";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const text = `Olá Milton! Sou ${name} (${email}). Mensagem: ${message}`;
    window.open(`${profile.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="space-y-space-md" onSubmit={onSubmit}>
      <div>
        <label className="mb-1 block font-mono text-label-caps text-text-secondary uppercase" htmlFor="cf-name">
          Seu nome / empresa
        </label>
        <input
          className={fieldClass}
          id="cf-name"
          name="name"
          placeholder="Ex.: Lucas Mendes (Tech Lead @ Empresa)"
          required
          type="text"
        />
      </div>
      <div>
        <label className="mb-1 block font-mono text-label-caps text-text-secondary uppercase" htmlFor="cf-email">
          Seu e-mail ou WhatsApp
        </label>
        <input
          className={fieldClass}
          id="cf-email"
          name="email"
          placeholder="seu.email@empresa.com ou (11) 99999-9999"
          required
          type="text"
        />
      </div>
      <div>
        <label className="mb-1 block font-mono text-label-caps text-text-secondary uppercase" htmlFor="cf-msg">
          Projeto ou escopo
        </label>
        <textarea
          className={`${fieldClass} resize-none`}
          id="cf-msg"
          name="message"
          placeholder="Conte brevemente sobre o projeto, desafio de engenharia ou proposta..."
          required
          rows={4}
        />
      </div>
      <div className="pt-2">
        <button
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded bg-mint-neon py-3.5 font-mono text-label-code font-semibold tracking-tight text-abyss-void shadow-[0_0_18px_rgba(1,251,161,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-mint-shift hover:shadow-[0_0_28px_rgba(1,251,161,0.5)] active:scale-95"
          type="submit"
        >
          <Icon className="text-[18px]" name="terminal" />
          <span>Disparar via WhatsApp (instantâneo)</span>
          <Icon className="text-[18px] transition-transform group-hover:translate-x-1.5" name="send" />
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
      </div>
    </form>
  );
}
