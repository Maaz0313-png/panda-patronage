import React from "react";
import ScrollReveal from "../../components/ScrollReveal";

const projects = [
  {
    title: "Codify",
    img: "https://framerusercontent.com/images/C46rY8czFx8HjeyGBBr7SnlupM.png",
    tags: ["Agency", "Portfolio", "Saas"],
  },
  {
    title: "Taskify",
    img: "https://framerusercontent.com/images/1EbsYvM5Gyb15ZgRtX8UF7b474.png",
    tags: ["Business", "AI", "Saas"],
  },
  {
    title: "Flexify",
    img: "https://framerusercontent.com/images/ymBaWuyG4ivgK2aSTlKsfHD7cvo.png",
    tags: ["Saas", "AI", "Business"],
  },
  {
    title: "Landify",
    img: "https://framerusercontent.com/images/mt2fx3NVaLd8pGv0ERaLEJmc4Y.png",
    tags: ["Business", "Portfolio", "Landing"],
  },
  {
    title: "Nexus AI",
    img: "https://framerusercontent.com/images/kg3eNccUy41ywZMReAJv2nO80gc.png",
    tags: ["AI", "Saas", "Business"],
  },
  {
    title: "Todofusion",
    img: "https://framerusercontent.com/images/qqgo5MbuI7VXnfS1E4CwLgt7BU.png",
    tags: ["AI", "Business", "Agency"],
  },
];

const ProjectShowcase = () => (
    <section className="bg-white px-2 py-24 md:px-0">
      <ScrollReveal className="mx-auto mb-14 max-w-6xl text-center">
        <h2
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          Building Digital Excellence with Panda.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          Discover the innovative marketing strategies that set Neutra apart,
          driving success in the digital landscape.
        </p>
      </ScrollReveal>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ScrollReveal
            key={project.title}
            className="mb-2 flex flex-col items-center rounded-2xl bg-[#f6f7fa] p-6 shadow-sm"
            style={{ minHeight: 420 }}
          >
            <div
              className="mb-6 flex w-full items-center justify-center overflow-hidden rounded-2xl"
              style={{
                background:
                  idx % 2 === 0
                    ? "#23402C"
                    : "linear-gradient(90deg, #6B4EFF 0%, #A259FF 100%)",
                height: 322.422,
                minHeight: 322.422,
                maxHeight: 322.422,
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-[322.422px] w-[532px] object-contain"
                style={{ maxWidth: 532, maxHeight: 322.422 }}
              />
            </div>
            <div className="w-full text-left">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
);

export default ProjectShowcase;
