import framerLogo from "../../assets/white-mark.png";
import ScrollReveal from "../../components/ScrollReveal";

const services = [
  {
    title: "Branding",
    desc: "Your company’s identity hinges on branding. We assist in shaping a distinct voice and identity.",
    img: "https://framerusercontent.com/images/SrW1Ux5MtGYoPFNopWE6a1C0.jpg",
    icons: [
      {
        src: "https://framerusercontent.com/images/Fp09fc507ocX7P8MZ47tH3es9ig.png",
        alt: "Adobe Illustrator Logo",
      },
      {
        src: "https://framerusercontent.com/images/7GWO4ayVlkwffxwuedUuwm8fkz0.png",
        alt: "Adobe Photoshop Logo",
      },
    ],
  },
  {
    title: "Social Media Management",
    desc: "Your audience resides on social media, and we ensure your presence there! Our social media management services maintain your profiles.",
    icons: [
      {
        src: "https://framerusercontent.com/images/so6zz1hYgNsUyUiichSAyeLN6mk.png",
        alt: "LinkedIn Logo",
      },
      {
        src: "https://framerusercontent.com/images/FXrLgI4mV4BrYpx766r3SKJsk.png",
        alt: "Facebook Logo",
      },
      {
        src: "https://framerusercontent.com/images/CW3W7FdNyoeDoTg3cqbFxT8Rg.png",
        alt: "Instagram Logo",
      },
    ],
  },
  {
    title: "Graphic Designing",
    desc: "Our visual design solutions generate powerful imagery, from logos to promotional resources, that deliver your message effectively.",
    img: "https://framerusercontent.com/images/2fagzZknRmiCRjgb6dyGnm6x8I.png?scale-down-to=512",
  },
  {
    title: "Meta Advertisement",
    desc: "Target the right audience and maximize ROI with our Meta ad campaigns on FB and Instagram.",
    img: "https://framerusercontent.com/images/dNFE2DKe1j69lloc68x5v3NJCEk.png",
  },
  {
    title: "Web Development",
    desc: "Your website is your digital storefront—we’re designed to captivate, engage, and drive traffic.",
    icons: [
      {
        src: "https://framerusercontent.com/images/X7wo3DMwzedPcHDgbHtDISpsE.png",
        alt: "Laravel Logo",
      },
      {
        src: "https://framerusercontent.com/images/kXOpgXYfialgKihFqYASFYooY.png",
        alt: "Bootstrap Logo",
      },
      {
        src: "https://framerusercontent.com/images/20SUxAcst6wjv4rMWpsfLwgYAk.png",
        alt: "Tailwind CSS Logo",
      },
      {
        src: "https://framerusercontent.com/images/6OWebZwFmSe4y1SoII0ZJsV7wQs.png",
        alt: "React Logo",
      },
      {
        src: "https://framerusercontent.com/images/1wtdsMCt2bJYIDiInF1vo83I.png",
        alt: "PHP Logo",
      },
    ],
  },
];

const OurServices = () => (
  <section className="tablet:py-16 flex items-center justify-center bg-[#f6f7fa]">
    <div className="desktop:w-[1232px] desktop:h-[872px] relative mx-auto w-full overflow-hidden">
      {/* BG image overlay */}
      <img
        src="https://framerusercontent.com/images/tNwDDOqRU2cDaNGi31xKVXpxbdA.jpg?scale-down-to=2048"
        alt="BG"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_center]"
        style={{ filter: "brightness(0.55)" }}
      />
      <div className="tablet:px-12 relative z-10 px-6 py-10">
        <div className="tablet:flex-row tablet:items-center tablet:justify-between mb-10 flex flex-col">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/90 px-5 py-1 text-sm font-medium text-gray-900">
              Our services
            </span>
            <h2 className="tablet:text-4xl mb-2 text-4xl leading-tight font-normal text-white">
              Professional Services That Showcase Our Expertise.
            </h2>
          </div>
          <p className="tablet:pb-3 tablet:self-end tablet:mt-0 tablet:text-left mt-4 max-w-md text-lg text-white/90">
            From creative design to technical solutions, our services define
            industry excellence.
          </p>
        </div>
        {/* Cards grid */}
        <div className="flex h-fit w-full flex-col flex-nowrap gap-4 desktop:flex-row desktop:h-[584px]">
          {/* Card 1: Branding */}
          <ScrollReveal className="flex flex-col rounded-[9px] bg-white/90 p-6 shadow-md w-full desktop:flex-[66.447%] desktop:h-[93.838%]">
            <img
              src={services[0].img}
              alt="Branding"
              className="mb-4 h-[180px] w-full rounded-xl object-cover"
            />
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              {services[0].title}
            </h3>
            <p className="mb-4 text-sm text-gray-700">{services[0].desc}</p>
            <div className="mt-auto flex items-center gap-2 pl-4">
              {services[0].icons.map((icon, i) => (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.alt}
                  className={`-ml-5 w-[44px] rounded-full bg-white p-[2px] z-[1${i}]`}
                />
              ))}
            </div>
          </ScrollReveal>
          <div className="flex flex-col justify-between gap-4 w-full desktop:h-[548px]">
            {/* Card 2: Social Media Management (row 1, col 2) */}
            <ScrollReveal className="flex min-h-[210px] w-full flex-col rounded-[9px] bg-white/90 p-6 shadow-md desktop:w-[353.84px]">
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {services[1].title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{services[1].desc}</p>
              <div className="mt-auto flex items-center pl-4 gap-2">
                {services[1].icons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    className={`-ml-5 w-[44px] rounded-full bg-white p-[2px] z-[1${i}]`}
                  />
                ))}
              </div>
            </ScrollReveal>
            {/* Card 3: Meta Advertisement (row 2, col 2) */}
            <ScrollReveal className="flex w-full flex-col rounded-[9px] bg-white/90 p-5 shadow-md desktop:h-[322px] desktop:w-[353.84px]">
              <img
                src={services[3].img}
                alt="Meta Advertisement"
                className="tablet:hidden desktop:block mb-4 h-28 w-full rounded-xl object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {services[3].title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{services[3].desc}</p>
            </ScrollReveal>
          </div>
          <div className="flex flex-col justify-between gap-4 w-full desktop:h-[548px]">
            {/* Card 4: Graphic Designing */}
            <ScrollReveal className="flex flex-col rounded-[9px] bg-white/90 p-5 shadow-md w-full desktop:h-[342px]">
              <img
                src={services[2].img}
                alt="Graphic Designing"
                className="mb-4 h-28 w-full rounded-xl object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {services[2].title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{services[2].desc}</p>
            </ScrollReveal>

            {/* Card 5: Web Development (row 2, col 3) */}
            <ScrollReveal className="flex flex-col rounded-[9px] bg-white/90 p-5 shadow-md w-full desktop:h-[190px]">
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {services[4].title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{services[4].desc}</p>
              <div className="mt-auto flex items-center gap-2 pl-4">
                {services[4].icons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    className={`-ml-5 w-[44px] rounded-full bg-white p-[2px] z-[1${i}]`}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurServices;
