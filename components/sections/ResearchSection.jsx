import Link from "next/link";
import { homeContent } from "@/data/content";
import MagneticBento from "@/components/MagneticBento";
import SectionLabel from "./SectionLabel";

const ResearchCard = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="group block p-6 border border-hairline"
    >
      {/* Date */}
      <p className="font-geist-mono text-xs text-muted mb-3">
        {item.date}
      </p>

      {/* Title */}
      <h3 className="text-xl font-medium text-ink mb-3 group-hover:text-soket-blue transition-colors">
        {item.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-muted leading-relaxed">
        {item.summary}
      </p>
    </Link>
  );
};

const ResearchSection = () => {
  const { research } = homeContent;

  return (
    <section className="section-gap bg-paper border-t border-hairline">
      <div className="container-content">
        {/* Section Header */}
        <SectionLabel>{research.label}</SectionLabel>

        <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-ink mb-12 tracking-tight">
          {research.headline}
        </h2>

        {/* 3 Research Cards */}
        <MagneticBento className="grid md:grid-cols-3 gap-4 mb-8">
          {research.items.map((item) => (
            <ResearchCard key={item.slug} item={item} />
          ))}
        </MagneticBento>

        {/* Link */}
        <Link
          href={research.link.href}
          className="inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label text-ink hover:text-soket-blue transition-colors group"
        >
          {research.link.label}
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

export default ResearchSection;
