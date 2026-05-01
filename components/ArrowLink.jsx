import Link from "next/link";

const ArrowLink = ({ href, children, variant = "black", icon }) => {
  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http://") || href.startsWith("https://"));

  const textColorClass =
    variant === "white"
      ? "text-white hover:text-white/80"
      : "text-black hover:text-soket-blue";

  return (
    <Link
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`inline-flex gap-3 font-geist-mono underline items-center text-sm font-medium transition-colors ${textColorClass}`}
    >
      <span className="inline-flex items-center gap-1 min-w-0">
        {icon && <span className="inline-flex shrink-0 items-center">{icon}</span>}
        <span className="truncate">{children}</span>
      </span>
      <svg
        className="shrink-0"
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M1 10.625L10.25 1.375M10.25 1.375H1M10.25 1.375V10.625"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </Link>
  );
};

export default ArrowLink;
