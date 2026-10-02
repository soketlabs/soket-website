import Link from "next/link";
import { homeContent } from "@/data/content";
import SectionLabel from "./SectionLabel";

// Simple line icons for each domain
const DomainIcon = ({ name }) => {
  const icons = {
    Cybersecurity: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7V12C3 17.5 7.5 22.5 12 22.5C16.5 22.5 21 17.5 21 12V7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Defence: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7V12C3 17.5 7.5 22.5 12 22.5C16.5 22.5 21 17.5 21 12V7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    Finance: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3V21H21" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14L11 10L15 14L21 8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Banking: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21H21" strokeLinecap="round"/>
        <path d="M3 10H21" strokeLinecap="round"/>
        <path d="M5 6L12 3L19 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10V21" strokeLinecap="round"/>
        <path d="M19 10V21" strokeLinecap="round"/>
        <path d="M9 10V21" strokeLinecap="round"/>
        <path d="M15 10V21" strokeLinecap="round"/>
      </svg>
    ),
    Legal: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3V21" strokeLinecap="round"/>
        <path d="M3 7L12 3L21 7" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="10" r="2" />
        <circle cx="18" cy="10" r="2" />
        <path d="M6 12V16H18V12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Agriculture: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V8" strokeLinecap="round"/>
        <path d="M12 8C12 8 8 6 8 3C8 3 12 5 12 8Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8C12 8 16 6 16 3C16 3 12 5 12 8Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C12 14 7 12 5 8" strokeLinecap="round"/>
        <path d="M12 14C12 14 17 12 19 8" strokeLinecap="round"/>
        <path d="M5 22H19" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <span className="text-ink" aria-hidden="true">
      {icons[name] || icons.Cybersecurity}
    </span>
  );
};

const DomainCard = ({ domain }) => {
  return (
    <Link
      href={domain.href}
      className="group block p-6 border border-hairline bg-paper hover:border-soket-blue transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 border border-hairline group-hover:border-soket-blue transition-colors">
          <DomainIcon name={domain.name} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-ink mb-2 group-hover:text-soket-blue transition-colors">
            {domain.name}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {domain.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const DomainsSection = () => {
  const { domains } = homeContent;

  return (
    <section className="section-gap bg-paper border-t border-hairline">
      <div className="container-content">
        {/* Section Header */}
        <SectionLabel>{domains.label}</SectionLabel>

        <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-ink mb-4 tracking-tight">
          {domains.headline}
        </h2>

        <p className="text-17 text-muted mb-12 max-w-2xl">
          {domains.subline}
        </p>

        {/* 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.items.map((domain) => (
            <DomainCard key={domain.name} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
