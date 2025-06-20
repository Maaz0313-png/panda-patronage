import React from "react";
import ScrollReveal from "../../components/ScrollReveal";

const ImpactStatement = () => (
  <ScrollReveal>
    <section className="relative flex w-full items-center justify-center overflow-visible bg-[#f6f7fa] py-16">
      {/* Star-like object left */}
      <img
        src="https://framerusercontent.com/images/Gy6oyLvyryjSizdl2va3wLbiYjc.png?scale-down-to=512"
        alt="Star Object"
        className="absolute top-1/2 left-10 h-16 w-16 -translate-y-1/2 md:h-16 md:w-16"
        style={{ minWidth: 64, minHeight: 64 }}
      />
      {/* Spring object right */}
      <img
        src="https://framerusercontent.com/images/nVwfJfYTJH4GZwm9UXcHF6NVsr4.png?scale-down-to=512"
        alt="Spring Object"
        className="absolute top-0 right-16 h-24 w-24 md:h-24 md:w-24"
        style={{ minWidth: 96, minHeight: 96 }}
      />
      <div className="flex w-full flex-1 items-center justify-center">
        <h2
          className="max-w-3xl text-center text-3xl leading-snug font-normal text-gray-900 md:text-4xl"
        >
          We have been creating projects that remain
          <br className="hidden md:block" /> relevant today, tomorrow, and for
          decades to come
        </h2>
      </div>
    </section>
  </ScrollReveal>
);

export default ImpactStatement;
