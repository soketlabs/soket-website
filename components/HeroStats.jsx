import { Fragment } from "react";

import styles from "@/styles/HeroStats.module.scss";

const LANGUAGE_PILLS = ["हिन्दी", "বাংলা", "தமிழ்", "Python"];

const CELLS = [
  {
    id: "languages",
    theme: "gray",
    decoration: "rings",
    pills: LANGUAGE_PILLS,
    values: ["22", "20+", "20+"],
    description: "Indian, Global South, and programming languages",
  },
  {
    id: "research",
    theme: "gray",
    decoration: "rings",
    values: ["Math", "Code", "Reasoning"],
    wordHeadline: true,
    description:
      "Frontier research to have precise, stable, long-horizon agentic workflows.",
  },
  {
    id: "control",
    theme: "gray",
    decoration: "rings",
    title: "Under your control",
    description: "On-prem, private cloud or air-gapped deployment",
  },
];

function DottedHeadline({ values, compact }) {
  return (
    <div
      className={`${styles.langHeadline} ${compact ? styles.words : ""}`.trim()}
    >
      {values.map((value, index) => (
        <Fragment key={value}>
          {index > 0 && (
            <span className={styles.langDot} aria-hidden="true">
              ·
            </span>
          )}
          <span className={styles.langValue}>{value}</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function HeroStats() {
  return (
    <div className={styles.grid}>
      {CELLS.map((cell) => (
        <article
          key={cell.id}
          className={`${styles.card} ${styles[cell.theme]}`}
        >
          {cell.decoration === "rings" && (
            <div className={styles.rings} aria-hidden="true" />
          )}

          <div className={styles.body}>
            {cell.pills && (
              <div className={styles.pills}>
                {cell.pills.map((pill) => (
                  <span key={pill} className={styles.pill}>
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {cell.values ? (
              <DottedHeadline
                values={cell.values}
                compact={cell.wordHeadline}
              />
            ) : (
              <p className={styles.langHeadline}>
                <span className={styles.langValue}>{cell.title}</span>
              </p>
            )}

            <p className={styles.description}>{cell.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
