import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles/Header.module.scss";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const blogDropdownRef = useRef(null);
  const blogLinks = [
    { href: "/blogs", label: "all posts" },
    { href: "/blogs/coshe_eval", label: "coshe-eval" },
    { href: "/blogs/dhrith", label: "dhrith-asr" },
    { href: "/blogs/pragna_1b", label: "pragna-1b" },
    { href: "/blogs/bhasha_sft", label: "bhasha sft" },
    { href: "/blogs/bhasha_wiki", label: "bhasha wiki" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsBlogDropdownOpen(false);
  };

  const toggleBlogDropdown = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };

  const closeBlogDropdown = () => {
    setIsBlogDropdownOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(`.${styles.nav}`);
      const button = document.querySelector(`.${styles.mobile_menu_button}`);

      if (
        nav &&
        button &&
        !nav.contains(event.target) &&
        !button.contains(event.target)
      ) {
        closeMobileMenu();
      }

      // Close blog dropdown when clicking outside
      if (
        blogDropdownRef.current &&
        !blogDropdownRef.current.contains(event.target)
      ) {
        closeBlogDropdown();
      }
    };

    if (isMobileMenuOpen || isBlogDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, isBlogDropdownOpen]);

  return (
    <header className={styles.header_container}>
      <div className={styles.header_inner}>
        <div className={styles.primary_logo_container}>
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              priority
              style={{
                height: "70px",
                width: "150px",
              }}
              src="/images/Soket-Logo.svg"
              alt="Soket Labs Logo"
              width={150}
              height={70}
            />
          </Link>
        </div>

        <button
          className={styles.mobile_menu_button}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.nav_open : ""}`}
        >
          <ul>
            {/* <Link href="/company">
                            <li>company</li>
                        </Link> */}
            <li className={styles.dropdown_container} ref={blogDropdownRef}>
              <button
                className={styles.dropdown_trigger}
                onClick={toggleBlogDropdown}
                aria-expanded={isBlogDropdownOpen}
                aria-haspopup="true"
              >
                blogs
                <span className={styles.dropdown_arrow}>▼</span>
              </button>
              <ul
                className={`${styles.dropdown_menu} ${
                  isBlogDropdownOpen ? styles.dropdown_open : ""
                }`}
              >
                {blogLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => {
                        closeMobileMenu();
                        closeBlogDropdown();
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <Link href="/project-eka" onClick={closeMobileMenu}>
              <li>project eka</li>
            </Link>
            <Link href="/careers/jobs" onClick={closeMobileMenu}>
              <li>careers</li>
            </Link>
            {/* <Link href="/llm">
                            <li>llm</li>
                        </Link>
                        <Link href="/ethics">
                            <li>ethics</li>
                        </Link>
                        <Link href="/research">
                            <li>research</li>
                        </Link>
                        <Link href="/team">
                            <li>team</li>
                        </Link>
                        <Link href="/contact">
                            <li>contact</li>
                        </Link> */}
          </ul>
          {/* <div className={styles.social_container}>
                        <Link href="https://github.com/soketlabs" target="_blank">
                            <Image
                                priority
                                src={GithubLogo}
                                alt="Github Logo"
                            />
                        </Link>
                        <Link href="https://huggingface.co/soketlabs" target="_blank">
                            <Image
                                priority
                                src={HFLogo}
                                alt="HuggingFace Logo"
                            />
                        </Link>
                    </div> */}

          {/* Get In Touch Button */}
          {/* <Button
            href="mailto:careers@soket.ai"
            variant="black"
            onClick={closeMobileMenu}
          >
            GET IN TOUCH
          </Button> */}
        </nav>
      </div>
    </header>
  );
}
