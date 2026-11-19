import { profile, projects } from "@/lib/content";
import { CopyCloneButton } from "./copy-clone-button";
import { Icon } from "./icon";

const badgeClass = {
  mint: "border-mint-neon/30 bg-mint-glow text-mint-neon",
  neutral: "border-secondary-fixed/20 bg-surface-container text-secondary-fixed",
  tertiary: "border-tertiary-fixed/20 bg-surface-container text-tertiary-fixed",
} as const;

export function Projects() {
  return (
    <section className="w-full scroll-mt-24 border-t border-abyss-border/40 bg-abyss-void py-space-2xl" id="projetos">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md pb-space-xl lg:flex-row lg:items-end">
          <div>
            <span className="flex items-center gap-1.5 font-mono text-label-caps tracking-widest text-mint-neon uppercase">
              <Icon className="text-[14px]" name="code_blocks" />
              04 // Featured architectures
            </span>
            <h2 className="mt-1 font-display text-headline-md text-text-primary lg:text-headline-lg">
              Projetos Selecionados & Código de Produção
            </h2>
          </div>
          <a
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded border border-abyss-border/60 bg-abyss-surface px-space-md py-2.5 font-mono text-label-code font-semibold text-mint-neon shadow-[0_0_12px_rgba(1,251,161,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-mint-neon hover:text-abyss-void hover:shadow-[0_0_20px_rgba(1,251,161,0.4)] active:scale-95"
            href={profile.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="text-[18px]" name="terminal" />
            <span>{profile.githubLabel}</span>
            <Icon
              className="text-[16px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              name="open_in_new"
            />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.file}
              className="interactive-card group flex flex-col justify-between rounded-lg border border-abyss-border/40 bg-abyss-base p-space-lg shadow-sm hover:border-mint-neon/50"
            >
              <div>
                <div className="mb-space-md flex items-center justify-between border-b border-abyss-border/30 pb-space-sm">
                  <div className="flex items-center gap-2 font-mono text-body-sm text-text-muted">
                    <span className="h-2 w-2 rounded-full bg-mint-neon transition-transform group-hover:scale-125" />
                    <span>{project.file}</span>
                  </div>
                  <span className={`rounded border px-2 py-0.5 font-mono text-label-caps uppercase ${badgeClass[project.tone]}`}>
                    {project.badge}
                  </span>
                </div>
                <h3 className="font-display text-headline-sm font-bold text-text-primary transition-colors group-hover:text-mint-neon lg:text-headline-md">
                  {project.title}
                </h3>
                <p className="mt-space-sm font-mono text-body-md leading-relaxed text-text-secondary">
                  {project.summary}
                </p>
                <div className="mt-space-md space-y-1 rounded border border-abyss-border/30 bg-abyss-void p-space-sm font-mono text-body-sm text-text-secondary">
                  {project.specs.map(([label, value], index) => (
                    <div key={label} className="flex items-center justify-between gap-3 text-text-muted">
                      <span>{label}</span>
                      <span className={index === 0 ? "font-semibold text-mint-neon" : "text-text-primary"}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-space-lg flex flex-wrap items-center justify-between gap-2 border-t border-abyss-border/30 pt-space-sm">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="group/link flex items-center gap-1 font-mono text-body-sm text-mint-neon transition-colors hover:text-white"
                  href={profile.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="group-hover/link:underline">{project.link}</span>
                  <Icon
                    className="text-[15px] transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    name="arrow_outward"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-space-xl flex flex-col items-center justify-between gap-space-md rounded-lg border border-abyss-border/50 bg-surface-container-low p-space-md transition-all duration-300 hover:border-mint-neon/40 md:flex-row lg:p-space-lg">
          <div className="flex items-center gap-3">
            <Icon className="animate-pulse text-[28px] text-mint-neon" name="terminal" />
            <div>
              <div className="font-display text-body-md font-bold text-text-primary">
                Repositórios públicos e código de teste
              </div>
              <p className="font-mono text-body-sm text-text-muted">
                Acesse o GitHub para checar commits, padrões de testes e arquiteturas completas.
              </p>
            </div>
          </div>
          <CopyCloneButton />
        </div>
      </div>
    </section>
  );
}
