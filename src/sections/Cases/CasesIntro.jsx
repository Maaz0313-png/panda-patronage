import ScrollReveal from "../../components/ScrollReveal";

const CasesIntro = () => (
  <ScrollReveal>
    <section className="bg-white px-2 py-24 md:px-0">
      <div className="mx-auto mb-14 flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <h2
          className="mb-6 w-full text-left text-6xl font-bold text-gray-900 md:mb-0 md:w-1/2 md:text-5xl"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Case Studies
        </h2>
        <p className="w-full max-w-[420px] text-left text-lg text-[rgb(56,56,56)] md:w-1/2">
          Discover the innovative marketing strategies that set Neutra apart,
          driving success in the digital landscape.
        </p>
      </div>
    </section>
  </ScrollReveal>
);

export default CasesIntro;
