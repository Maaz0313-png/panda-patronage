import { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";

const MobileHeader = ({ activeLink = "Home" }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [ctaHovered, setCtaHovered] = useState(false);

  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Cases", href: "/cases" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Overlay: render outside header so it never covers navbar in normal flow */}
      {isOpen && !scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, pointerEvents: "auto" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.2 }}
          className="fixed right-0 left-0 z-30"
          style={{
            top: 84, // height of navbar in normal flow
            height: "calc(100vh - 84px)",
            pointerEvents: isOpen ? "auto" : "none",
          }}
          aria-hidden={!isOpen}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full bg-white/60 backdrop-blur-sm"
          />
        </motion.div>
      )}
      {/* Sticky: overlay covers whole screen, behind navbar and menu */}
      {isOpen && scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, pointerEvents: "auto" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30"
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          aria-hidden={!isOpen}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 h-full w-full bg-white/60 backdrop-blur-sm"
          />
        </motion.div>
      )}
      <header
        className={`block overflow-x-hidden w-full desktop:hidden ${scrolled ? "fixed top-0 left-0 z-50 w-full" : "relative"}`}
      >
        <motion.div
          layout
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 150, damping: 40 }}
          className={`flex items-center justify-between ${
            scrolled
              ? "mx-auto mt-3 h-[58px] w-2/3 gap-1 rounded-[16px] bg-[rgba(26,26,26,0.5)] p-2 backdrop-blur-[5px]"
              : "h-[84px] w-full bg-transparent p-4"
          } `}
        >
          {/* ==== LOGO ==== */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://framerusercontent.com/images/0R0UXrjNeRBEKk7xpEnnM93qA.png?scale-down-to=512"
              alt="Panda Patronage Logo"
              className={` ${
                scrolled
                  ? "size-[42px] object-contain"
                  : "size-5 object-contain"
              } `}
            />
          </Link>

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
              className={`relative z-50 flex cursor-pointer items-center justify-center ${scrolled ? "rounded-lg bg-white p-2" : ""}`}
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
        {/* Menu: absolutely positioned below navbar, always above overlay */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isOpen ? { height: "auto", opacity: 1, display: "block" } : { height: 0, opacity: 0, display: "none" }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed right-0 left-0 z-40 mx-2 mt-3 overflow-hidden rounded-2xl bg-neutral-900 p-6 shadow-lg"
          style={{ top: scrolled ? 70 : 100 }}
        >
          <nav>
            <ul className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${activeLink === item.label ? "text-white" : "text-neutral-300 hover:text-white"}`}
                  >
                    {/* Dot for active or hover */}
                    <span
                      className={`mr-0 mb-[2.4px] size-[3px] rounded-full bg-white transition-all duration-200 ${activeLink === item.label ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </header>
    </>
  );
};

export default MobileHeader;
