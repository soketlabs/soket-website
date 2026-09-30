import HeroSection from "@/components/hero/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ProductsSection from "@/components/sections/ProductsSection";
import DomainsSection from "@/components/sections/DomainsSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <main className="bg-paper">
      {/* §01 Hero */}
      <HeroSection />

      {/* §02 Mission: MCR Agents */}
      <MissionSection />

      {/* §03 Products */}
      <ProductsSection />

      {/* §04 Domains */}
      <DomainsSection />

      {/* §05 Principles */}
      <PrinciplesSection />

      {/* §06 Research */}
      <ResearchSection />

      {/* §07 Closing CTA */}
      <ClosingCTA />
    </main>
  );
}
