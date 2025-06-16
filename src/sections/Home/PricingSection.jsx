import React from "react";
import ScrollReveal from "../../components/ScrollReveal";

const plans = [
  {
    name: "Part-time",
    price: "$2450",
    features: [
      "Fast delivery & response",
      "Pause / cancel anytime",
      "Dedicated project manager",
      "1 request at the time",
      "SEO Marketing",
    ],
    button: {
      text: "Get Started",
      style: "border border-black text-black bg-white hover:bg-gray-50",
    },
    highlight: false,
  },
  {
    name: "Full-time",
    price: "$3950",
    features: [
      "Fast delivery & response",
      "Pause / cancel anytime",
      "Dedicated project manager",
      "10 request at the time",
      "E-commerce integration",
    ],
    button: {
      text: "Get Started",
      style: "bg-black text-white hover:bg-gray-900",
    },
    highlight: false,
  },
  {
    name: "Custom",
    price: "$5999",
    features: [
      "Fast delivery & response",
      "Pause / cancel anytime",
      "Dedicated project manager",
      "Unlimited request",
      "E-commerce integration",
    ],
    button: {
      text: "Get Started",
      style: "bg-orange-500 text-white hover:bg-orange-600",
    },
    highlight: true,
  },
];

const PricingSection = () => (
  <ScrollReveal>
    <section className="flex w-full flex-col items-center bg-[#f7f7f9] py-20">
      <div className="mb-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-xs font-medium tracking-wide text-gray-900">
          Simple Pricing
        </span>
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          Unlock Your Growth
        </h2>
      </div>
      <div className="flex w-full max-w-5xl flex-col justify-center gap-7 md:flex-row">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex max-w-[370px] min-w-[290px] flex-1 flex-col rounded-2xl bg-white px-8 py-8 shadow-md ${
              plan.highlight
                ? "relative overflow-hidden bg-gradient-to-tl from-black to-orange-900 text-white"
                : "bg-white text-black"
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span
                className={`text-lg font-semibold ${
                  plan.highlight ? "text-white" : "text-black"
                }`}
              >
                {plan.name}
              </span>
              {plan.highlight && (
                <span className="rounded-full border-[1px] border-orange-500 bg-transparent pt-0.5 pr-3.5 pb-1.5 pl-3 text-xs font-semibold text-orange-500 shadow">
                  Popular
                </span>
              )}
            </div>
            <hr
              className={`my-2 ${
                plan.highlight ? "border-white/20" : "border-gray-200"
              }`}
            />
            <ul className="mt-2 mb-7 space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    plan.highlight ? "text-orange-100" : "text-gray-700"
                  }`}
                >
                  <span className="mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <span
                className={`block text-3xl font-bold md:text-4xl ${
                  plan.highlight ? "text-white" : "text-black"
                }`}
              >
                {plan.price}
              </span>
              <span
                className={`ml-1 text-base ${
                  plan.highlight ? "text-gray-300" : "text-gray-400"
                }`}
              >
                /month
              </span>
            </div>
            <button
              className={`mt-6 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
                plan.button.style
              } ${plan.highlight ? "shadow-lg" : ""}`}
            >
              {plan.button.text}
            </button>
          </div>
        ))}
      </div>
    </section>
  </ScrollReveal>
);

export default PricingSection;
