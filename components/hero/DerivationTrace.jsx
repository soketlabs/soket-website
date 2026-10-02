import { useState, useEffect, useCallback } from "react";
import { homeContent } from "@/data/content";

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
    className={`inline-flex items-center justify-center w-4 h-4 text-emerald-400 shrink-0 transition-all duration-200 ${
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

  const resetAnimation = useCallback(() => {
    setVisibleSteps(0);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleSteps(totalSteps);
      setIsComplete(true);
      return;
    }

    if (visibleSteps < totalSteps) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }

    if (visibleSteps === totalSteps && !isComplete) {
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visibleSteps, totalSteps, isComplete, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const cycleInterval = setInterval(() => {
      setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
      resetAnimation();
    }, 8000);

    return () => clearInterval(cycleInterval);
  }, [examples.length, resetAnimation, prefersReducedMotion]);

  return (
    <div className="bg-ink text-white p-5 sm:p-6 lg:p-8 font-geist-mono text-xs sm:text-sm relative">
      <div
        className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 bg-emerald-400 shrink-0" aria-hidden="true" />
        <span className="text-xs uppercase tracking-label text-white/60">
          {currentExample.domain}
        </span>
      </div>

      <p className="text-white/90 mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed break-words">
        {currentExample.problem}
      </p>

      <div className="space-y-2.5 mb-5 sm:mb-6">
        {currentExample.steps.map((step, index) => {
          const isVisible = index < visibleSteps;
          const showCheck = isVisible && step.verified;

          return (
            <div
              key={index}
              className={`flex items-start gap-2 sm:gap-3 transition-all duration-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <span className="text-white/40 w-4 shrink-0 text-right">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-white/80 flex-1 min-w-0 break-words">
                {step.text}
              </span>
              <CheckIcon visible={showCheck} />
            </div>
          );
        })}
      </div>

      <div
        className={`pt-4 border-t border-white/20 flex flex-wrap items-center gap-2 transition-opacity duration-300 ${
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

      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <p className="text-[10px] text-white/30">Fig. 1 — Derivation trace</p>
        <div className="flex gap-1.5">
          {examples.map((_, index) => (
            <button
              key={index}
              type="button"
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
      </div>
    </div>
  );
};

export default DerivationTrace;
