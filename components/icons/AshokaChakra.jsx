// Ashoka Chakra - 24 spokes representing progress
export default function AshokaChakra({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Inner circle */}
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      
      {/* 24 spokes */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 12 + 3.5 * Math.cos(angle);
        const y1 = 12 + 3.5 * Math.sin(angle);
        const x2 = 12 + 9.5 * Math.cos(angle);
        const y2 = 12 + 9.5 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.75"
          />
        );
      })}
    </svg>
  );
}
