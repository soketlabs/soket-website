import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { homeContent } from "@/data/content";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hiringDismissed, setHiringDismissed] = useState(true);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  // `previous` is the message sliding out; null before the first rotation
  const [bannerSlide, setBannerSlide] = useState({ active: 0, previous: null });
  const [bannerPaused, setBannerPaused] = useState(false);
  const headerRef = useRef(null);

  const { nav } = homeContent;
  const banners = nav.banners.filter(
    (banner) => !(banner.dismissible && hiringDismissed),
  );
  const bannerCount = banners.length;
  const activeBanner = banners[bannerSlide.active];
  const activeDuration = activeBanner?.duration;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label, event) => {
    event?.stopPropagation();
    setOpenDropdown((current) => (current === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem("hiring-banner-dismissed");
    setHiringDismissed(!!dismissed);
    setBannerLoaded(true);
  }, []);

  // Move to the next banner message after the current one's duration;
  // hold while the bar is hovered or focused
  useEffect(() => {
    if (bannerPaused || bannerCount < 2 || !activeDuration) return;

    const timer = setTimeout(() => {
      setBannerSlide(({ active }) => ({
        active: (active + 1) % bannerCount,
        previous: active,
      }));
    }, activeDuration * 1000);
    return () => clearTimeout(timer);
  }, [bannerSlide.active, bannerPaused, bannerCount, activeDuration]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => {
      const mobileMenu = el.querySelector("[data-mobile-menu]");
      const menuHeight = mobileMenu?.offsetHeight ?? 0;
      setHeaderHeight(el.offsetHeight - menuHeight);
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [bannerLoaded, hiringDismissed]);

  // Hides the hiring message only; the remaining messages keep showing
  const dismissBanner = () => {
    setHiringDismissed(true);
    setBannerSlide({ active: 0, previous: null });
    localStorage.setItem("hiring-banner-dismissed", "true");
  };

  return (
    <>
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {bannerLoaded && bannerCount > 0 && (
        <div
          className="bg-ink text-white py-2.5 px-4 relative overflow-hidden"
          onMouseEnter={() => setBannerPaused(true)}
          onMouseLeave={() => setBannerPaused(false)}
          onFocus={(event) => {
            // Pause for keyboard focus only: after a mouse click the link keeps
            // focus, which would otherwise stop the rotation indefinitely
            try {
              if (event.target.matches(":focus-visible")) setBannerPaused(true);
            } catch {
              // Older browsers without :focus-visible support
            }
          }}
          onBlur={() => setBannerPaused(false)}
        >
          {/* All messages share one grid cell, so the bar keeps the height of the tallest */}
          <div className="grid">
            {banners.map((banner, index) => {
              const isActive = index === bannerSlide.active;
              const isLeaving = index === bannerSlide.previous;
              const isExternal = banner.href.startsWith("http");

              let slideClass = "invisible";
              if (isActive) {
                slideClass =
                  bannerSlide.previous === null
                    ? ""
                    : "animate-banner-in motion-reduce:animate-none";
              } else if (isLeaving) {
                slideClass = "animate-banner-out motion-reduce:invisible";
              }

              return (
                <div
                  key={banner.href}
                  className={`col-start-1 row-start-1 self-center container-content flex items-start sm:items-center justify-center gap-2 pr-8 ${slideClass}`}
                  aria-hidden={!isActive}
                >
                  <span
                    className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0 mt-1.5 sm:mt-0"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                    <span className="font-geist text-white/90 text-sm leading-snug">
                      {banner.text}
                    </span>
                    <Link
                      href={banner.href}
                      tabIndex={isActive ? undefined : -1}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="font-geist-mono text-xs uppercase tracking-label text-white font-medium hover:text-soket-blue transition-colors underline underline-offset-2 whitespace-nowrap"
                    >
                      {banner.cta} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {activeBanner?.dismissible && (
            <button
              onClick={dismissBanner}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-2 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}

      <header className="bg-paper/70 backdrop-blur-md border-b border-hairline">
        <div className="container-content">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex-shrink-0 flex items-center gap-3"
            >
              <Image
                priority
                src="/images/Soket-Logo.svg"
                alt="Soket AI"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-paper border border-hairline rounded-full px-2 py-1">
                {nav.links.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="relative">
                      <button
                        type="button"
                        onClick={(event) => toggleDropdown(link.label, event)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-ink hover:bg-hairline/50 transition-colors font-geist text-sm"
                        aria-expanded={openDropdown === link.label}
                      >
                        {link.label}
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          className={`transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 bg-paper border border-hairline min-w-[180px] py-2 rounded-lg shadow-lg">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-ink hover:text-soket-blue hover:bg-hairline/50 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="px-4 py-2 rounded-full text-ink hover:bg-hairline/50 transition-colors font-geist text-sm"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={nav.console.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-ink text-white hover:bg-soket-blue transition-colors font-geist text-sm rounded-full"
              >
                {nav.console.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8L8 2M3.5 2H8V6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                href={nav.cta.href}
                className="inline-flex items-center justify-center px-5 py-2.5 border border-ink text-ink hover:border-soket-blue hover:text-soket-blue transition-colors font-geist text-sm rounded-full"
              >
                {nav.cta.label}
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-ink"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            data-mobile-menu
            className="lg:hidden bg-paper/95 backdrop-blur-md border-t border-hairline max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="container-content py-4 space-y-1">
              {nav.links.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={(event) => toggleDropdown(link.label, event)}
                      className="flex items-center justify-between w-full py-3 text-ink font-geist"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className={`transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-1 border-l border-hairline ml-2 mb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 text-muted hover:text-soket-blue transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block py-3 text-ink hover:text-soket-blue transition-colors font-geist"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-hairline mt-4 space-y-3">
                <a
                  href={nav.console.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full px-5 py-3 bg-ink text-white hover:bg-soket-blue transition-colors font-geist"
                  onClick={closeMobileMenu}
                >
                  {nav.console.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8L8 2M3.5 2H8V6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link
                  href={nav.cta.href}
                  className="inline-flex items-center justify-center w-full px-5 py-3 border border-ink text-ink hover:border-soket-blue hover:text-soket-blue transition-colors font-geist"
                  onClick={closeMobileMenu}
                >
                  {nav.cta.label}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
    <div aria-hidden="true" style={{ height: headerHeight }} />
    </>
  );
}
