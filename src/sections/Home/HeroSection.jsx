import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

const HeroSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <ScrollReveal>
      <section className="flex min-h-[600px] items-center justify-center bg-[#f6f7fa] py-12">
        <div
          className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center rounded-3xl bg-gradient-to-tr from-[#191919] via-[#191919] to-[#191919]/80 px-10 py-14 shadow-lg md:grid-cols-2 md:px-16 md:py-20"
          style={{ minHeight: 480 }}
        >
          {/* Left: Text */}
          <div className="z-10 flex flex-col justify-center">
            <h1
              className="mb-8 text-5xl leading-tight font-light text-white md:text-6xl"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              We&apos;re Creative
              <br />
              Digital Marketing
              <br />
              Agency!
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-300">
              We&apos;re here to help you see through the eyes of your audience,
              paving the way for your success without limits.
            </p>
            <button
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              className={`relative flex w-fit cursor-pointer items-center overflow-hidden rounded-xl bg-[rgba(255,255,255,0.2)] px-0 py-1.5 text-white`}
            >
              <div
                className={`relative flex h-6 w-[94.31px] items-center justify-center overflow-hidden text-nowrap`}
              >
                <motion.span
                  initial={{ y: "0%" }}
                  animate={ctaHovered ? { y: "-100%" } : { y: "0%" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium text-white`}
                >
                  Schedule a Call
                </motion.span>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={ctaHovered ? { y: "0%" } : { y: "100%" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium text-white`}
                >
                  Schedule a Call
                </motion.span>
              </div>
              <span className="ml-2 flex items-center justify-center rounded-lg bg-[#ff7a1a] p-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Right: Panda and shapes */}
          <div className="relative mt-10 flex min-h-[370px] items-center justify-center md:mt-0 lg:w-[601px]">
            {/* Panda image */}
            <img
              src="https://framerusercontent.com/images/0ywVpxGO9e9t2ww1smSTEWqHPs.png"
              alt="Panda"
              className="relative z-10 hidden lg:block lg:h-[515px] lg:w-[601px]"
            />
            {/* Left black body - positioned over panda */}
            <img
              src="https://framerusercontent.com/images/LFAxsa4CpX7e4qBI72ijOV2sHg.png"
              alt="Left shape"
              className="absolute bottom-[-10px] left-[-40px] z-20 w-[90px] md:bottom-[-30px] md:left-[-60px] md:w-[110px]"
              style={{ pointerEvents: "none" }}
            />
            {/* Right black body - positioned over panda */}
            <img
              src="https://framerusercontent.com/images/Tq3lgO9Qy66CFuDaYW99KQ5xoLM.png?scale-down-to=512"
              alt="Right shape"
              className="absolute right-[-40px] bottom-[-10px] z-20 w-[90px] md:right-[-60px] md:bottom-[-30px] md:w-[110px]"
              style={{ pointerEvents: "none" }}
            />
          </div>
          {/* Gradient overlay for orange effect */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 0% 0%, rgba(255,122,26,0.25) 0%, transparent 70%)",
            }}
          />
        </div>
      </section>
    </ScrollReveal>
  );
};

export default HeroSection;
