import useScrollAnimation from "@/hooks/useScrollAnimation";

/**
 * FadeIn wrapper component for scroll-triggered animations
 * Applies a subtle fade-up effect when element enters viewport
 */
const FadeIn = ({
  children,
  className = "",
  delay = 0,
  duration = 250,
  as: Component = "div",
  ...props
}) => {
  const { ref, isVisible, prefersReducedMotion } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  // If reduced motion is preferred, render without animation
  if (prefersReducedMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
