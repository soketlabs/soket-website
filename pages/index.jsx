import Link from "next/link";

import TextBox from "@/components/TextBox";
import HeroStats from "@/components/HeroStats";
import Button from "@/components/Button";
import OurPillars from "@/components/OurPillars";
import AboutSoket from "@/components/AboutSoket";
import WhyAndUseCases from "@/components/WhyAndUseCases";
import JoinTeamBanner from "@/components/JoinTeamBanner";
import JoinUs from "@/components/JoinUs";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.home_section}>
        <section className={styles.hero_section}>
          <Link
            href="/careers/jobs"
            className={`${styles.talent_banner} group mx-auto mb-8 inline-flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-300 md:gap-4 md:px-5 md:py-3 md:text-base`}
          >
            <span className={styles.talent_banner_dot} aria-hidden="true" />
            <span className={`${styles.talent_banner_text} font-geist`}>
              We&apos;re hiring exceptional talent.
            </span>
            <span className={`${styles.talent_banner_cta} font-geist-mono`}>
              Head to careers →
            </span>
          </Link>
          <h1 className="lg:text-[72px] tracking-tightest mb-4 leading-tight tracking-tight font-space-grotesk font-medium">
          Building at the frontiers of AI
          </h1>
          <p className="px-4 lg:px-10 lg:w-1/2 mx-auto text-center mb-10 text-lg">
          Foundation models and stack for math, code, and reasoning that can run under your control.

          </p>
          <div className="mb-12 flex flex-wrap justify-center gap-4 lg:mb-16">
            <Button href="/project-eka" variant="black">
              EXPLORE PROJECT EKA
            </Button>
            <Button href="/contact" variant="black">
              TALK TO US
            </Button>
          </div>
          <div className="my-8 lg:my-12">
            <HeroStats />
          </div>
        </section>
        <OurPillars />
        <AboutSoket />
        <WhyAndUseCases />
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <JoinTeamBanner />
          </div>
        </section>
        <JoinUs />
      </section>
    </>
  );
}
