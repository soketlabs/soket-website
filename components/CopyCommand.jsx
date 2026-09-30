import { useState } from "react";

export default function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative inline-flex items-center bg-ink text-white font-geist-mono text-sm border border-white/10 max-w-full">
      <div className="flex items-center gap-3 px-4 py-3 overflow-x-auto">
        <span className="text-emerald-400 select-none shrink-0">$</span>
        <code className="whitespace-nowrap">{command}</code>
      </div>
      <button
        onClick={handleCopy}
        className="shrink-0 px-4 py-3 border-l border-white/10 hover:bg-white/5 transition-colors"
        aria-label={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-emerald-400"
          >
            <path
              d="M3 8.5L6 11.5L13 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white/60 hover:text-white transition-colors"
          >
            <rect
              x="5"
              y="5"
              width="8"
              height="8"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M3 11V3C3 2.44772 3.44772 2 4 2H10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
