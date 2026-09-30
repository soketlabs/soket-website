import Link from "next/link";
import { homeContent } from "@/data/content";
import SectionLabel from "./SectionLabel";
import FadeIn from "@/components/FadeIn";

const MissionSection = () => {
  const { mission } = homeContent;

  return (
    <section className="section-gap bg-paper border-t border-hairline">
      <div className="container-content">
        {/* Section Header */}
        <FadeIn>
          <SectionLabel>{mission.label}</SectionLabel>

          <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-ink mb-6 tracking-tight max-w-2xl">
            {mission.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={50}>
          <p className="text-17 text-muted mb-12 max-w-2xl">
            {mission.intro}
          </p>
        </FadeIn>

        {/* MCR Pillars - 3 column grid */}
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-3 gap-px bg-hairline mb-12">
          {mission.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-paper p-6 lg:p-8"
            >
              <span className="font-geist-mono text-xs text-soket-blue mb-4 block">
                {pillar.number}
              </span>
              <h3 className="text-xl lg:text-2xl font-medium text-ink mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
          </div>
        </FadeIn>

        {/* Flow Diagram */}
        <FadeIn delay={150}>
          <div className="bg-paper border border-hairline p-6 lg:p-8 mb-8 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-max">
            {mission.flow.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="font-geist-mono text-xs uppercase tracking-label text-ink whitespace-nowrap">
                  {step}
                </span>
                {index < mission.flow.length - 1 && (
                  <svg
                    width="20"
                    height="8"
                    viewBox="0 0 20 8"
                    fill="none"
                    className="text-hairline flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 4H18M18 4L14 1M18 4L14 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          </div>
        </FadeIn>

        {/* Link */}
        <Link
          href={mission.link.href}
          className="inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label text-ink hover:text-soket-blue transition-colors group"
        >
          {mission.link.label}
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
    </section>
  );
};

export default MissionSection;
