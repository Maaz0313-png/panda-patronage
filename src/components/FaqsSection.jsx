import React from "react";

const faqs = [
  {
    q: "Customized packages?",
    a: "Yes, we understand that every business is unique. We create flexible, customized packages that cater to your specific needs and budget.",
  },
  {
    q: "Insights?",
    a: "We rely on data-driven insights and key performance indicators (KPIs) to track progress. You'll receive weekly updates and reports.",
  },
  {
    q: "services offered?",
    a: "We provide comprehensive marketing solutions, including SM management, paid advertising, branding, content creation, SEO, email marketing, and full-funnel strategy",
  },
  {
    q: "Expect results?",
    a: "Results vary depending on your goals and the services you select. Typically, clients see noticeable improvements within the first 90 days.",
  },
  {
    q: "Pricing?",
    a: "Our pricing depends on the services and scope of work required. We offer flexible payment plans to accommodate businesses of all sizes.",
  },
  {
    q: "Get started?",
    a: "Getting started is easy! Simply reach out to us via our contact form or schedule a free consultation. Let's discuss how we can help your brand grow.",
  },
];

const FaqsSection = () => (
  <section className="w-full bg-[#f7f7f9] py-20 flex flex-col items-center">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">FAQs</h2>
      <p className="text-gray-500 text-base max-w-2xl mx-auto">
        To make things easier, we've compiled a list of frequently asked
        questions to address your concerns.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 w-full max-w-6xl">
      {faqs.map((faq, i) => (
        <div key={i} className="text-left">
          <div className="font-semibold text-lg text-gray-900 mb-1">
            {faq.q}
          </div>
          <div className="text-gray-500 text-base leading-relaxed">{faq.a}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FaqsSection;
