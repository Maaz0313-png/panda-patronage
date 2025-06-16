import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

/**
 * ScrollReveal wraps children and animates them into view when scrolled into viewport (down only).
 * @param {React.ReactNode} children
 * @param {string} className
 * @param {number} delay
 * @param {number} duration
 * @param {object} style
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.3,
  style = {},
}) {
  const controls = useAnimation();
  const lastScrollY = useRef(window.scrollY);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  useEffect(() => {
    let lastY = lastScrollY.current;
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only animate in if scrolling down
    if (inView && window.scrollY >= lastScrollY.current) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: [0.44, 0, 0.56, 1] },
      });
    } else if (!inView) {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.3, ease: [0.44, 0, 0.56, 1] },
      });
    }
    lastScrollY.current = window.scrollY;
  }, [controls, inView, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
