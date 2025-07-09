import ScrollReveal from "../../components/ScrollReveal";

const CasesIntro = () => (
  <ScrollReveal>
    <section className="desktop:px-0 bg-white px-2 py-24">
      <div className="tablet:px-0 tablet:justify-between tablet:flex-row tablet:items-start mx-auto mb-14 flex max-w-6xl flex-col items-start justify-center gap-8 px-8">
        <h2 className="tablet:mb-0 tablet:w-1/2 tablet:text-4xl tablet:font-bold mb-6 w-full text-left text-2xl text-gray-900">
          Case Studies
        </h2>
        <p className="tablet:w-1/2 w-full max-w-[420px] text-left tablet:text-lg text-base text-[rgb(56,56,56)]">
          Discover the innovative marketing strategies that set Neutra apart,
          driving success in the digital landscape.
        </p>
      </div>
    </section>
  </ScrollReveal>
);

export default CasesIntro;
