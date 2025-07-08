import React, { useRef, useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import { motion, useInView, AnimatePresence } from "framer-motion";

function MotionHeading({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  // Track which chars have finished animating
  const [done, setDone] = useState({});
  let charIdx = 0;
  // Split into words and spaces
  function splitWordsAndSpaces(children) {
    const result = [];
    React.Children.forEach(children, (child) => {
      if (typeof child === "string") {
        const regex = /(\S+)|(\s+)/g;
        let match;
        while ((match = regex.exec(child)) !== null) {
          if (match[1]) {
            result.push({ type: "word", value: match[1] });
          } else if (match[2]) {
            result.push({ type: "space", value: match[2] });
          }
        }
      } else if (React.isValidElement(child) && child.type === "br") {
        result.push({ type: "br" });
      } else if (React.isValidElement(child)) {
        result.push(...splitWordsAndSpaces(child.props.children));
      }
    });
    return result;
  }
  const items = splitWordsAndSpaces(children);
  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {isInView && (
          <span className="inline-block w-full">
            {items.map((item, idx) => {
              if (item.type === "br") {
                return <br key={`br-${idx}`} />;
              }
              if (item.type === "space") {
                return item.value
                  .split("")
                  .map((sp, i) => (
                    <span key={`space-${idx}-${i}`}>
                      {sp === " " ? "\u00A0" : sp}
                    </span>
                  ));
              }
              if (item.type === "word") {
                const word = item.value;
                return (
                  <span className="inline-block" key={`word-${idx}`}>
                    {word.split("").map((char, cidx) => {
                      const delay = charIdx * 0.04;
                      const thisIdx = charIdx;
                      charIdx++;
                      return (
                        <motion.span
                          key={cidx}
                          initial={{
                            opacity: 0,
                            filter: "blur(10px)",
                            y: 50,
                            scale: 0.8,
                            display: "inline-block",
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
                            display: "inline-block",
                          }}
                          transition={{
                            duration: 0.8,
                            delay,
                            ease: [0.6, 0.6, 0, 1],
                          }}
                          className="animated-char"
                          onAnimationComplete={() =>
                            setDone((prev) => ({ ...prev, [thisIdx]: true }))
                          }
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      );
                    })}
                  </span>
                );
              }
              return null;
            })}
          </span>
        )}
      </AnimatePresence>
    </div>
  );
}

const ImpactStatement = () => (
  <section className="xs:py-16 tablet:py-20 relative flex w-full items-center justify-center overflow-visible bg-[#f6f7fa] py-12">
    <ScrollReveal>
      {/* Star-like object left */}
      <img
        src="/images/misc/star-object.png"
        alt="Star Object"
        className="tablet:top-1/2 tablet:left-10 tablet:-translate-y-1/2 tablet:size-16 absolute top-1/5 left-0 size-14"
      />
      {/* Spring object right */}
      <img
        src="/images/misc/spring-object.png"
        alt="Spring Object"
        className="tablet:block tablet:h-24 tablet:w-24 absolute top-0 right-16 hidden size-24"
        style={{ minWidth: 96, minHeight: 96 }}
      />
    </ScrollReveal>

    <div className="flex w-full flex-1 items-center justify-center">
      <MotionHeading className="xs:text-xl xs:mx-6 xs:leading-relaxed tablet:mx-0 tablet:text-4xl tablet:leading-snug desktop:text-5xl mx-4 max-w-4xl text-center text-lg leading-relaxed font-normal text-gray-900">
        We have been creating projects that remain relevant today, tomorrow, and
        for decades to come
      </MotionHeading>
    </div>
  </section>
);

export default ImpactStatement;
