import { agenticPoints, companies } from "@/lib/content";
import { Icon } from "./icon";

export function About() {
  return (
    <section className="w-full scroll-mt-24 border-t border-abyss-border/40 bg-surface-dim py-space-2xl" id="sobre">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col justify-between gap-space-md pb-space-xl md:flex-row md:items-end">
          <div>
            <span className="flex items-center gap-1.5 font-mono text-label-caps tracking-widest text-mint-neon uppercase">
              <Icon className="text-[14px]" name="psychology" />
              01 // Profile & trajectory
            </span>
            <h2 className="mt-1 font-display text-headline-md text-text-primary lg:text-headline-lg">
              Tradição em engenharia com execução de última geração.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-body-sm text-text-muted">
            Aliando fundamentos profundos de arquitetura de software ao Agentic Development para máxima
            cadência e precisão.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
          <article className="interactive-card flex flex-col justify-between rounded-lg border border-abyss-border/40 bg-abyss-base p-space-lg hover:border-mint-neon/40 lg:col-span-7 lg:p-space-xl">
            <div className="space-y-space-md">
              <div className="inline-flex items-center rounded border border-abyss-border/50 bg-abyss-surface px-2.5 py-1 font-mono text-label-caps text-mint-neon uppercase">
                Visão técnica e repertório
              </div>
              <h3 className="font-display text-headline-sm text-text-primary lg:text-headline-md">
                Mais de duas décadas evoluindo a web: do monólito ao ecossistema moderno com IA assistida.
              </h3>
              <p className="font-mono text-body-md leading-relaxed text-text-secondary">
                Atuação direta na concepção, migração e refinamento de produtos vitais para o mercado
                corporativo brasileiro. Com profundo domínio em{" "}
                <span className="font-medium text-text-primary">
                  React.js, Next.js, Vue.js, TypeScript e arquitetura BFF (Node.js)
                </span>
                , meu foco central é transformar requisitos complexos de negócio em interfaces fluidas,
                ultra-otimizadas e prontas para auditorias rigorosas de segurança e performance.
              </p>
              <p className="font-mono text-body-md leading-relaxed text-text-secondary">
                Passagens chave por ecossistemas de grande escala como <strong>Serasa Experian</strong>,{" "}
                <strong>Unicred</strong>, <strong>Boa Vista</strong>, <strong>Dasa</strong>,{" "}
                <strong>GuiaMais</strong>, <strong>Dafiti</strong> e <strong>Mercado Livre</strong>, sempre
                atuando de ponta a ponta: do RFC à telemetria de produção via Datadog.
              </p>
            </div>
            <div className="mt-space-lg border-t border-abyss-border/40 pt-space-md">
              <span className="mb-space-sm block font-mono text-label-caps tracking-wider text-text-muted uppercase">
                Empresas & ecossistemas de atuação
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="rounded border border-abyss-border/40 bg-surface-container px-3 py-1.5 font-mono text-body-sm font-medium text-text-primary"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="interactive-card flex flex-col justify-between rounded-lg border border-mint-neon/20 bg-gradient-to-b from-abyss-surface to-abyss-base p-space-lg shadow-[0_0_24px_rgba(1,251,161,0.08)] hover:border-mint-neon/50 lg:col-span-5 lg:p-space-xl">
            <div>
              <div className="mb-space-md flex items-center justify-between border-b border-abyss-border/40 pb-space-sm">
                <span className="flex items-center gap-1 font-mono text-label-caps text-mint-neon uppercase">
                  <Icon className="text-[15px]" name="neurology" />
                  New paradigm // 2025
                </span>
                <span className="rounded border border-mint-neon/30 bg-mint-glow px-2 py-0.5 font-mono text-body-sm text-mint-neon">
                  SUPERVISED AI
                </span>
              </div>
              <h3 className="font-display text-headline-sm font-bold text-text-primary lg:text-headline-md">
                Agentic Development: Cursor & Claude Code
              </h3>
              <p className="mt-2 font-mono text-body-md leading-relaxed text-text-secondary">
                Integração ativa de agentes autônomos e LLMs ao longo de todo o ciclo de engenharia de
                software — sem abrir mão de validação técnica minuciosa, arquitetura limpa e testes
                rigorosos.
              </p>
              <div className="mt-space-md space-y-space-sm">
                {agenticPoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-3 rounded border border-abyss-border/40 bg-abyss-void p-3 transition-all duration-200 hover:translate-x-1 hover:border-mint-neon/40"
                  >
                    <Icon className="mt-0.5 text-[20px] text-mint-neon" name={point.icon} />
                    <div>
                      <h4 className="font-display text-body-md font-semibold text-text-primary">{point.title}</h4>
                      <p className="font-mono text-body-sm text-text-muted">{point.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-space-lg flex items-center justify-between border-t border-abyss-border/40 pt-space-sm font-mono text-body-sm text-mint-neon">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-mint-neon" />
                agentic_pipeline: active
              </span>
              <Icon className="text-[16px]" name="done_all" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
