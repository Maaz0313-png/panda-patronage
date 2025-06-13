import React from "react";

const ImpactStatement = () => (
  <section className="bg-[#f6f7fa] py-16 w-full flex justify-center items-center relative overflow-visible">
    {/* Star-like object left */}
    <img
      src="https://framerusercontent.com/images/Gy6oyLvyryjSizdl2va3wLbiYjc.png?scale-down-to=512"
      alt="Star Object"
      className="absolute left-10 top-1/2 -translate-y-1/2 w-16 h-16 md:w-16 md:h-16"
      style={{ minWidth: 64, minHeight: 64 }}
    />
    {/* Spring object right */}
    <img
      src="https://framerusercontent.com/images/nVwfJfYTJH4GZwm9UXcHF6NVsr4.png?scale-down-to=512"
      alt="Spring Object"
      className="absolute right-16 top-0 w-24 h-24 md:w-24 md:h-24"
      style={{ minWidth: 96, minHeight: 96 }}
    />
    <div className="flex flex-1 justify-center items-center w-full">
      <h2
        className="text-3xl md:text-4xl font-normal text-gray-900 text-center leading-snug max-w-3xl"
        style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
      >
        We have been creating projects that remain
        <br className="hidden md:block" /> relevant today, tomorrow, and for
        decades to come
      </h2>
    </div>
  </section>
);

export default ImpactStatement;
