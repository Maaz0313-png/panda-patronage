import React from "react";
import ScrollReveal from "../../components/ScrollReveal";

const testimonials = [
  {
    name: "Owner",
    company: "Elite Fitness Co.",
    text: "Working with Panda Patronage transformed our brand’s online presence. Their innovative strategies increased our website traffic by 45% in just 3 months!",
    img: "/images/testimonials/elite-fitness-owner.png",
    bg: "#FDF6F3",
    badge: "#fff",
  },
  {
    name: "Manager",
    company: "GreenTech Solutions",
    text: "Panda Patronage took our ad campaigns to the next level. Their full-funnel approach helped us achieve a 200% ROI on our marketing spend.",
    img: "/images/testimonials/greentech-manager.png",
    bg: "#FFF3ED",
    badge: "#F8E6D9",
  },
  {
    name: "CEO",
    company: "Harmony Skin Care",
    text: "We struggled with brand consistency across platforms until their team created a cohesive strategy that boosted customer engagement.",
    img: "/images/testimonials/harmony-ceo.png",
    bg: "#FFF7EB",
    badge: "#F8EED9",
  },
];

const logos = [
  "/images/logos/logo-1.svg",
  "/images/logos/logo-2.svg",
  "/images/logos/logo-3.svg",
  "/images/logos/logo-4.svg",
  "/images/logos/logo-5.svg",
  "/images/logos/logo-6.svg",
  "/images/logos/logo-7.svg",
  "/images/logos/logo-8.svg",
  "/images/logos/logo-9.svg",
  "/images/logos/logo-10.svg",
  "/images/logos/logo-1.svg", // Using logo-1 as placeholder for the missing one
];

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center bg-white py-16">
      <ScrollReveal className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-medium tracking-wide text-gray-700">
          Testimonials
        </span>
        <h2 className="tablet:text-4xl mb-2 text-3xl font-bold">
          Our satisfied customers
        </h2>
        <p className="mx-auto max-w-xl text-base text-gray-500">
          Panda Patronage empowers teams with seamless Strategies and
          time-saving Solutions. Discover client success!
        </p>
      </ScrollReveal>
      <div className="desktop:flex-row tablet:flex-nowrap desktop:px-0 tablet:px-8 mb-12 flex w-full flex-col flex-wrap justify-center gap-7 px-4">
        {testimonials.map((t, i) => (
          <ScrollReveal
            className="desktop:mx-0 desktop:max-w-[340px] tablet:min-w-[280px] mx-auto flex w-full flex-1 flex-col items-start gap-4 rounded-2xl px-6 py-7 shadow-md"
            style={{ background: t.bg }}
            key={i}
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-white">
                <img
                  src={t.img}
                  alt={t.name}
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900">
                  {t.name}
                </div>
                <div className="mt-0.5 text-sm text-gray-400">
                  – {t.company}
                </div>
              </div>
            </div>
            <div className="mt-1 text-[1.08rem] leading-relaxed text-gray-800">
              “{t.text}”
            </div>
          </ScrollReveal>
        ))}
      </div>
      <div className="relative mx-auto mt-4 h-14 w-full max-w-6xl overflow-hidden">
        <div className="animate-logo-slider flex items-center gap-11 will-change-transform">
          {[...logos, ...logos].map((logo, i) => (
            <img
              src={logo}
              alt="logo"
              className="h-8 opacity-70 grayscale select-none"
              key={i}
            />
          ))}
        </div>
        <div
          className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20"
          style={{
            background: "linear-gradient(90deg, #fff 70%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20"
          style={{
            background: "linear-gradient(270deg, #fff 70%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
