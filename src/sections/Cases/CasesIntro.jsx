import ScrollReveal from "../../components/ScrollReveal";

const CasesIntro = () => (
  <ScrollReveal>
    <section className="bg-white px-2 py-24 tablet:px-0">
      <div className="mx-auto mb-14 flex max-w-6xl flex-col items-center justify-between gap-8 tablet:flex-row tablet:items-start">
        <h2
          className="mb-6 w-full text-left text-6xl font-bold text-gray-900 tablet:mb-0 tablet:w-1/2 tablet:text-5xl"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Case Studies
        </h2>
        <p className="w-full max-w-[420px] text-left text-lg text-[rgb(56,56,56)] tablet:w-1/2">
          Discover the innovative marketing strategies that set Neutra apart,
          driving success in the digital landscape.
        </p>
      </div>
    </section>
  </ScrollReveal>
);

export default CasesIntro;
