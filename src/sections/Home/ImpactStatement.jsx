import React, { useRef } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import { motion, useInView, AnimatePresence } from "framer-motion";

function splitTextWithBr(children) {
  // Flattens children and returns an array of {type: 'char'|'br', value}
  const result = [];
  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      child.split("").forEach((char) => {
        result.push({ type: "char", value: char });
      });
    } else if (React.isValidElement(child) && child.type === "br") {
      result.push({ type: "br" });
    } else if (React.isValidElement(child)) {
      // Recursively flatten
      result.push(...splitTextWithBr(child.props.children));
    }
  });
  return result;
}

function MotionHeading({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const charsAndBrs = splitTextWithBr(children);

  let charIdx = 0;
  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {isInView && (
          <span>
            {charsAndBrs.map((item, idx) => {
              if (item.type === "br") {
                return <br key={`br-${idx}`} />;
              }
              // Animate each character
              const delay = charIdx * 0.04;
              charIdx++;
              return (
                <motion.span
                  key={idx}
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 50,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(10px)",
                    y: -20,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.6, 0.6, 0, 1],
                  }}
                  className="inline-block"
                >
                  {item.value === " " ? "\u00A0" : item.value}
                </motion.span>
              );
            })}
          </span>
        )}
      </AnimatePresence>
    </div>
  );
}

const ImpactStatement = () => (
  <section className="relative flex w-full items-center justify-center overflow-visible bg-[#f6f7fa] py-16">
    <ScrollReveal>
      {/* Star-like object left */}
      <img
        src="https://framerusercontent.com/images/Gy6oyLvyryjSizdl2va3wLbiYjc.png?scale-down-to=512"
        alt="Star Object"
        className="tablet:top-1/2 tablet:left-10 tablet:-translate-y-1/2 tablet:size-16 absolute top-1/5 left-0 size-14"
      />
      {/* Spring object right */}
      <img
        src="https://framerusercontent.com/images/nVwfJfYTJH4GZwm9UXcHF6NVsr4.png?scale-down-to=512"
        alt="Spring Object"
        className="tablet:block tablet:h-24 tablet:w-24 absolute top-0 right-16 hidden h-24 w-24"
        style={{ minWidth: 96, minHeight: 96 }}
      />
    </ScrollReveal>

    <div className="flex w-full flex-1 items-center justify-center">
      <MotionHeading className="tablet:mx-0 tablet:text-4xl mx-4 max-w-3xl text-center text-3xl leading-snug font-normal text-gray-900">
        {`We have been `}
        <br className="tablet:hidden inline" />
        {`creating projects that remain`}
        <br className="tablet:inline hidden" />
        {`relevant today, tomorrow, and for`}
        <br className="tablet:hidden inline" />
        {`decades to come`}
      </MotionHeading>
    </div>
  </section>
);

export default ImpactStatement;
