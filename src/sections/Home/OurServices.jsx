import framerLogo from "../../assets/white-mark.png";

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
  <section className="bg-[#f6f7fa] py-16 flex justify-center items-center">
    <div
      className="w-full md:w-[1232px] mx-auto overflow-hidden relative"
      style={{ height: 872 }}
    >
      {/* BG image overlay */}
      <img
        src="https://framerusercontent.com/images/tNwDDOqRU2cDaNGi31xKVXpxbdA.jpg?scale-down-to=2048"
        alt="BG"
        className="absolute inset-0 w-full h-full object-cover object-[center_center] z-0"
        style={{ filter: "brightness(0.55)" }}
      />
      <div className="relative z-10 px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <span className="inline-block bg-white/90 text-gray-900 text-sm font-medium rounded-full px-5 py-1 mb-4">
              Our services
            </span>
            <h2
              className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-2"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              Professional Services That Showcase
              <br className="hidden md:block" />
              Our Expertise.
            </h2>
          </div>
          <p className="text-white/90 text-base md:text-left max-w-md mt-4 md:mt-0">
            From creative design to technical solutions, our services define
            industry excellence.
          </p>
        </div>
        {/* Cards grid */}
        <div className="flex flex-row flex-nowrap gap-4 h-[584px] w-full">
          {/* Card 1: Branding (row-span-2, col-start-1) */}
          <div className="bg-white/90 rounded-[9px] p-6 flex flex-col flex-[66.447%] md:h-[93.838%] shadow-md">
            <img
              src={services[0].img}
              alt="Branding"
              className="rounded-xl w-full h-[180px] object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {services[0].title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{services[0].desc}</p>
            <div className="flex items-center gap-2 mt-auto">
              <img
                src={services[0].icons[0].src}
                alt={services[0].icons[0].alt}
                className="w-[44px] rounded-full bg-yellow-300 p-1"
              />
              <span className="w-[44px] flex items-center justify-center bg-black rounded-full border border-gray-200">
                <img src={framerLogo} alt="" />
              </span>
            </div>
          </div>
          <div className="h-[584px] flex flex-col  gap-4">
            {/* Card 2: Social Media Management (row 1, col 2) */}
            <div className="bg-white/90 rounded-[9px] p-6 flex w-[353.84px] flex-col min-h-[210px] shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {services[1].title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{services[1].desc}</p>
              <div className="flex items-center gap-2 mt-auto">
                {services[1].icons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-[44px] rounded-full bg-yellow-300 p-1 -ml-5"
                  />
                ))}
              </div>
            </div>
            {/* Card 3: Meta Advertisement (row 2, col 2) */}
            <div className="bg-white/90 rounded-[9px] p-5 flex w-[353.84px] flex-col min-h-[220px] shadow-md">
              <img
                src={services[3].img}
                alt="Meta Advertisement"
                className="rounded-xl w-full h-28 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {services[3].title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{services[3].desc}</p>
            </div>
          </div>
          <div>
            {/* Card 4: Graphic Designing (row 1, col 3) */}
            <div className="bg-white/90 rounded-[9px] p-5 flex flex-col min-h-[220px] shadow-md">
              <img
                src={services[2].img}
                alt="Graphic Designing"
                className="rounded-xl w-full h-28 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {services[2].title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{services[2].desc}</p>
            </div>

            {/* Card 5: Web Development (row 2, col 3) */}
            <div className="bg-white/90 rounded-[9px] p-5 flex flex-col min-h-[220px] shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {services[4].title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{services[4].desc}</p>
              <div className="flex items-center gap-2 mt-auto">
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
);

export default OurServices;