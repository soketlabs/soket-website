import Head from "next/head";
import Link from "next/link";
import MagneticBento from "@/components/MagneticBento";
import SectionLabel from "@/components/sections/SectionLabel";
import KolamDivider from "@/components/decorative/KolamDivider";
import {
  RESEARCH_HERO,
  RESEARCH_AREAS,
  RESEARCH_PUBLICATIONS,
  RESEARCH_CTA,
} from "@/data/research-content";

export default function ResearchPage() {
  return (
    <>
      <Head>
        <title>Research | Soket AI Labs</title>
        <meta
          name="description"
          content="Our research spans efficient architectures, data systems, sustainability, and the societal impact of AI."
        />
      </Head>

      <main className="bg-paper text-ink">
        {/* Hero */}
        <section className="section-gap text-center">
          <div className="container-content">
            <p className="font-geist-mono text-xs uppercase tracking-label text-muted mb-4">
              {RESEARCH_HERO.label}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              {RESEARCH_HERO.title}
            </h1>
            <p className="text-17 text-muted max-w-xl mx-auto leading-relaxed">
              {RESEARCH_HERO.description}
            </p>
          </div>
        </section>

        {/* Kolam Divider */}
        <KolamDivider />

        {/* Research Areas */}
        <section className="section-gap border-t border-hairline">
          <div className="container-content">
            <SectionLabel>// RESEARCH AREAS</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-12">
              What we work on
            </h2>
            <MagneticBento className="grid gap-6">
              {RESEARCH_AREAS.map(({ number, title, description, topics }) => (
                <article
                  key={number}
                  className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8 border border-hairline group"
                >
                  <div className="lg:col-span-1">
                    <span className="font-geist-mono text-xs text-soket-blue">
                      {number}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl font-medium mb-2 group-hover:text-soket-blue transition-colors">
                      {title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-sm text-muted leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <span
                          key={topic}
                          className="font-geist-mono text-[10px] uppercase tracking-label px-2 py-1 bg-ink/5 text-muted"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </MagneticBento>
          </div>
        </section>

        {/* Kolam Divider */}
        <KolamDivider />

        {/* Recent Publications */}
        <section className="py-16 lg:py-20 border-t border-hairline">
          <div className="container-content">
            <SectionLabel>// RECENT WORK</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-8">
              Publications & releases
            </h2>
            <MagneticBento className="grid md:grid-cols-3 gap-4">
              {RESEARCH_PUBLICATIONS.map(({ title, year, description, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="border border-hairline p-6 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-medium group-hover:text-soket-blue transition-colors">
                      {title}
                    </h3>
                    <span className="font-geist-mono text-xs text-muted">
                      {year}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{description}</p>
                </Link>
              ))}
            </MagneticBento>
            <div className="mt-8">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label text-ink hover:text-soket-blue transition-colors group"
              >
                All publications
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-white py-16 lg:py-20">
          <div className="container-content">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  {RESEARCH_CTA.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {RESEARCH_CTA.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href={RESEARCH_CTA.primaryAction.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-ink font-geist text-sm hover:bg-soket-blue hover:text-white transition-colors"
                >
                  {RESEARCH_CTA.primaryAction.label}
                </Link>
                <Link
                  href={RESEARCH_CTA.secondaryAction.href}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-geist text-sm hover:border-white transition-colors"
                >
                  {RESEARCH_CTA.secondaryAction.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
