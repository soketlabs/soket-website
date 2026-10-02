// Kolam-inspired geometric divider
// Based on traditional South Indian floor art patterns
export default function KolamDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center py-4 sm:py-8 ${className}`}>
      {/* Mobile: Simplified version */}
      <svg
        width="80"
        height="20"
        viewBox="0 0 80 20"
        fill="none"
        className="text-hairline sm:hidden"
        aria-hidden="true"
      >
        {/* Central diamond */}
        <path
          d="M40 4L46 10L40 16L34 10Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        {/* Left line */}
        <line x1="0" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" />
        {/* Right line */}
        <line x1="50" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Desktop: Full version */}
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        className="text-hairline hidden sm:block"
        aria-hidden="true"
      >
        {/* Central diamond */}
        <path
          d="M60 4L68 12L60 20L52 12Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Inner diamond */}
        <path
          d="M60 8L64 12L60 16L56 12Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        
        {/* Left pattern */}
        <path
          d="M44 12L48 8M44 12L48 16M44 12L36 12"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="36" cy="12" r="2" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <circle cx="28" cy="12" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
        
        {/* Extended left line */}
        <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Right pattern (mirrored) */}
        <path
          d="M76 12L72 8M76 12L72 16M76 12L84 12"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="84" cy="12" r="2" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <circle cx="92" cy="12" r="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
        
        {/* Extended right line */}
        <line x1="96" y1="12" x2="120" y2="12" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Corner dots */}
        <circle cx="60" cy="4" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="60" cy="20" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}
