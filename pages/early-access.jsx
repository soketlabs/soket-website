import EarlyAccessForm from "@/components/EarlyAccessForm";
import SectionLabel from "@/components/sections/SectionLabel";
import SocialMeta from "@/components/SocialMeta";
import {
  EARLY_ACCESS_HERO,
  EARLY_ACCESS_STEPS,
} from "@/data/early-access-content";

export default function EarlyAccess() {
  return (
    <>
      <SocialMeta
        title="Early access to EKA-1 | Soket AI"
        description={EARLY_ACCESS_HERO.description}
        path="/early-access"
      />
      <main className="bg-paper text-ink">
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-24">
          {/* The form follows the intro on phones and spans both rows on desktop */}
          <div className="container-content grid lg:grid-cols-12 gap-x-16 gap-y-8 items-start">
            <div className="lg:col-span-7">
              <SectionLabel>{EARLY_ACCESS_HERO.label}</SectionLabel>
              <h1 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl font-medium tracking-tight mb-5">
                {EARLY_ACCESS_HERO.title}
              </h1>
              <p className="text-17 text-muted max-w-xl leading-relaxed">
                {EARLY_ACCESS_HERO.description}
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2">
              <EarlyAccessForm />
            </div>

            <div className="lg:col-span-7 bg-ink text-white font-geist-mono p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="w-2 h-2 bg-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <h2 className="text-xs uppercase tracking-label text-white/60">
                  {EARLY_ACCESS_HERO.stepsLabel}
                </h2>
              </div>
              <ol className="space-y-5">
                {EARLY_ACCESS_STEPS.map(({ number, title, description }) => (
                  <li key={number} className="flex gap-3 text-sm">
                    <span className="text-white/40 shrink-0">{number}</span>
                    <div>
                      <p className="text-white/90 mb-1">{title}</p>
                      <p className="text-white/60 text-xs leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
