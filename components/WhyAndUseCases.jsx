import hero from "@/styles/HeroStats.module.scss";
import styles from "@/styles/WhyAndUseCases.module.scss";

const USE_CASES = [
  "Cybersecurity",
  "Banking & finance",
  "Defence intelligence support",
  "Public systems",
];

const WhyAndUseCases = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <article className={`${hero.card} ${hero.dark} ${styles.card}`}>
          <div className={hero.dots} aria-hidden="true" />
          <div className={hero.body}>
            <p className={`${hero.headline} ${styles.headline}`}>
              Why math, code, and reasoning
            </p>
            <p className={`${hero.description} ${styles.description}`}>
              They are the substrate for banking, cybersecurity, defence
              workflows, and software.
            </p>
            <p className={styles.pull}>
              Language coverage without this is a translation layer.
            </p>
          </div>
        </article>

        <article className={`${hero.card} ${hero.gray} ${styles.card}`}>
          <div className={hero.rings} aria-hidden="true" />
          <div className={hero.body}>
            <div className={styles.useCases}>
              {USE_CASES.map((useCase) => (
                <span key={useCase} className={styles.pill}>
                  {useCase}
                </span>
              ))}
            </div>
            <p className={`${hero.headline} ${styles.headline}`}>Use Cases</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhyAndUseCases;
