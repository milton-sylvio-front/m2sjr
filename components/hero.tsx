import Image from "next/image";
import { metrics, profile } from "@/lib/content";
import { Icon } from "./icon";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-abyss-void py-space-xl lg:py-space-2xl" id="topo">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-mint-neon/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full bg-secondary-container/10 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter">
        <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-lg">
          <div className="inline-flex items-center gap-2 rounded border border-abyss-border/60 bg-abyss-base px-3 py-1.5 shadow-[inset_0_0_12px_rgba(1,251,161,0.06)] transition-all duration-300 hover:border-mint-neon/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-neon opacity-75" />
              <span className="glow-pulse relative inline-flex h-2 w-2 rounded-full bg-mint-neon" />
            </span>
            <span className="font-mono text-label-caps tracking-wider text-mint-neon uppercase">
              Disponível para projetos & liderança técnica
            </span>
          </div>
          <div className="hidden items-center gap-space-sm font-mono text-label-code text-text-muted sm:flex">
            <span>
              LATENCY: <strong className="font-normal text-mint-neon">14ms</strong>
            </span>
            <span>•</span>
            <span>
              STACK: <strong className="font-normal text-text-primary">NEXT 16 // TS // AI AGENTS</strong>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-space-xl pt-space-sm lg:grid-cols-12">
          <div className="flex flex-col items-start lg:col-span-7">
            <div className="mb-space-xs flex items-center gap-2 rounded border border-abyss-border/40 bg-abyss-surface/50 px-2 py-0.5 font-mono text-label-code tracking-wider text-mint-neon">
              <Icon className="text-[16px]" name="terminal" />
              <span>$ sys.whoami --full-profile</span>
              <span className="cursor-blink inline-block h-3.5 w-1.5 bg-mint-neon" />
            </div>
            <h1 className="max-w-2xl font-display text-headline-lg-mobile tracking-tight text-text-primary lg:text-display-hero">
              Construindo experiências digitais de alta performance e escala há{" "}
              <span className="bg-gradient-to-r from-mint-neon to-tertiary-fixed-dim bg-clip-text text-transparent">
                mais de 20 anos
              </span>
              .
            </h1>
            <p className="mt-space-md max-w-xl font-mono text-body-md leading-relaxed text-text-secondary lg:text-body-lg">
              <span className="font-semibold text-text-primary">{profile.name}</span> — Software Engineer
              Fullstack Pleno/Sênior. Especialista em React, Next.js, TypeScript, Design Systems,
              arquitetura frontend moderna e{" "}
              <span className="font-medium text-mint-neon">Agentic Development (Cursor, Claude Code)</span>.
            </p>
            <div className="mt-space-lg flex w-full flex-wrap items-center gap-space-md sm:w-auto">
              <a
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded bg-mint-neon px-space-lg py-3 font-mono text-label-code font-semibold tracking-tight text-abyss-void shadow-[0_0_20px_rgba(1,251,161,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-mint-shift hover:shadow-[0_0_28px_rgba(1,251,161,0.55)] active:scale-95"
                href={profile.whatsapp}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="text-[18px]" name="chat" />
                <span>Falar Comigo / WhatsApp</span>
                <Icon className="text-[18px] transition-transform group-hover:translate-x-1" name="arrow_forward" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded border border-abyss-border/60 bg-abyss-surface px-space-lg py-3 font-mono text-label-code font-medium text-text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-mint-neon/50 hover:bg-abyss-base hover:text-mint-neon hover:shadow-[0_0_16px_rgba(1,251,161,0.2)] active:scale-95"
                href={profile.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="text-[18px] text-mint-neon" name="code" />
                <span>Ver Projetos & GitHub</span>
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded border border-transparent px-space-md py-3 font-mono text-label-code text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-abyss-border/60 hover:text-text-primary active:scale-95"
                href="#contato"
              >
                <Icon className="text-[18px]" name="download" />
                <span>Baixar CV</span>
              </a>
            </div>
            <div className="mt-space-lg flex flex-wrap items-center gap-x-space-md gap-y-2 border-t border-transparent pt-space-md font-mono text-body-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Icon className="text-[15px] text-mint-neon" name="location_on" /> {profile.location}
              </span>
              <span>•</span>
              <a className="flex items-center gap-1.5 hover:text-text-primary" href={`mailto:${profile.email}`}>
                <Icon className="text-[15px] text-mint-neon" name="mail" /> {profile.email}
              </a>
              <span>•</span>
              <a className="flex items-center gap-1.5 hover:text-text-primary" href={profile.whatsapp}>
                <Icon className="text-[15px] text-mint-neon" name="call" /> {profile.phone}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="interactive-card float-subtle relative w-full max-w-[390px] overflow-hidden rounded-lg border border-abyss-border/50 bg-abyss-base p-space-md shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-mint-neon/20 blur-3xl" />
              <div className="mb-space-sm flex items-center justify-between border-b border-abyss-border/40 pb-space-sm">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint-neon" />
                </div>
                <span className="font-mono text-label-caps tracking-widest text-mint-neon uppercase">
                  SR_ARCHITECT_SYS.JPG
                </span>
              </div>
              <div className="group relative aspect-square w-full overflow-hidden rounded-lg bg-abyss-void shadow-inner">
                <Image
                  alt={profile.name}
                  className="object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  fill
                  priority
                  sizes="390px"
                  src={profile.portrait}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-void via-transparent to-transparent opacity-80" />
                <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded border border-abyss-border/60 bg-abyss-void/90 p-2.5 backdrop-blur-md transition-all group-hover:border-mint-neon/40">
                  <div>
                    <div className="font-display text-[13px] leading-tight font-bold text-text-primary">
                      {profile.shortName}
                    </div>
                    <div className="font-mono text-[11px] text-mint-neon">{profile.role}</div>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-surface-container-highest px-2 py-0.5 font-mono text-[10px] text-text-secondary uppercase">
                    <Icon className="text-[12px] text-mint-neon" name="verified" />
                    <span>Verificado</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-sm rounded border border-abyss-border/40 bg-abyss-void p-3 font-mono text-body-sm leading-relaxed text-text-secondary">
                <div className="flex items-center justify-between pb-1 text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-neon" />
                    sys_status: operational
                  </span>
                  <span className="font-semibold text-mint-neon">99.98% uptime</span>
                </div>
                <p className="pt-1 text-text-primary">
                  <span className="text-mint-neon">&gt;</span> AI-driven velocity + resilient frontend
                  architecture at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-space-2xl grid grid-cols-2 gap-space-md lg:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="interactive-card group rounded-lg border border-abyss-border/40 bg-abyss-base p-space-md hover:border-mint-neon/40 hover:bg-abyss-surface lg:p-space-lg"
            >
              <div className="mb-2 flex items-center justify-between text-text-muted">
                <span className="font-mono text-label-caps tracking-widest text-mint-neon uppercase">
                  {metric.label}
                </span>
                <Icon
                  className="text-[18px] text-text-muted transition-all group-hover:rotate-6 group-hover:text-mint-neon"
                  name={metric.icon}
                />
              </div>
              <div
                className={`font-display text-headline-lg tracking-tight transition-colors ${
                  metric.accent
                    ? "origin-left text-mint-neon group-hover:scale-105"
                    : "text-text-primary group-hover:text-mint-neon"
                }`}
              >
                {metric.value}
              </div>
              <p className="mt-1 font-mono text-body-sm text-text-secondary">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
