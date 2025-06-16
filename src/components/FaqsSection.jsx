import ScrollReveal from "./ScrollReveal";

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
  <ScrollReveal>
    <section className="flex w-full flex-col items-center bg-[#f7f7f9] py-20">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">FAQs</h2>
        <p className="mx-auto max-w-2xl text-base text-gray-500">
          To make things easier, we've compiled a list of frequently asked
          questions to address your concerns.
        </p>
      </div>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="text-left">
              <div className="mb-1 text-lg font-semibold text-gray-900">
                {faq.q}
              </div>
              <div className="text-base leading-relaxed text-gray-500">
                {faq.a}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </ScrollReveal>
);

export default FaqsSection;
