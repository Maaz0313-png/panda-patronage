import React from "react";
import ScrollReveal from "../../components/ScrollReveal";

const ImpactStatement = () => (
  <ScrollReveal>
    <section className="relative flex w-full items-center justify-center overflow-visible bg-[#f6f7fa] py-16">
      {/* Star-like object left */}
      <img
        src="https://framerusercontent.com/images/Gy6oyLvyryjSizdl2va3wLbiYjc.png?scale-down-to=512"
        alt="Star Object"
        className="absolute top-1/5 left-0 tablet:top-1/2 tablet:left-10 size-14 tablet:-translate-y-1/2 tablet:size-16"
      />
      {/* Spring object right */}
      <img
        src="https://framerusercontent.com/images/nVwfJfYTJH4GZwm9UXcHF6NVsr4.png?scale-down-to=512"
        alt="Spring Object"
        className="absolute hidden tablet:block top-0 right-16 h-24 w-24 tablet:h-24 tablet:w-24"
        style={{ minWidth: 96, minHeight: 96 }}
      />
      <div className="flex w-full flex-1 items-center justify-center">
        <h2
          className="max-w-3xl text-center mx-4 tablet:mx-0 text-3xl leading-snug font-normal text-gray-900 tablet:text-4xl"
        >
          We have been <br className="inline tablet:hidden" /> creating projects that remain
          <br className="hidden tablet:inline" /> relevant today, tomorrow, and for
          <br className="inline tablet:hidden" />
          decades to come
        </h2>
      </div>
    </section>
  </ScrollReveal>
);

export default ImpactStatement;
