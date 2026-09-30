import { useEffect, useRef } from "react";
import { LOOP_VIDEO } from "@/data/loop-content";

export default function LoopDemoVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (mediaQuery.matches) {
        video.pause();
        return;
      }
      const playAttempt = video.play();
      if (playAttempt) {
        playAttempt.catch(() => {});
      }
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);
    return () => mediaQuery.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <div className="relative overflow-hidden bg-ink aspect-[16/10] sm:aspect-video pointer-events-none select-none">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={LOOP_VIDEO.poster}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={LOOP_VIDEO.src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-t from-paper/20 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
