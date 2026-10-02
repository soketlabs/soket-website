import Head from "next/head";
import Link from "next/link";
import MagneticBento from "@/components/MagneticBento";
import SectionLabel from "@/components/sections/SectionLabel";
import {
  INFERENCE_HERO,
  INFERENCE_FEATURES,
  SUPPORTED_MODELS,
  DEPLOYMENT_OPTIONS,
  INFERENCE_CTA,
} from "@/data/inference-content";

export default function InferencePage() {
  return (
    <>
      <Head>
        <title>Inference Engine — On-Premise AI | Soket AI Labs</title>
        <meta
          name="description"
          content="Deploy open-source models and EKA models on-premise. Your data stays with you. We bring the infrastructure to you."
        />
      </Head>

      <main className="bg-paper text-ink">
        {/* Hero */}
        <section className="section-gap text-center">
          <div className="container-content">
            <p className="font-geist-mono text-xs uppercase tracking-label text-muted mb-4">
              {INFERENCE_HERO.label}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              {INFERENCE_HERO.title}
            </h1>
            <p className="text-17 text-muted max-w-xl mx-auto mb-10 leading-relaxed">
              {INFERENCE_HERO.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-geist text-sm hover:bg-soket-blue transition-colors"
              >
                Talk to us
              </Link>
              <Link
                href="/project-eka"
                className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-geist text-sm hover:border-soket-blue hover:text-soket-blue transition-colors"
              >
                Learn about EKA models
              </Link>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="py-16 lg:py-20 border-t border-hairline">
          <div className="container-content">
            <div className="grid md:grid-cols-3 gap-px bg-hairline">
              {DEPLOYMENT_OPTIONS.map(({ title, description }) => (
                <div key={title} className="bg-paper p-6 lg:p-8">
                  <h3 className="text-lg font-medium mb-2">{title}</h3>
                  <p className="text-sm text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-gap border-t border-hairline">
          <div className="container-content">
            <SectionLabel>// CAPABILITIES</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-12">
              Enterprise-grade inference
            </h2>
            <MagneticBento className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INFERENCE_FEATURES.map(({ number, title, description }) => (
                <article
                  key={number}
                  className="border border-hairline p-6 group"
                >
                  <span className="font-geist-mono text-xs text-soket-blue mb-4 block">
                    {number}
                  </span>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-soket-blue transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {description}
                  </p>
                </article>
              ))}
            </MagneticBento>
          </div>
        </section>

        {/* Supported Models */}
        <section className="py-16 lg:py-20 bg-ink text-white">
          <div className="container-content">
            <p className="font-geist-mono text-xs uppercase tracking-label text-white/50 mb-4">
              // SUPPORTED MODELS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-12">
              Deploy any model
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {SUPPORTED_MODELS.map(({ category, models }) => (
                <div key={category}>
                  <h3 className="font-geist-mono text-xs uppercase tracking-label text-emerald-400 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {models.map((model) => (
                      <span
                        key={model}
                        className="px-3 py-1.5 border border-white/20 text-sm text-white/80"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-gap border-t border-hairline">
          <div className="container-content">
            <SectionLabel>// HOW IT WORKS</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium tracking-tight mb-12">
              From conversation to deployment
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { num: "01", title: "Discovery", description: "We understand your infrastructure, compliance needs, and model requirements." },
                { num: "02", title: "Architecture", description: "We design the optimal deployment for your hardware and workload." },
                { num: "03", title: "Deployment", description: "We deploy and optimize on your infrastructure — cloud or on-premise." },
                { num: "04", title: "Support", description: "Ongoing support, monitoring, and optimization for production." },
              ].map(({ num, title, description }) => (
                <div key={num} className="border border-hairline p-6">
                  <span className="font-geist-mono text-xs text-soket-blue mb-4 block">
                    {num}
                  </span>
                  <h3 className="text-lg font-medium mb-2">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{description}</p>
                </div>
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
                  {INFERENCE_CTA.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {INFERENCE_CTA.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href={INFERENCE_CTA.primaryAction.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-ink font-geist text-sm hover:bg-soket-blue hover:text-white transition-colors"
                >
                  {INFERENCE_CTA.primaryAction.label}
                </Link>
                <Link
                  href={INFERENCE_CTA.secondaryAction.href}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-geist text-sm hover:border-white transition-colors"
                >
                  {INFERENCE_CTA.secondaryAction.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
