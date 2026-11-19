import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="w-full border-t border-abyss-border/40 bg-surface-container-lowest py-space-2xl">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-space-lg px-gutter-mobile md:flex-row lg:px-gutter">
        <div className="flex flex-col items-center gap-space-xs md:items-start">
          <div className="flex items-center gap-space-sm">
            <span className="font-display text-headline-sm text-text-primary">{profile.name}</span>
            <span className="rounded border border-mint-neon/30 bg-mint-glow px-2 py-0.5 font-mono text-label-caps text-mint-neon uppercase">
              Online
            </span>
          </div>
          <p className="text-center font-mono text-body-sm text-text-muted md:text-left">
            © 2025 Milton Sylvio. Engenharia de Software Fullstack & Frontend de Alta Performance.
          </p>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-neon opacity-75" />
            <span className="glow-pulse relative inline-flex h-2 w-2 rounded-full bg-mint-neon" />
          </span>
          <span className="font-mono text-label-caps tracking-wide text-mint-neon uppercase">
            Disponível para novos projetos
          </span>
        </div>
        <div className="flex items-center gap-space-md font-mono text-label-code text-on-surface-variant">
          <a className="transition-colors hover:text-mint-neon" href={profile.github} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
          <span className="text-outline-variant">/</span>
          <a className="transition-colors hover:text-mint-neon" href={profile.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <span className="text-outline-variant">/</span>
          <a className="transition-colors hover:text-mint-neon" href="#contato">
            Terminal
          </a>
        </div>
      </div>
    </footer>
  );
}
