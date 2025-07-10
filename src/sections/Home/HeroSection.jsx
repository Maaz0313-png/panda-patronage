import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);
  const controls = useAnimation();

  // Start the animation
  useEffect(() => {
    controls.start({
      y: [0, -30, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "easeInOut",
      },
    });
  }, [controls]);
  return (
    <ScrollReveal>
      <section className="tablet:p-6 tablet:pb-20 desktop:pb-24 flex min-h-[600px] items-center justify-center bg-transparent p-4 pb-12">
        <div
          className="tablet:px-10 tablet:py-20 desktop:p-16 desktop:pt-[100px] desktop:grid-cols-2 tablet:grid-cols-12 relative grid w-full max-w-[1195px] items-center rounded-xl [background-image:linear-gradient(116deg,_rgb(152,59,0)_0%,_rgb(92,36,0)_9%,_rgb(31,31,31)_31%)] px-4 py-14 shadow-lg"
          style={{ minHeight: 480 }}
        >
          {/* Left: Text */}
          <div className="tablet:col-span-8 desktop:col-span-1 z-10 flex w-full flex-col justify-center gap-4">
            <h1 className="tablet:text-[75px] tablet:w-full h-min w-fit text-left text-5xl leading-[90px] font-thin tracking-[-3.75px] text-white">
              We&apos;re Creative <br className="tablet:hidden inline" />{" "}
              Digital Marketing Agency!
            </h1>
            <p className="tablet:text-lg w-full text-xs text-gray-300 [margin-block-end:0px]">
              We&apos;re here to help you see through the eyes of your audience,
              paving the way for your success without limits.
            </p>
            <Link
              className={`tablet:mt-6 tablet:w-fit relative flex size-fit w-full cursor-pointer items-center overflow-hidden rounded-xl bg-[rgba(255,255,255,0.2)] px-0 py-1.5 text-white`}
              to="/contact"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              <div
                className={`tablet:w-[134.31px] relative flex h-10 w-full items-center justify-center overflow-hidden text-nowrap`}
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
          <div className="tablet:mt-0 desktop:w-[601px] tablet:col-span-4 desktop:col-span-1 relative mt-10 flex min-h-[370px] items-center justify-center">
            {/* Panda image */}
            <motion.img
              src="/images/misc/panda-hero.png"
              alt="Panda with headphones"
              className="desktop:opacity-100 desktop:block desktop:h-[515px] desktop:w-[601px] absolute right-0 -bottom-24 z-10 hidden cursor-grab rounded-br-3xl rounded-bl-3xl opacity-0"
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
              className="tablet:hidden desktop:block tablet:-bottom-40 tablet:left-[-60px] tablet:h-[209.625px] tablet:w-[217px] desktop:top-9/10 desktop:-left-9 absolute top-[57%] z-10 w-[149px] cursor-grab"
              drag={true}
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              animate={controls}
              whileDrag={{
                y: 0,
              }}
              onDragEnd={() => {
                // Restart the animation after drag ends
                controls.start({
                  y: [0, -30, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "easeInOut",
                  },
                });
              }}
            />
            {/* Right black body - positioned over panda */}
            <motion.img
              src="/images/misc/hero-right-shape.png"
              alt="Right shape"
              className="desktop:-right-2 tablet:block desktop:bottom-8 tablet:right-[10px] tablet:bottom-[-90px] tablet:size-[180px] desktop:size-[130px] absolute right-[0px] bottom-[-10px] z-10 hidden size-44 cursor-grab"
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
