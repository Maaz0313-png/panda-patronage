import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <ScrollReveal>
      <section className="tablet:p-6 tablet:pb-20 desktop:pb-24 flex min-h-[600px] items-center justify-center bg-transparent p-4 pb-12">
        <div
          className="tablet:grid-cols-2 tablet:px-10 tablet:py-20 desktop:p-16 desktop:pt-[100px] relative grid w-full max-w-[1195px] grid-cols-1 items-center rounded-xl [background-image:linear-gradient(116deg,_rgb(152,59,0)_0%,_rgb(92,36,0)_9%,_rgb(31,31,31)_31%)] px-4 py-14 shadow-lg"
          style={{ minHeight: 480 }}
        >
          {/* Left: Text */}
          <div className="flex flex-3/4 flex-col justify-center">
            <h1 className="tablet:text-[75px] mb-8 w-full max-w-[640px] text-5xl leading-tight font-thin text-white">
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
            <Link
              to="/contact"
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
            </Link>
          </div>
          {/* Right: Panda and shapes */}
          <div className="tablet:mt-0 desktop:w-[601px] relative mt-10 flex min-h-[370px] items-center justify-center">
            {/* Panda image */}
            <motion.img
              src="/images/misc/panda-hero.png"
              alt="Panda with headphones"
              className="desktop:opacity-100 desktop:block desktop:h-[515px] desktop:w-[601px] absolute right-1 -bottom-23 z-10 hidden cursor-grab rounded-br-3xl rounded-bl-3xl opacity-0"
              drag={true}
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
            {/* Baby Panda image */}
            <motion.img
              src="/images/misc/baby-panda-hero.png"
              alt="Baby Panda with headphones"
              className="tablet:opacity-100 tablet:block desktop:hidden absolute right-1 bottom-23 z-10 hidden h-[336px] w-[258px] cursor-grab rounded-br-3xl rounded-bl-3xl opacity-0"
              drag={true}
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
            {/* Left black body - positioned over panda */}
            <motion.img
              src="/images/misc/hero-left-shape.png"
              alt="Left shape"
              className="tablet:hidden desktop:block tablet:-bottom-40 tablet:left-[-60px] tablet:h-[209.625px] tablet:w-[217px] absolute bottom-[-10px] left-[-20px] z-20 w-[217px] cursor-grab"
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
              src="/images/misc/hero-right-shape.png"
              alt="Right shape"
              className="desktop:right-[-40px] desktop:bottom-[-10px] tablet:right-[10px] tablet:bottom-[-90px] tablet:size-[180px] absolute right-[0px] bottom-[-10px] z-20 size-[130px] cursor-grab"
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
