import Head from "next/head";
import Link from "next/link";
import CopyCommand from "@/components/CopyCommand";
import LoopDemoVideo from "@/components/LoopDemoVideo";
import SectionLabel from "@/components/sections/SectionLabel";
import { LOOP_HERO, LOOP_FEATURES, LOOP_CTA } from "@/data/loop-content";

export default function LoopPage() {
  return (
    <>
      <Head>
        <title>Loop — Agentic Terminal | Soket AI Labs</title>
        <meta
          name="description"
          content="Loop is an open-source agentic terminal. Run tasks, automate workflows, and let agents work in secure sandboxes."
        />
      </Head>

      <main className="bg-paper text-ink">
        {/* Hero */}
        <section className="pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-10 text-center">
          <div className="container-content">
            <p className="font-geist-mono text-xs uppercase tracking-label text-muted mb-4">
              {LOOP_HERO.label}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              {LOOP_HERO.title}
            </h1>
            <p className="text-17 text-muted max-w-xl mx-auto mb-10 leading-relaxed">
              {LOOP_HERO.description}
            </p>

            {/* Install Command */}
            <div className="flex justify-center mb-8 w-full">
              <CopyCommand command={LOOP_HERO.install} />
            </div>

            {/* GitHub Link */}
            <Link
              href={LOOP_HERO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label text-ink hover:text-soket-blue transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </Link>
          </div>
        </section>

        {/* Demo video — autoplaying background, no controls */}
        {/* <section className="pb-8 sm:pb-16 lg:pb-20">
          <div className="container-content">
            <LoopDemoVideo />
          </div>
        </section> */}

        {/* Features */}
        <section className="section-gap border-t border-hairline">
          <div className="container-content">
            <SectionLabel>// FEATURES</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-12">
              Built for agents
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {LOOP_FEATURES.map(({ number, title, description, soon }) => (
                <article
                  key={number}
                  className="border border-hairline p-6 hover:border-soket-blue transition-colors group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-geist-mono text-xs text-soket-blue">
                      {number}
                    </span>
                    {soon && (
                      <span className="font-geist-mono text-[10px] uppercase tracking-label px-2 py-1 bg-soket-blue/10 text-soket-blue">
                        Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-soket-blue transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-white py-16 lg:py-20">
          <div className="container-content">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  {LOOP_CTA.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {LOOP_CTA.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href={LOOP_CTA.primaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-ink font-geist text-sm hover:bg-soket-blue hover:text-white transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {LOOP_CTA.primaryAction.label}
                </Link>
                <Link
                  href={LOOP_CTA.secondaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-geist text-sm hover:border-white transition-colors"
                >
                  {LOOP_CTA.secondaryAction.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
