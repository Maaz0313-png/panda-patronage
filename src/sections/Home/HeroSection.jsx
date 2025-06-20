import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRightIcon } from "@phosphor-icons/react";

const HeroSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <ScrollReveal>
      <section className="flex min-h-[600px] items-center justify-center bg-[#f6f7fa] py-12">
        <div
          className="[background-image:linear-gradient(116deg,_rgb(152,59,0)_0%,_rgb(92,36,0)_9%,_rgb(31,31,31)_31%)] relative mx-auto grid w-full max-w-[1195px] grid-cols-1 items-center rounded-3xl px-10 py-14 shadow-lg md:grid-cols-2 md:px-16 md:py-20"
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
              className={`relative flex size-fit cursor-pointer items-center overflow-hidden rounded-xl bg-[rgba(255,255,255,0.2)] px-0 py-1.5 text-white`}
            >
              <div
                className={`relative flex h-10 w-[134.31px] items-center justify-center overflow-hidden text-nowrap`}
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
              <span className="mr-1.5 ml-1 flex size-10 items-center justify-center rounded-lg bg-[#ff7a1a] p-1">
                <ArrowRightIcon size={20} />
              </span>
            </button>
          </div>
          {/* Right: Panda and shapes */}
          <div className="relative mt-10 flex min-h-[370px] items-center justify-center md:mt-0 lg:w-[601px]">
            {/* Panda image */}
            <motion.img
              src="https://framerusercontent.com/images/0ywVpxGO9e9t2ww1smSTEWqHPs.png"
              alt="Panda"
              className="absolute right-1 -bottom-23 z-10 hidden opacity-0 lg:opacity-100 cursor-grab rounded-br-3xl rounded-bl-3xl lg:block lg:h-[515px] lg:w-[601px]"
              drag={true}
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
            {/* Left black body - positioned over panda */}
            <motion.img
              src="https://framerusercontent.com/images/LFAxsa4CpX7e4qBI72ijOV2sHg.png"
              alt="Left shape"
              className="absolute bottom-[-10px] left-[-40px] z-20 w-[217px] cursor-grab md:-bottom-40 md:left-[-60px] md:h-[209.625px] md:w-[217px]"
              drag={true}
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "easeInOut",
              }}
            />
            {/* Right black body - positioned over panda */}
            <motion.img
              src="https://framerusercontent.com/images/Tq3lgO9Qy66CFuDaYW99KQ5xoLM.png?scale-down-to=512"
              alt="Right shape"
              className="absolute right-[-40px] bottom-[-10px] z-20 size-[130px] cursor-grab md:right-[0px] md:bottom-10"
              drag={true}
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default HeroSection;
