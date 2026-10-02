import Link from "next/link";
import { homeContent } from "@/data/content";
import SectionLabel from "./SectionLabel";

const PrinciplesSection = () => {
  const { principles } = homeContent;

  return (
    <section className="section-gap bg-paper border-t border-hairline">
      <div className="container-content">
        {/* Section Header */}
        <SectionLabel>{principles.label}</SectionLabel>

        <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-ink mb-12 tracking-tight max-w-3xl">
          {principles.headline}
        </h2>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-hairline mb-8">
          {principles.items.map((principle, index) => (
            <div
              key={principle.word}
              className="bg-paper p-6 lg:p-4 xl:p-6"
            >
              <p className="font-geist-mono text-lg lg:text-xl xl:text-2xl font-medium text-ink mb-3 tracking-tight">
                {principle.word}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <Link
          href={principles.link.href}
          className="inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label text-ink hover:text-soket-blue transition-colors group"
        >
          {principles.link.label}
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

export default PrinciplesSection;
