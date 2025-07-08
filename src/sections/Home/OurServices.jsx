import framerLogo from "../../assets/white-mark.png";
import ScrollReveal from "../../components/ScrollReveal";

const services = [
  {
    title: "Branding",
    desc: "Your company’s identity hinges on branding. We assist in shaping a distinct voice and identity.",
    img: "/images/services/branding-service.jpg",
    icons: [
      {
        src: "/images/serviceIcons/adobe-illustrator.png",
        alt: "Adobe Illustrator Logo",
      },
      {
        src: "/images/serviceIcons/adobe-photoshop.png",
        alt: "Adobe Photoshop Logo",
      },
    ],
  },
  {
    title: "Social Media Management",
    desc: "Your audience resides on social media, and we ensure your presence there! Our social media management services maintain your profiles.",
    icons: [
      {
        src: "/images/socialIcons/linkedin.png",
        alt: "LinkedIn Logo",
      },
      {
        src: "/images/socialIcons/facebook.png",
        alt: "Facebook Logo",
      },
      {
        src: "/images/socialIcons/instagram.png",
        alt: "Instagram Logo",
      },
    ],
  },
  {
    title: "Graphic Designing",
    desc: "Our visual design solutions generate powerful imagery, from logos to promotional resources, that deliver your message effectively.",
    img: "/images/services/graphic-designing.png",
  },
  {
    title: "Meta Advertisement",
    desc: "Target the right audience and maximize ROI with our Meta ad campaigns on FB and Instagram.",
    img: "/images/services/meta-advertisement.png",
  },
  {
    title: "Web Development",
    desc: "Your website is your digital storefront—we’re designed to captivate, engage, and drive traffic.",
    icons: [
      {
        src: "/images/techIcons/laravel.png",
        alt: "Laravel Logo",
      },
      {
        src: "/images/techIcons/bootstrap.png",
        alt: "Bootstrap Logo",
      },
      {
        src: "/images/techIcons/tailwind.png",
        alt: "Tailwind CSS Logo",
      },
      {
        src: "/images/techIcons/react.png",
        alt: "React Logo",
      },
      {
        src: "/images/techIcons/php.png",
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
        src="/images/backgrounds/services-bg.jpg"
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
        <div className="desktop:flex-row desktop:h-[584px] flex h-fit w-full flex-col flex-nowrap gap-4">
          {/* Card 1: Branding */}
          <ScrollReveal className="desktop:flex-[66.447%] desktop:h-[93.838%] flex w-full flex-col rounded-[9px] bg-white/90 p-6 shadow-md">
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
          <div className="desktop:h-[548px] flex w-full flex-col justify-between gap-4">
            {/* Card 2: Social Media Management (row 1, col 2) */}
            <ScrollReveal className="desktop:w-[353.84px] flex min-h-[210px] w-full flex-col rounded-[9px] bg-white/90 p-6 shadow-md">
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {services[1].title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{services[1].desc}</p>
              <div className="mt-auto flex items-center gap-2 pl-4">
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
            <ScrollReveal className="desktop:h-[322px] desktop:w-[353.84px] flex w-full flex-col rounded-[9px] bg-white/90 p-5 shadow-md">
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
          <div className="desktop:h-[548px] flex w-full flex-col justify-between gap-4">
            {/* Card 4: Graphic Designing */}
            <ScrollReveal className="desktop:h-[342px] flex w-full flex-col rounded-[9px] bg-white/90 p-5 shadow-md">
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
            <ScrollReveal className="desktop:h-[190px] flex w-full flex-col rounded-[9px] bg-white/90 p-5 shadow-md">
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
