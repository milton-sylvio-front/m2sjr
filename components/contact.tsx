import { profile } from "@/lib/content";
import { ContactForm } from "./contact-form";
import { Icon } from "./icon";

const channels = [
  {
    href: profile.whatsapp,
    icon: "phone_iphone",
    label: "WhatsApp / telefone",
    value: profile.phoneIntl,
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    icon: "alternate_email",
    label: "E-mail profissional",
    value: profile.email,
    external: false,
  },
  {
    href: profile.linkedin,
    icon: "work",
    label: "LinkedIn profile",
    value: profile.linkedinLabel,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section className="w-full scroll-mt-24 border-t border-abyss-border/40 bg-surface-dim py-space-2xl" id="contato">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-gutter">
        <div className="interactive-card relative overflow-hidden rounded-lg border border-abyss-border/60 bg-abyss-base p-space-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-mint-neon/40 lg:p-space-2xl">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-mint-neon/10 blur-3xl" />
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 gap-space-xl lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <div className="mb-space-sm inline-flex items-center gap-2 rounded border border-abyss-border/60 bg-abyss-surface px-3 py-1 font-mono text-label-caps text-mint-neon uppercase">
                  <span className="glow-pulse h-2 w-2 rounded-full bg-mint-neon" />
                  <span>Open for hires & consultancy</span>
                </div>
                <h2 className="font-display text-headline-md font-extrabold tracking-tight text-text-primary lg:text-headline-lg">
                  Vamos construir o próximo projeto de sucesso juntos?
                </h2>
                <p className="mt-space-md max-w-lg font-mono text-body-md leading-relaxed text-text-secondary">
                  Seja para acelerar uma squad de frontend, orquestrar uma migração complexa, implementar
                  Design System multi-marca ou liderar engenharia com ferramentas de ponta como Cursor e
                  Claude Code, estou à disposição.
                </p>
                <div className="mt-space-lg space-y-space-sm">
                  {channels.map((channel) => (
                    <a
                      key={channel.label}
                      className="group flex items-center gap-3 rounded border border-abyss-border/40 bg-abyss-void p-3 transition-all hover:-translate-y-0.5 hover:border-mint-neon/50 hover:bg-abyss-surface active:scale-95"
                      href={channel.href}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      target={channel.external ? "_blank" : undefined}
                    >
                      <Icon className="text-[22px] text-mint-neon transition-transform group-hover:scale-110" name={channel.icon} />
                      <div>
                        <span className="block font-mono text-[10px] tracking-[0.08em] text-text-muted uppercase">
                          {channel.label}
                        </span>
                        <span className="font-mono text-body-md font-semibold text-text-primary transition-colors group-hover:text-mint-neon">
                          {channel.value}
                        </span>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-center gap-3 rounded border border-abyss-border/40 bg-abyss-void p-3">
                    <Icon className="text-[22px] text-mint-neon" name="map" />
                    <div>
                      <span className="block font-mono text-[10px] tracking-[0.08em] text-text-muted uppercase">
                        Base geográfica & disponibilidade
                      </span>
                      <span className="font-mono text-body-md text-text-primary">{profile.locationLong}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm font-mono text-body-sm text-text-muted">
                UNIP // Bacharelado em Comunicação para Web (2007–2009)
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-abyss-border/60 bg-abyss-void p-space-md lg:col-span-6 lg:p-space-lg">
              <div>
                <div className="mb-space-md flex items-center justify-between border-b border-abyss-border/40 pb-space-sm">
                  <span className="flex items-center gap-1.5 font-mono text-body-sm text-mint-neon">
                    <Icon className="animate-pulse text-[15px]" name="send" />
                    TERMINAL // ENVIAR MENSAGEM RÁPIDA
                  </span>
                  <span className="font-mono text-label-caps text-text-muted uppercase">UTF-8 // Encrypted</span>
                </div>
                <ContactForm />
              </div>
              <div className="mt-space-md flex items-center justify-between border-t border-abyss-border/40 pt-space-sm font-mono text-body-sm text-text-muted">
                <span>Tempo médio de resposta: &lt; 2h</span>
                <a className="text-mint-neon transition-colors hover:text-white hover:underline" href={`mailto:${profile.email}`}>
                  Prefere e-mail direto?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
