import Link from "next/link";
import styles from "@/styles/JobPost.module.scss";

export default function JobPostLayout({ job, children }) {
  return (
    <>
      <article className={styles.job_post}>
        <Link href="/careers/jobs" className={styles.back_link}>
          ← Back to jobs
        </Link>

        <header className={styles.hero}>
          <div className={styles.hero_main}>
            <p className={styles.eyebrow}>{job.team}</p>
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
            {/* <section
              className={styles.about_card}
              aria-labelledby="about-soket-heading"
            > */}

            <aside className={styles.apply_encouragement} role="note">
              <span className={styles.apply_encouragement_icon} aria-hidden>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8v5M12 16h.01"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p className={styles.apply_encouragement_text}>
                We highly encourage you to apply even if you do not match all
                the criteria mentioned in this job description. You can also
                apply for a different role that you think you are a good fit
                for.
              </p>
            </aside>

            <h1 id="about-soket-heading" className={styles.section_title}>
              About Soket AI
            </h1>
            <p className={styles.about_lead}>
              Soket is an AI research firm headquartered in Bengaluru with a
              mission to build efficient and generalized intelligence for
              humanity. We are focused on advancing frontier AI research through
              the development of large-scale foundation models in math, code and
              reasoning that are open, energy-efficient, multilingual, and
              responsible by design. Funded and supported by the{" "}
              <Link
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227612&reg=3&lang=2"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                IndiaAI Mission
              </Link>
              , Government of India. Our work places a strong emphasis on India
              and the Global South, where access to high-quality AI systems
              remains limited despite immense linguistic and cultural diversity.
            </p>
            {/* </section> */}

            <br />

            <p className={styles.about_lead}>
              At Soket, we believe the future of AI should be accessible,
              scalable, and aligned with real-world societal needs. Our teams
              work across large language models, multimodal systems, speech
              technologies, reasoning systems, and large-scale AI
              infrastructure, with a strong focus on open research and practical
              deployment. We are deeply passionate about pushing the boundaries
              of AI research while building systems that are useful,
              trustworthy, and globally impactful.
            </p>
            <br />

            {job.salary && (
              <>
                <h2 className={styles.section_title}>Compensation</h2>
                <p className={styles.compensation_amount}>
                  Rs {job.salary.min.toLocaleString("en-IN")} – Rs{" "}
                  {job.salary.max.toLocaleString("en-IN")}{" "}
                  {job.equity !== undefined && (
                    <span className={styles.compensation_equity}>
                      {" "}
                       (Includes Equity Benefits)
                      {/* {job.equity.min / 1e5} to{" "} */}
                      {/* {job.equity.max / 1e5} lakh equity benefits] */}
                      <br/><small>Compensation will be commensurate with industry standards and will be determined based on the candidate's current compensation, relevant experience, skills, and overall qualifications.</small>
                    </span>
                    
                  )}
                </p>
              </>
            )}

            <br />

            <div className={styles.role_content}>{children}</div>

            <br />

            <h1 id="about-soket-heading" className={styles.section_title}>
              Why work with Soket?
            </h1>
            <p className={styles.about_lead}>
              At Soket, you will get the chance to work on problems that only a
              handful of teams in the world are solving today - building
              frontier foundation models at scale. You will see first-hand how
              intelligence is baked into large models and work across the entire
              stack that powers modern AI systems. You will work with
              supercomputing-scale GPU clusters and tackle challenging problems
              in petabyte scale data aggregation and processing, distributed
              training, model architectures, infrastructure, inference
              optimization, and large-scale AI deployment. <br />
              <br />
              One day you might be debugging CUDA kernels or NCCL issues,
              another day optimizing throughput for multi-GPU training runs,
              building new infrastructure tooling, or experimenting with ideas
              that make training faster and more efficient. We are a deeply
              research-driven and engineering-focused team that loves nerding
              out about systems, scaling laws, training stacks, and AI research.
              If you enjoy going deep into technical problems and learning from
              highly talented researchers and engineers, you will feel right at
              home here. Most importantly, we are building efficient, open, and
              accessible AI systems for India, the Global South, and ultimately
              for humanity as a whole.
              <br />
              <br />
              If this sounds exciting to you, come build the future with us.
            </p>

            <section
              className={styles.apply_card}
              aria-labelledby="how-to-apply-heading"
            >
              <h2 id="how-to-apply-heading" className={styles.section_title}>
                Apply Now!
              </h2>
              <p className={styles.apply_intro}>
                Soket AI Labs is a research-first AI company headquartered in
                Bengaluru. We are an equal opportunity employer and strongly
                encourage applications from people of all genders, backgrounds,
                and ethnicities. We offer competitive compensation, equity
                participation opportunities, flexible work arrangements across
                office and remote settings, comprehensive leave policies
                including parental and wellness leaves, and regular team
                offsites designed to foster collaboration and innovation.
                <br />
                <br />
                As an AI-native organization, we use AI systems as part of our
                candidate assessment and interview processes. Please make sure
                your resume aligns with the job description. More details about
                how candidate data is processed and used will be available on
                the application page.
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

          {/* <aside className={styles.sidebar} aria-label="Application">
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
          </aside> */}
        </div>
      </article>
    </>
  );
}
