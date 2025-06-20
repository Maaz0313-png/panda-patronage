import { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";

const MobileHeader = ({ activeLink = "Home" }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [ctaHovered, setCtaHovered] = useState(false);

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header
      className={`block overflow-x-hidden lg:hidden ${scrolled ? "fixed top-0 left-0 z-50 w-full" : "relative"}`}
    >
      <motion.div
        layout
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 150, damping: 40 }}
        className={`flex items-center justify-between ${
          scrolled
            ? "mx-auto mt-3 h-[58px] w-2/3 gap-1 rounded-[16px] bg-[rgba(26,26,26,0.5)] p-2 backdrop-blur-[5px]"
            : "h-[84px] w-full bg-[rgb(245,246,249)] p-4"
        } `}
      >
        {/* ==== LOGO ==== */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://framerusercontent.com/images/0R0UXrjNeRBEKk7xpEnnM93qA.png?scale-down-to=512"
            alt="Panda Patronage Logo"
            className={` ${
              scrolled ? "size-[42px] object-contain" : "size-5 object-contain"
            } `}
          />
        </a>

        {/* ==== NAV HAMBURGER + CTA ==== */}
        <div className={`flex items-center ${scrolled ? "gap-2" : "gap-8"}`}>
          {/* ----- CTA BUTTON ----- */}
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            className={`relative cursor-pointer overflow-hidden rounded-xl ${
              scrolled
                ? "bg-white px-5 py-3.5 text-black"
                : "bg-gray-900 px-0 py-1.5 text-white"
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
                  scrolled ? "text-black" : "text-white"
                } `}
              >
                Let&apos;s Talk
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={ctaHovered ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium ${
                  scrolled ? "text-black" : "text-white"
                } `}
              >
                Let&apos;s Talk
              </motion.span>
            </div>
          </button>
          {/* ----- NAV HAMBURGER ----- */}
          <button
            onClick={() => toggleOpen()}
            className={`relative z-50 flex items-center justify-center ${scrolled ? "rounded-lg bg-white p-2" : ""}`}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <motion.line
                initial={{
                  x1: 4,
                  y1: 4,
                  x2: 26,
                  y2: 4,
                  rotate: 0,
                }}
                animate={
                  isOpen
                    ? {
                        y1: 15,
                        y2: 15,
                        rotate: 45,
                        x1: 4,
                        x2: 26,
                      }
                    : {
                        y1: 4,
                        y2: 4,
                        rotate: 0,
                        x1: 4,
                        x2: 26,
                      }
                }
                stroke="hsl(0, 0%, 18%)"
                strokeWidth="3"
                strokeLinecap="round"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <motion.line
                initial={{
                  x1: 4,
                  y1: 15,
                  x2: 26,
                  y2: 15,
                  opacity: 1,
                }}
                animate={
                  isOpen ? { opacity: 0 } : { opacity: 1, y1: 15, y2: 15 }
                }
                stroke="hsl(0, 0%, 18%)"
                strokeWidth="3"
                strokeLinecap="round"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <motion.line
                initial={{
                  x1: 4,
                  y1: 26,
                  x2: 26,
                  y2: 26,
                  rotate: 0,
                }}
                animate={
                  isOpen
                    ? {
                        y1: 15,
                        y2: 15,
                        rotate: -45,
                        x1: 4,
                        x2: 26,
                      }
                    : {
                        y1: 26,
                        y2: 26,
                        rotate: 0,
                        x1: 4,
                        x2: 26,
                      }
                }
                stroke="hsl(0, 0%, 18%)"
                strokeWidth="3"
                strokeLinecap="round"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default MobileHeader;
