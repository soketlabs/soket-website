import styles from "@/styles/HeroStats.module.scss";

const LANGUAGE_PILLS = ["हिन्दी", "বাংলা", "தமிழ்", "Python"];

const CELLS = [
  {
    theme: "dark",
    decoration: "dots",
    title: "IndiaAI Mission",
    description: "Selected foundation-model lab",
    badge: "Selected lab",
  },
  {
    theme: "gray",
    decoration: "rings",
    title: "1536",
    unit: "H100s",
    description: "Sovereign compute allocation",
  },
  {
    theme: "blue",
    decoration: "pixels",
    pixelColor: "rgba(255, 255, 255, 0.28)",
    title: "25T",
    description: "Tokens curated for pre-training",
  },
  {
    theme: "blueMono",
    decoration: "pixels",
    pixelColor: "#1B41FF",
    title: "24B",
    description: "Upcoming model for coding and reasoning",
  },
  {
    theme: "dark",
    decoration: "dots",
    title: "120B+",
    description: "Sparse MoE architecture in training",
  },
  {
    theme: "gray",
    decoration: "rings",
    title: "22 · 20+ · 20+",
    description: "Indian, Global South and programming languages",
    languages: true,
  },
];

function PixelCluster({ color }) {
  const squares = [
    { x: 72, y: 72, s: 48 },
    { x: 40, y: 72, s: 28 },
    { x: 72, y: 40, s: 28 },
    { x: 16, y: 84, s: 18 },
    { x: 84, y: 16, s: 18 },
    { x: 48, y: 48, s: 16 },
    { x: 4, y: 96, s: 12 },
    { x: 96, y: 4, s: 12 },
    { x: 28, y: 58, s: 10 },
    { x: 58, y: 28, s: 10 },
  ];

  return (
    <svg
      className={styles.pixels}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      {squares.map((square, i) => (
        <rect
          key={i}
          x={square.x}
          y={square.y}
          width={square.s}
          height={square.s}
          fill={color}
        />
      ))}
    </svg>
  );
}

function LanguageHeadline() {
  return (
    <div className={styles.langHeadline}>
      <span className={styles.langValue}>22</span>
      <span className={styles.langDot} aria-hidden="true">
        ·
      </span>
      <span className={styles.langValue}>20+</span>
      <span className={styles.langDot} aria-hidden="true">
        ·
      </span>
      <span className={styles.langValue}>20+</span>
    </div>
  );
}

export default function HeroStats() {
  return (
    <div className={styles.grid}>
      {CELLS.map((cell) => (
        <article
          key={cell.title}
          className={`${styles.card} ${styles[cell.theme]}`}
        >
          {cell.decoration === "rings" && (
            <div className={styles.rings} aria-hidden="true" />
          )}
          {cell.decoration === "dots" && (
            <div className={styles.dots} aria-hidden="true" />
          )}
          {cell.decoration === "pixels" && (
            <PixelCluster color={cell.pixelColor} />
          )}

          <div className={styles.body}>
            {cell.badge && (
              <div className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                {cell.badge}
              </div>
            )}

            {cell.languages && (
              <div className={styles.pills}>
                {LANGUAGE_PILLS.map((pill) => (
                  <span key={pill} className={styles.pill}>
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {cell.languages ? (
              <LanguageHeadline />
            ) : (
              <>
                <p className={styles.headline}>{cell.title}</p>
                {cell.unit && <span className={styles.unit}>{cell.unit}</span>}
              </>
            )}

            <p className={styles.description}>{cell.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
