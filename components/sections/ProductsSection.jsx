import Link from "next/link";
import { homeContent } from "@/data/content";
import SectionLabel from "./SectionLabel";

const ProductCard = ({ product, isFirst }) => {
  const isPrimary = product.primary;

  return (
    <div
      className={`relative p-6 lg:p-8 flex flex-col h-full ${
        isPrimary
          ? "bg-ink text-white lg:col-span-5"
          : "bg-paper border border-hairline lg:col-span-3"
      }`}
    >
      {/* Dot grid decoration for primary card */}
      {isPrimary && (
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
          aria-hidden="true"
        />
      )}

      {/* Number and Tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`font-geist-mono text-xs ${
            isPrimary ? "text-white/60" : "text-muted"
          }`}
        >
          {product.number}
        </span>
        {product.tag && (
          <span
            className={`font-geist-mono text-[10px] uppercase tracking-label px-2 py-1 ${
              isPrimary
                ? "bg-soket-blue text-white"
                : "bg-hairline text-muted"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        className={`text-xl lg:text-2xl font-medium mb-1 ${
          isPrimary ? "text-white" : "text-ink"
        }`}
      >
        {product.name}
      </h3>

      {/* Subtitle */}
      {product.subtitle && (
        <p
          className={`font-geist-mono text-xs mb-4 ${
            isPrimary ? "text-white/50" : "text-muted"
          }`}
        >
          {product.subtitle}
        </p>
      )}

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-grow ${
          isPrimary ? "text-white/70" : "text-muted"
        }`}
      >
        {product.description}
      </p>

      {/* Spec Line */}
      <p
        className={`font-geist-mono text-xs uppercase tracking-label mb-6 ${
          isPrimary ? "text-white/90" : "text-muted"
        }`}
      >
        {product.spec}
      </p>

      {/* Link */}
      <Link
        href={product.link.href}
        className={`inline-flex items-center gap-2 font-geist-mono text-xs uppercase tracking-label transition-colors group ${
          isPrimary
            ? "text-white hover:text-soket-blue"
            : "text-ink hover:text-soket-blue"
        }`}
      >
        {product.link.label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform group-hover:translate-x-1"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

const ProductsSection = () => {
  const { products } = homeContent;

  return (
    <section className="section-gap bg-paper border-t border-hairline">
      <div className="container-content">
        {/* Section Header */}
        <SectionLabel>{products.label}</SectionLabel>

        <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-ink mb-4 tracking-tight">
          {products.headline}
        </h2>

        <p className="text-17 text-muted mb-12 max-w-2xl">
          {products.subline}
        </p>

        {/* Products Grid with Connectors */}
        <div className="relative">
          {/* Desktop: Connected cards layout */}
          <div className="hidden lg:grid lg:grid-cols-11 gap-0">
            {/* EKA Card - Primary, spans 5 cols */}
            <div className="lg:col-span-5">
              <ProductCard product={products.items[0]} isFirst={true} />
            </div>

            {/* Connector Arrow */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-4 h-px bg-hairline" />
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  className="text-hairline"
                >
                  <path
                    d="M1 1L6 6L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Loop and Inference Cards - span remaining */}
            <div className="lg:col-span-5 grid gap-px bg-hairline">
              <ProductCard product={products.items[1]} />
              <ProductCard product={products.items[2]} />
            </div>
          </div>

          {/* Mobile: Stacked cards */}
          <div className="lg:hidden space-y-4">
            {products.items.map((product, index) => (
              <ProductCard key={product.number} product={product} isFirst={index === 0} />
            ))}
          </div>
        </div>

        {/* Fig caption */}
        <p className="mt-6 font-geist-mono text-[10px] text-muted">
          Fig. 2 — The Soket stack
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
