import Link from "next/link";

import TextBox from "@/components/TextBox";
import HeroImages from "@/components/HeroImages";
import Button from "@/components/Button";
import AboutSoket from "@/components/AboutSoket";
import AIForHumanity from "@/components/AIForHumanity";
import JoinUs from "@/components/JoinUs";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.home_section}>
        <section className={styles.hero_section}>
          <Link
            href="/careers/jobs"
            className={`${styles.talent_banner} group mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-3 text-sm transition-all duration-300 md:max-w-3xl md:text-base`}
          >
            <span className={styles.talent_banner_dot} aria-hidden="true" />
            <span className="font-geist text-[#1e1e1e]">
              We&apos;re on the lookout for exceptional talent to build the
              frontiers of AI in India with us.
            </span>
            <span className="font-geist-mono text-sm font-medium text-[#1B41FF] transition-colors group-hover:underline underline-offset-4 md:text-base">
              Head to careers →
            </span>
          </Link>
          <h1 className="lg:text-[72px] tracking-tightest mb-4 leading-tight tracking-tight font-space-grotesk font-medium">
            Building AGI with a Conscience
          </h1>
          <p className="px-4 lg:px-10 lg:w-1/2 mx-auto text-center mb-10 text-lg">
            We believe the future of intelligence must be efficient, ethical,
            and equitable — from code to deployment.
          </p>
          <div className="flex justify-center mb-12 lg:mb-20">
            <Button href="/project-eka" variant="black">
              PROJECT EKA
            </Button>
          </div>
          <div className="my-12">
            <HeroImages />
          </div>
        </section>
        <AboutSoket />
        <AIForHumanity />
        <JoinUs />
      </section>
    </>
  );
}
