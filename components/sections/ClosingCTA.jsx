import Link from "next/link";
import { homeContent } from "@/data/content";

const ClosingCTA = () => {
  const { cta } = homeContent;

  return (
    <section className="bg-ink text-white py-20 lg:py-24">
      <div className="container-content">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-white mb-12 tracking-tight text-center">
          {cta.headline}
        </h2>

        {/* 3 CTA Options */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cta.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between p-6 border border-white/20 hover:border-soket-blue transition-colors"
            >
              <div>
                <p className="text-white/60 text-sm mb-1">{item.label}</p>
                <p className="text-white font-medium group-hover:text-soket-blue transition-colors">
                  {item.value}
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-white/40 group-hover:text-soket-blue transition-all group-hover:translate-x-1"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
