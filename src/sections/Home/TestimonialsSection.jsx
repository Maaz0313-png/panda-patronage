import React from "react";

const testimonials = [
  {
    name: "Owner",
    company: "Elite Fitness Co.",
    text: "Working with Panda Patronage transformed our brand’s online presence. Their innovative strategies increased our website traffic by 45% in just 3 months!",
    img: "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/assets/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png",
    bg: "#FDF6F3",
    badge: "#fff",
  },
  {
    name: "Manager",
    company: "GreenTech Solutions",
    text: "Panda Patronage took our ad campaigns to the next level. Their full-funnel approach helped us achieve a 200% ROI on our marketing spend.",
    img: "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/assets/XfjXHJ2H7SzzlzPr1bGFm1T9BpI.png",
    bg: "#FFF3ED",
    badge: "#F8E6D9",
  },
  {
    name: "CEO",
    company: "Harmony Skin Care",
    text: "We struggled with brand consistency across platforms until their team created a cohesive strategy that boosted customer engagement.",
    img: "https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/assets/qCpU7HJtiveCC9wTFuh7L4wc8YM.png",
    bg: "#FFF7EB",
    badge: "#F8EED9",
  },
];

const logos = [
  "https://framerusercontent.com/images/RQtplDgO0QaR12FvioQ15mE35kU.svg",
  "https://framerusercontent.com/images/rim9ymYCtInC2YkivpMBMf8Dn0k.svg",
  "https://framerusercontent.com/images/EwqtQRJ6tQkLQz8wYeL13rdCm5E.svg",
  "https://framerusercontent.com/images/CgaamTpX7MhPEKWQ5nErcXoxdJc.svg",
  "https://framerusercontent.com/images/bD64dsBbmhkS3zkf22186FsX4Ac.svg",
  "https://framerusercontent.com/images/vGXtF9HXsgc9RTwZC0EnFQAc5a0.svg",
  "https://framerusercontent.com/images/9dwWN9t1Rvolj5dKZVTERoTo.svg",
  "https://framerusercontent.com/images/WiaTKEhWhhJvWfoS5B6yeBxEqo.svg",
  "https://framerusercontent.com/images/pWdI1S9RQGdpsjRHvx9SiSIt7Q.svg",
  "https://framerusercontent.com/images/MD3ZaTHRq3jFe94NbAvLnwbQPE.svg",
  "https://framerusercontent.com/images/R8dilgEbKuaM28BotYk2pOZ0Sgg.svg",
];

const TestimonialsSection = () => {
  return (
    <>
      <section className="py-16 bg-white flex flex-col items-center">
        <div className="text-center mb-10">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs rounded-full px-4 py-1 mb-3 font-medium tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our satisfied customers
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Panda Patronage empowers teams with seamless Strategies and
            time-saving Solutions. Discover client success!
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-7 justify-center mb-12 w-full">
          {testimonials.map((t, i) => (
            <div
              className="min-w-[320px] max-w-[340px] flex-1 rounded-2xl shadow-md flex flex-col gap-4 items-start px-6 py-7"
              style={{ background: t.bg }}
              key={i}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md ring-2 ring-white">
                  <img
                    src={t.img}
                    alt={t.name}
                    width={42}
                    height={42}
                    className="w-[42px] h-[42px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-base text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-400 mt-0.5">
                    – {t.company}
                  </div>
                </div>
              </div>
              <div className="text-[1.08rem] text-gray-800 leading-relaxed mt-1">
                “{t.text}”
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full max-w-6xl h-14 mx-auto overflow-hidden mt-4">
          <div className="flex items-center gap-11 animate-logo-slider will-change-transform">
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
            className="pointer-events-none absolute top-0 left-0 w-20 h-full z-10"
            style={{
              background: "linear-gradient(90deg, #fff 70%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute top-0 right-0 w-20 h-full z-10"
            style={{
              background: "linear-gradient(270deg, #fff 70%, transparent 100%)",
            }}
          />
        </div>
      </section>
      <style>{`
        @keyframes logo-slider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-slider {
          animation: logo-slider 5s linear infinite;
        }
      `}</style>
    </>
  );
};

export default TestimonialsSection;
