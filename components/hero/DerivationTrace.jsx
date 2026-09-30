import { useState, useEffect, useCallback } from "react";
import { homeContent } from "@/data/content";

// Custom hook for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

const CheckIcon = ({ visible }) => (
  <span
    className={`inline-flex items-center justify-center w-4 h-4 text-emerald-400 transition-all duration-200 ${
      visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
    }`}
    aria-hidden="true"
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const DerivationTrace = () => {
  const { examples } = homeContent.derivationTrace;
  const prefersReducedMotion = useReducedMotion();

  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentExample = examples[currentExampleIndex];
  const totalSteps = currentExample.steps.length;

  // Reset animation state when example changes
  const resetAnimation = useCallback(() => {
    setVisibleSteps(0);
    setIsComplete(false);
  }, []);

  // Step-by-step reveal animation
  useEffect(() => {
    if (prefersReducedMotion) {
      // Show all steps immediately if reduced motion is preferred
      setVisibleSteps(totalSteps);
      setIsComplete(true);
      return;
    }

    if (visibleSteps < totalSteps) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 400); // 400ms delay between each step
      return () => clearTimeout(timer);
    } else if (visibleSteps === totalSteps && !isComplete) {
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visibleSteps, totalSteps, isComplete, prefersReducedMotion]);

  // Cycle through examples
  useEffect(() => {
    if (prefersReducedMotion) return;

    const cycleInterval = setInterval(() => {
      setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
      resetAnimation();
    }, 8000); // Switch every 8 seconds

    return () => clearInterval(cycleInterval);
  }, [examples.length, resetAnimation, prefersReducedMotion]);

  return (
    <div className="bg-ink text-white p-6 lg:p-8 font-geist-mono text-sm relative overflow-hidden">
      {/* Dot grid decoration */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
        aria-hidden="true"
      />

      {/* Domain tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 bg-emerald-400" aria-hidden="true" />
        <span className="text-xs uppercase tracking-label text-white/60">
          {currentExample.domain}
        </span>
      </div>

      {/* Problem statement */}
      <p className="text-white/90 mb-6 text-sm leading-relaxed">
        {currentExample.problem}
      </p>

      {/* Derivation steps */}
      <div className="space-y-2 mb-6">
        {currentExample.steps.map((step, index) => {
          const isVisible = index < visibleSteps;
          const showCheck = isVisible && step.verified;

          return (
            <div
              key={index}
              className={`flex items-start gap-3 transition-all duration-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <span className="text-white/40 w-4 flex-shrink-0 text-right">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-white/80 flex-1">{step.text}</span>
              <CheckIcon visible={showCheck} />
            </div>
          );
        })}
      </div>

      {/* Summary line */}
      <div
        className={`pt-4 border-t border-white/20 flex items-center gap-2 transition-opacity duration-300 ${
          isComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <CheckIcon visible={isComplete} />
        <span className="text-emerald-400 uppercase tracking-label text-xs font-medium">
          Verified
        </span>
        <span className="text-white/40">·</span>
        <span className="text-white/60 text-xs">
          {currentExample.summary.steps} steps
        </span>
        <span className="text-white/40">·</span>
        <span className="text-white/60 text-xs">
          sources: {currentExample.summary.sources}
        </span>
      </div>

      {/* Example indicator dots */}
      <div className="absolute bottom-4 right-6 flex gap-1.5">
        {examples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentExampleIndex(index);
              resetAnimation();
            }}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentExampleIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Show ${examples[index].domain} example`}
          />
        ))}
      </div>

      {/* Fig caption */}
      <p className="absolute bottom-4 left-6 text-[10px] text-white/30 font-geist-mono">
        Fig. 1 — Derivation trace
      </p>
    </div>
  );
};

export default DerivationTrace;
