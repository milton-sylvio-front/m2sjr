import { compactExperiences, experiences } from "@/lib/content";
import { Icon } from "./icon";

function Badge({ label, tone }: { label: string; tone: "mint" | "neutral" }) {
  return (
    <span
      className={`rounded border px-2 py-0.5 font-mono text-label-caps uppercase ${
        tone === "mint"
          ? "border-mint-neon/30 bg-mint-glow text-mint-neon"
          : "border-secondary-fixed/20 bg-surface-container text-secondary-fixed"
      }`}
    >
      {label}
    </span>
  );
}

export function Experience() {
  return (
    <section className="w-full scroll-mt-24 border-t border-abyss-border/40 bg-abyss-void py-space-2xl" id="experiencia">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-sm pb-space-xl md:flex-row md:items-end">
          <div>
            <span className="flex items-center gap-1.5 font-mono text-label-caps tracking-widest text-mint-neon uppercase">
              <Icon className="text-[14px]" name="timeline" />
              02 // Timeline & track record
            </span>
            <h2 className="mt-1 font-display text-headline-md text-text-primary lg:text-headline-lg">
              Experiências Profissionais em Alta Escala
            </h2>
          </div>
          <div className="font-mono text-body-sm text-text-muted">// EMPRESAS DE GRANDE PORTE & FINTECHS</div>
        </div>
        <div className="space-y-space-lg">
          {experiences.map((job) => (
            <article
              key={job.company}
              className="interactive-card rounded-lg border border-abyss-border/40 bg-abyss-base p-space-lg shadow-sm hover:border-mint-neon/40 lg:p-space-xl"
            >
              <div className="flex flex-col justify-between gap-space-sm border-b border-abyss-border/30 pb-space-md lg:flex-row lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-headline-sm font-bold text-text-primary lg:text-headline-md">
                      {job.company}
                    </h3>
                    <Badge label={job.badge} tone={job.badgeTone} />
                  </div>
                  <p className="mt-1 font-mono text-body-md font-medium text-mint-neon">{job.role}</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-body-sm text-text-muted">
                  <Icon className="text-[16px] text-mint-neon" name="date_range" />
                  <span>{job.period}</span>
                </div>
              </div>
              <p className="mt-space-sm font-mono text-body-md leading-relaxed text-text-secondary">{job.summary}</p>
              <div className="mt-space-md grid grid-cols-1 gap-space-sm md:grid-cols-3">
                {job.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded border border-abyss-border/30 bg-abyss-void p-3 transition-all hover:-translate-y-0.5 hover:border-mint-neon/30"
                  >
                    <span className="block font-mono text-[10px] font-semibold tracking-[0.08em] text-mint-neon uppercase">
                      {item.label}
                    </span>
                    <p className="mt-1 font-mono text-body-sm text-text-secondary">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-space-md flex flex-wrap gap-2 pt-space-sm">
                {job.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
            {compactExperiences.map((job) => (
              <article
                key={job.company}
                className="interactive-card rounded-lg border border-abyss-border/40 bg-abyss-base p-space-lg shadow-sm hover:border-mint-neon/40"
              >
                <div className="flex items-center justify-between border-b border-abyss-border/30 pb-space-sm">
                  <h3 className="font-display text-headline-sm font-bold text-text-primary">{job.company}</h3>
                  <span className="font-mono text-[11px] text-text-muted">{job.period}</span>
                </div>
                <p className="mt-2 mb-2 font-mono text-body-sm text-mint-neon">{job.role}</p>
                <p className="font-mono text-body-sm leading-relaxed text-text-secondary">{job.summary}</p>
                <div className="mt-space-md flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
