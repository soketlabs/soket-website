import Link from "next/link";
import { homeContent } from "@/data/content";
import DerivationTrace from "./DerivationTrace";

const HeroSection = () => {
  const { hero } = homeContent;

  return (
    <section className="section-gap bg-paper">
      <div className="container-content">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <p className="font-geist-mono text-xs uppercase tracking-label text-muted mb-6">
              {hero.eyebrow}
            </p>

            {/* H1 - The only h1 on the page */}
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium text-ink mb-6 tracking-tight">
              {hero.headline}
            </h1>

            {/* Subline */}
            <p className="text-17 text-muted mb-8 max-w-lg">
              {hero.subline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 lg:mb-0">
              <Link
                href={hero.cta1.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-white font-geist text-sm hover:bg-soket-dark transition-colors"
              >
                {hero.cta1.label}
              </Link>
              <Link
                href={hero.cta2.href}
                className="inline-flex items-center justify-center px-6 py-3 border border-ink text-ink font-geist text-sm hover:border-soket-blue hover:text-soket-blue transition-colors"
              >
                {hero.cta2.label}
              </Link>
            </div>
          </div>

          {/* Right Content - Derivation Trace Card */}
          <div className="lg:col-span-6 xl:col-span-7">
            <DerivationTrace />
          </div>
        </div>

        {/* Proof Strip */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-hairline">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
            {hero.proofStrip.map((item, index) => (
              <div
                key={index}
                className={`${
                  index > 0 ? "lg:border-l lg:border-hairline lg:pl-6" : ""
                } ${index === 2 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                {item.label && (
                  <p className="font-geist-mono text-xs uppercase tracking-label text-muted mb-1">
                    {item.label}
                  </p>
                )}
                <p className="font-geist-mono text-sm text-ink font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
