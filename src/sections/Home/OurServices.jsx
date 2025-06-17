import framerLogo from "../../assets/white-mark.png";
import ScrollReveal from "../../components/ScrollReveal";

const services = [
  {
    title: "Branding",
    desc: "Your company’s identity hinges on branding. We assist in shaping a distinct voice and identity.",
    img: "https://framerusercontent.com/images/SrW1Ux5MtGYoPFNopWE6a1C0.jpg",
    icons: [
      {
        src: "https://framerusercontent.com/images/VSHgnszILd4LCOoi9D5kfP1f78.webp",
        alt: "JS Logo",
      },
      { type: "framer" },
    ],
  },
  {
    title: "Social Media Management",
    desc: "Your audience resides on social media, and we ensure your presence there! Our social media management services maintain your profiles.",
    icons: [
      {
        src: "https://framerusercontent.com/images/VSHgnszILd4LCOoi9D5kfP1f78.webp",
        alt: "JS Logo",
      },
      {
        src: "https://framerusercontent.com/images/VSHgnszILd4LCOoi9D5kfP1f78.webp",
        alt: "JS Logo",
      },
      {
        src: "https://framerusercontent.com/images/VSHgnszILd4LCOoi9D5kfP1f78.webp",
        alt: "JS Logo",
      },
    ],
  },
  {
    title: "Graphic Designing",
    desc: "Our visual design solutions generate powerful imagery, from logos to promotional resources, that deliver your message effectively.",
    img: "https://framerusercontent.com/images/2fagzZknRmiCRjgb6dyGnm6x8I.png?scale-down-to=512",
    icons: [],
  },
  {
    title: "Meta Advertisement",
    desc: "Target the right audience and maximize ROI with our Meta ad campaigns on FB and Instagram.",
    img: "https://framerusercontent.com/images/dNFE2DKe1j69lloc68x5v3NJCEk.png",
    icons: [],
  },
  {
    title: "Web Development",
    desc: "Your website is your digital storefront—we’re designed to captivate, engage, and drive traffic.",
    icons: [
      {
        src: "https://framerusercontent.com/images/VSHgnszILd4LCOoi9D5kfP1f78.webp",
        alt: "JS Logo",
      },
    ],
  },
];

const OurServices = () => (
  <ScrollReveal>
    <section className="flex items-center justify-center bg-[#f6f7fa] py-16">
      <div
        className="relative mx-auto w-full overflow-hidden md:w-[1232px]"
        style={{ height: 872 }}
      >
        {/* BG image overlay */}
        <img
          src="https://framerusercontent.com/images/tNwDDOqRU2cDaNGi31xKVXpxbdA.jpg?scale-down-to=2048"
          alt="BG"
          className="absolute inset-0 z-0 h-full w-full object-cover object-[center_center]"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="relative z-10 px-6 py-10 md:px-12">
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <span className="mb-4 inline-block rounded-full bg-white/90 px-5 py-1 text-sm font-medium text-gray-900">
                Our services
              </span>
              <h2
                className="mb-2 text-3xl leading-tight font-semibold text-white md:text-4xl"
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
              >
                Professional Services That Showcase
                <br className="hidden md:block" />
                Our Expertise.
              </h2>
            </div>
            <p className="mt-4 max-w-md text-base text-white/90 md:mt-0 md:text-left">
              From creative design to technical solutions, our services define
              industry excellence.
            </p>
          </div>
          {/* Cards grid */}
          <div className="flex h-[584px] w-full flex-row flex-nowrap gap-4">
            {/* Card 1: Branding */}
            <div className="flex flex-[66.447%] flex-col rounded-[9px] bg-white/90 p-6 shadow-md md:h-[93.838%]">
              <img
                src={services[0].img}
                alt="Branding"
                className="mb-4 h-[180px] w-full rounded-xl object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {services[0].title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{services[0].desc}</p>
              <div className="mt-auto flex items-center gap-2">
                <img
                  src={services[0].icons[0].src}
                  alt={services[0].icons[0].alt}
                  className="w-[44px] rounded-full bg-yellow-300 p-1"
                />
                <span className="flex w-[44px] items-center justify-center rounded-full border border-gray-200 bg-black">
                  <img src={framerLogo} alt="" />
                </span>
              </div>
            </div>
            <div className="flex h-[548px] flex-col justify-between">
              {/* Card 2: Social Media Management (row 1, col 2) */}
              <div className="flex min-h-[210px] w-[353.84px] flex-col rounded-[9px] bg-white/90 p-6 shadow-md">
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {services[1].title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">{services[1].desc}</p>
                <div className="mt-auto flex items-center gap-2">
                  {services[1].icons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon.src}
                      alt={icon.alt}
                      className="-ml-5 w-[44px] rounded-full bg-yellow-300 p-1"
                    />
                  ))}
                </div>
              </div>
              {/* Card 3: Meta Advertisement (row 2, col 2) */}
              <div className="flex md:h-[322px] w-[353.84px] flex-col rounded-[9px] bg-white/90 p-5 shadow-md">
                <img
                  src={services[3].img}
                  alt="Meta Advertisement"
                  className="mb-4 h-28 w-full rounded-xl object-cover"
                />
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {services[3].title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">{services[3].desc}</p>
              </div>
            </div>
            <div className="flex h-[548px] flex-col justify-between">
              {/* Card 4: Graphic Designing */}
              <div className="flex md:h-[342px] flex-col rounded-[9px] bg-white/90 p-5 shadow-md">
                <img
                  src={services[2].img}
                  alt="Graphic Designing"
                  className="mb-4 h-28 w-full rounded-xl object-cover"
                />
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {services[2].title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">{services[2].desc}</p>
              </div>

              {/* Card 5: Web Development (row 2, col 3) */}
              <div className="flex md:h-[190px] flex-col rounded-[9px] bg-white/90 p-5 shadow-md">
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {services[4].title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">{services[4].desc}</p>
                <div className="mt-auto flex items-center gap-2">
                  <img
                    src={services[4].icons[0].src}
                    alt={services[4].icons[0].alt}
                    className="w-[44px] rounded-full bg-yellow-300 p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollReveal>
);

export default OurServices;
