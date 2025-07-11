import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const DesktopHeader = ({ activeLink }) => {
  // 1) Dot‐animation (unchanged)
  const dotVariants = {
    rest: { left: "-10px", opacity: 0 },
    hover: {
      left: "50%",
      x: "-50%",
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  // 2) Links array (unchanged)
  const links = [
    { label: "Home", href: "/" },
    { label: "Cases", href: "/cases" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // 3) Track scroll state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 4) Track CTA hover (unchanged)
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <header
      className={`desktop:block hidden w-full max-w-[1200px] overflow-x-hidden p-6 ${scrolled ? "fixed top-0 left-0 z-50" : "relative mx-auto"}`}
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 150, damping: 40 }}
        className={`flex items-center ${
          scrolled
            ? "mx-auto mt-3 h-[58px] w-[529px] gap-1 rounded-[16px] bg-[rgba(26,26,26,0.5)] p-2 backdrop-blur-[5px]"
            : "h-min w-full justify-between bg-transparent"
        } `}
      >
        {/* ==== LOGO ==== */}
        <Link
          to="/"
          className={`flex-shrink-0 ${scrolled ? "p-1 pl-0" : "p-2"}`}
        >
          <img
            src="/images/misc/logo.png"
            alt="Panda Patronage Logo"
            className={` ${
              scrolled ? "size-[42px] object-contain" : "size-5 object-contain"
            } `}
          />
        </Link>

        {/* ==== NAV LINKS + CTA ==== */}
        <div
          className={`flex items-center ${
            scrolled ? "items-stretch gap-1" : "gap-4"
          }`}
        >
          {/* ----- NAV LINKS GROUP ----- */}
          <nav
            className={`flex flex-shrink-0 ${
              scrolled
                ? "items-stretch rounded-xl bg-[#1f1f1f] p-1 pb-0"
                : "items-center"
            } `}
          >
            <ul
              className={`m-0 flex list-none items-center ${
                scrolled ? "gap-0" : "gap-1"
              } p-0`}
            >
              {links.map(({ label, href }) => {
                const isActive = label === activeLink;
                const hasValidActive = links.some(
                  (link) => link.label === activeLink,
                );

                if (isActive && hasValidActive) {
                  return (
                    <li
                      className={`relative px-4 ${
                        scrolled ? "pt-1 pb-2" : "py-2"
                      } `}
                      key={label}
                    >
                      <Link
                        to={href}
                        className={`relative cursor-[unset] text-sm font-medium ${
                          scrolled ? "text-white" : "text-[#1f1f1f]"
                        } `}
                      >
                        {label}
                        <span
                          className={`absolute bottom-[-5px] left-1/2 size-[3px] -translate-x-1/2 transform rounded-full ${
                            scrolled ? "bg-white" : "bg-[#1f1f1f]"
                          } `}
                        />
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <motion.li
                      className={`relative px-4 ${
                        scrolled ? "pt-1 pb-2" : "py-2"
                      } `}
                      key={label}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <Link
                        to={href}
                        className={`relative text-sm font-medium ${
                          scrolled ? "text-white" : "text-[#1f1f1f]"
                        } `}
                      >
                        {label}
                        {/* Show the dot on hover for all non-active links */}
                        <motion.span
                          className={`absolute right-0 bottom-[0px] left-0 size-[3px] rounded-full ${
                            scrolled ? "bg-white" : "bg-[#8e8e8e]"
                          } `}
                          variants={dotVariants}
                        />
                      </Link>
                    </motion.li>
                  );
                }
              })}
            </ul>
          </nav>

          {/* ----- CTA BUTTON ----- */}
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            className={`relative cursor-pointer overflow-hidden ${
              scrolled
                ? "flex flex-col items-center rounded-xl bg-white px-5 py-3.5 text-[#1f1f1f]"
                : "rounded-lg bg-gray-900 px-0 py-1.5 text-white"
            } `}
          >
            <div
              className={`relative flex items-center justify-center overflow-hidden ${
                scrolled
                  ? "h-5 w-[57.981px] bg-white"
                  : "h-6 w-[89.9px] bg-gray-900"
              } `}
            >
              <motion.span
                initial={{ y: "0%" }}
                animate={ctaHovered ? { y: "-100%" } : { y: "0%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium ${
                  scrolled ? "text-[#1f1f1f]" : "text-white"
                } `}
              >
                Let&apos;s Talk
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={ctaHovered ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium ${
                  scrolled ? "text-[#1f1f1f]" : "text-white"
                } `}
              >
                Let&apos;s Talk
              </motion.span>
            </div>
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default DesktopHeader;
