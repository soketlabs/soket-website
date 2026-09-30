/**
 * SectionLabel - Renders a monospace section marker like "§02 · TITLE"
 */
const SectionLabel = ({ children, className = "" }) => {
  return (
    <p
      className={`font-geist-mono text-xs uppercase tracking-label text-muted mb-4 ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionLabel;
