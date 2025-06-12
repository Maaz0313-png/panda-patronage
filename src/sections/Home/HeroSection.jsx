import { motion } from "framer-motion";
import { useState } from "react";
const HeroSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section className="bg-[#f6f7fa] py-12 flex justify-center items-center min-h-[600px]">
      <div
        className="max-w-6xl w-full mx-auto rounded-3xl bg-gradient-to-tr from-[#191919] via-[#191919] to-[#191919]/80 relative grid grid-cols-1 md:grid-cols-2 items-center px-10 py-14 md:py-20 md:px-16 shadow-lg"
        style={{ minHeight: 480 }}
      >
        {/* Left: Text */}
        <div className="z-10 flex flex-col justify-center">
          <h1
            className="text-white text-5xl md:text-6xl font-light leading-tight mb-8"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            We&apos;re Creative
            <br />
            Digital Marketing
            <br />
            Agency!
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            We&apos;re here to help you see through the eyes of your audience,
            paving the way for your success without limits.
          </p>
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            className={`relative flex w-fit items-center cursor-pointer overflow-hidden rounded-xl bg-[rgba(255,255,255,0.2)] px-0 py-1.5 text-white`}
          >
            <div
              className={`relative flex text-nowrap items-center justify-center overflow-hidden h-6 w-[94.31px]`}
            >
              <motion.span
                initial={{ y: "0%" }}
                animate={ctaHovered ? { y: "-100%" } : { y: "0%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium text-white `}
              >
                Schedule a Call
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={ctaHovered ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center rounded-[75%] text-sm font-medium text-white `}
              >
                Schedule a Call
              </motion.span>
            </div>
            <span className="ml-2 bg-[#ff7a1a] rounded-lg p-1 flex items-center justify-center">
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
        <div className="relative flex justify-center lg:w-[601px] items-center mt-10 md:mt-0 min-h-[370px]">
          {/* Panda image */}
          <img
            src="https://framerusercontent.com/images/0ywVpxGO9e9t2ww1smSTEWqHPs.png"
            alt="Panda"
            className="relative z-10 lg:h-[515px] lg:w-[601px] hidden lg:block"
          />
          {/* Left black body - positioned over panda */}
          <img
            src="https://framerusercontent.com/images/LFAxsa4CpX7e4qBI72ijOV2sHg.png"
            alt="Left shape"
            className="absolute z-20 left-[-40px] md:left-[-60px] bottom-[-10px] md:bottom-[-30px] w-[90px] md:w-[110px]"
            style={{ pointerEvents: "none" }}
          />
          {/* Right black body - positioned over panda */}
          <img
            src="https://framerusercontent.com/images/Tq3lgO9Qy66CFuDaYW99KQ5xoLM.png?scale-down-to=512"
            alt="Right shape"
            className="absolute z-20 right-[-40px] md:right-[-60px] bottom-[-10px] md:bottom-[-30px] w-[90px] md:w-[110px]"
            style={{ pointerEvents: "none" }}
          />
        </div>
        {/* Gradient overlay for orange effect */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 0% 0%, rgba(255,122,26,0.25) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
