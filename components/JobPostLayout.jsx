import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/JobPost.module.scss";

const ABOUT_SOKET_COPY = `Soket AI builds reliable, multilingual AI systems for real-world impact. We are researchers, engineers, and product builders focused on making frontier models useful, interpretable, and responsible—starting from India’s languages and scaling outward.`;

export default function JobPostLayout({ job, children }) {
  return (
    <>
      <Head>
        <title>{`${job.title} | Soket AI Careers`}</title>
        <meta name="description" content={job.summary} />
      </Head>

      <article className={styles.job_post}>
        <Link href="/careers/jobs" className={styles.back_link}>
          ← Back to jobs
        </Link>

        <header className={styles.hero}>
          <div className={styles.hero_main}>
            <p className={styles.eyebrow}>Open role</p>
            <div className={styles.hero_title_row}>
              <h1 className={styles.title}>{job.title}</h1>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.apply_button}
              >
                Apply →
              </a>
            </div>
            <p className={styles.location}>
              <span className={styles.location_icon} aria-hidden>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="11"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              {job.location}
            </p>
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.main_column}>
            <section className={styles.about_card} aria-labelledby="about-soket-heading">
              <h2 id="about-soket-heading" className={styles.section_title}>
                About Soket AI
              </h2>
              <p className={styles.about_lead}>{ABOUT_SOKET_COPY}</p>
            </section>

            <div className={styles.role_content}>{children}</div>

            <section
              className={styles.apply_card}
              aria-labelledby="how-to-apply-heading"
            >
              <h2 id="how-to-apply-heading" className={styles.section_title}>
                How to apply
              </h2>
              <p className={styles.apply_intro}>
                Use <strong>Apply</strong> to submit your application for this
                role. We read every submission carefully.
              </p>
              <div className={styles.apply_actions}>
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.apply_button_primary}
                >
                  Apply for this role
                </a>
                <Link href="/careers/jobs" className={styles.apply_secondary}>
                  Browse all openings →
                </Link>
              </div>
            </section>
          </div>

          <aside className={styles.sidebar} aria-label="Application">
            <p className={styles.sidebar_label}>This role</p>
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sidebar_apply}
            >
              Apply →
            </a>
            <p className={styles.sidebar_hint}>
              Prefer to review the full list first?{" "}
              <Link href="/careers/jobs">All jobs</Link>
            </p>
          </aside>
        </div>
      </article>
    </>
  );
}
