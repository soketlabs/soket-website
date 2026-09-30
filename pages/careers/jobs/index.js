import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import SocialMeta from "@/components/SocialMeta";
import { jobs } from "@/data/jobs";
import styles from "@/styles/CareersJobsIndex.module.scss";

function groupJobsByTeam(jobList) {
  return jobList.reduce((teams, job) => {
    if (!teams[job.team]) {
      teams[job.team] = [];
    }
    teams[job.team].push(job);
    return teams;
  }, {});
}

export default function CareersJobsIndex() {
  const teams = useMemo(() => groupJobsByTeam(jobs), []);
  const teamNames = useMemo(() => Object.keys(teams), [teams]);

  const [openTeams, setOpenTeams] = useState(() =>
    teamNames.reduce((acc, name) => {
      acc[name] = true; // Open all by default
      return acc;
    }, {}),
  );

  const toggleTeam = useCallback((teamName) => {
    setOpenTeams((prev) => ({
      ...prev,
      [teamName]: !prev[teamName],
    }));
  }, []);

  return (
    <>
      <SocialMeta
        title="Careers at Soket AI"
        description="Join our team building frontier AI from India. Open roles in research, infrastructure, and applied ML."
        path="/careers/jobs"
      />
      <main className={styles.careers_index}>
        <div className={styles.header}>
          <p className={styles.label}>// CAREERS</p>
          <h1 className={styles.title}>Join our team</h1>
          <p className={styles.subtitle}>
            Build frontier AI from India. We're hiring researchers and engineers across data, training, inference, and applied ML.
          </p>
        </div>

        <div className={styles.table_header}>
          <span>Team</span>
          <span>Role</span>
          <span>Location</span>
          <span />
        </div>

        {Object.entries(teams).map(([teamName, teamJobs]) => {
          const isOpen = openTeams[teamName];
          const count = teamJobs.length;

          return (
            <section key={teamName} className={styles.team_section}>
              <button
                type="button"
                className={styles.team_header}
                onClick={() => toggleTeam(teamName)}
                aria-expanded={isOpen}
                aria-controls={`team-roles-${teamName.replace(/\s+/g, "-")}`}
                id={`team-heading-${teamName.replace(/\s+/g, "-")}`}
              >
                <span className={styles.team_title}>{teamName}</span>
                <span className={styles.team_meta}>
                  {count} role{count !== 1 ? "s" : ""}
                  <span className={styles.team_toggle} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </span>
              </button>

              {isOpen && (
                <div
                  className={styles.roles}
                  id={`team-roles-${teamName.replace(/\s+/g, "-")}`}
                  role="region"
                  aria-labelledby={`team-heading-${teamName.replace(/\s+/g, "-")}`}
                >
                  {teamJobs.map((job) => (
                    <div className={styles.role_row} key={job.slug}>
                      <Link
                        href={`/careers/jobs/${job.slug}`}
                        className={styles.role}
                      >
                        {job.title}
                      </Link>
                      <span className={styles.location}>{job.location}</span>
                      <a
                        href={job.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.apply_button}
                      >
                        Apply
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          className={styles.arrow}
                        >
                          <path
                            d="M3 8H13M13 8L9 4M13 8L9 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </>
  );
}
