import { agentTools, skillGroups } from "@/lib/content";
import { Icon } from "./icon";

export function Skills() {
  return (
    <section
      className="w-full scroll-mt-24 border-t border-abyss-border/40 bg-surface py-space-2xl"
      id="habilidades-e-stack"
    >
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-sm pb-space-xl md:flex-row md:items-end">
          <div>
            <span className="flex items-center gap-1.5 font-mono text-label-caps tracking-widest text-mint-neon uppercase">
              <Icon className="text-[14px]" name="layers" />
              03 // Technical arsenal
            </span>
            <h2 className="mt-1 font-display text-headline-md text-text-primary lg:text-headline-lg">
              Habilidades & Stack Tecnológica
            </h2>
          </div>
          <div className="font-mono text-body-sm text-mint-neon">
            // COM ESTILIZAÇÃO NEON MINT & RIGOR ARQUITETURAL
          </div>
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="interactive-card flex flex-col justify-between rounded-lg border border-abyss-border/40 bg-abyss-base p-space-lg hover:border-mint-neon/40"
            >
              <div>
                <div className="mb-space-sm flex items-center justify-between border-b border-abyss-border/30 pb-space-sm">
                  <Icon className="text-[24px] text-mint-neon" name={group.icon} />
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-label-caps uppercase ${
                      group.tone === "mint"
                        ? "border-mint-neon/30 bg-mint-glow text-mint-neon"
                        : "border-secondary-fixed/20 bg-surface-container text-secondary-fixed"
                    }`}
                  >
                    {group.badge}
                  </span>
                </div>
                <h3 className="font-display text-headline-sm font-bold text-text-primary">{group.title}</h3>
                <p className="mt-1 font-mono text-body-sm text-text-secondary">{group.summary}</p>
                <div className="mt-space-md flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip normal-case tracking-[0.02em]">
                      {(group.featured as readonly string[]).includes(item) ? (
                        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-mint-neon" />
                      ) : null}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-space-lg pt-space-xs font-mono text-[10px] tracking-[0.08em] text-text-muted uppercase">
                {group.footer}
              </div>
            </article>
          ))}
          <article className="interactive-card flex flex-col justify-between rounded-lg border border-mint-neon/20 bg-gradient-to-b from-abyss-surface to-abyss-base p-space-lg shadow-sm hover:border-mint-neon/50 md:col-span-2 lg:col-span-2">
            <div>
              <div className="mb-space-sm flex items-center justify-between border-b border-abyss-border/30 pb-space-sm">
                <Icon className="text-[24px] text-mint-neon" name="smart_toy" />
                <span className="rounded border border-mint-neon/30 bg-mint-glow px-2 py-0.5 font-mono text-label-caps text-mint-neon uppercase">
                  2025 productivity
                </span>
              </div>
              <h3 className="font-display text-headline-sm font-bold text-text-primary">AI & Agentic Development</h3>
              <p className="mt-1 font-mono text-body-sm text-text-secondary">
                Automação de workflows, geração supervisionada de código e pair programming avançado com LLMs
                de raciocínio.
              </p>
              <div className="mt-space-md grid grid-cols-1 gap-2 sm:grid-cols-3">
                {agentTools.map((tool) => (
                  <div
                    key={tool.title}
                    className="rounded border border-abyss-border/40 bg-abyss-void p-2.5 transition-all hover:-translate-y-0.5 hover:border-mint-neon/40"
                  >
                    <span className="block font-mono text-body-sm font-semibold text-mint-neon">{tool.title}</span>
                    <span className="font-mono text-[11px] leading-5 text-text-muted">{tool.detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-space-md flex items-center gap-1 pt-space-xs font-mono text-[10px] tracking-[0.08em] text-mint-neon uppercase">
              <Icon className="text-[13px]" name="check" />
              Velocidade multiplicada com precisão de arquitetura sênior
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
