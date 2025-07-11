import React from "react";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const projects = [
  {
    title: "Codify",
    img: "/images/projects/codify.png",
    tags: ["Agency", "Portfolio", "Saas"],
  },
  {
    title: "Taskify",
    img: "/images/projects/taskify.png",
    tags: ["Business", "AI", "Saas"],
  },
  {
    title: "Flexify",
    img: "/images/projects/flexify.png",
    tags: ["Saas", "AI", "Business"],
  },
  {
    title: "Landify",
    img: "/images/projects/landify.png",
    tags: ["Business", "Portfolio", "Landing"],
  },
  {
    title: "Nexus AI",
    img: "/images/projects/nexus-ai.png",
    tags: ["AI", "Saas", "Business"],
  },
  {
    title: "Todofusion",
    img: "/images/projects/todofusion.png",
    tags: ["AI", "Business", "Agency"],
  },
];

const ProjectShowcase = () => (
  <section className="tablet:px-0 bg-white px-2 py-24">
    <ScrollReveal className="mx-auto mb-14 max-w-6xl text-center">
      <h2 className="tablet:text-5xl mb-4 text-2xl tablet:font-bold text-gray-900">
        Building Digital Excellence with Panda.
      </h2>
      <p className="mx-auto max-w-2xl text-base tablet:text-lg text-gray-500">
        Discover the innovative marketing strategies that set Neutra apart,
        driving success in the digital landscape.
      </p>
    </ScrollReveal>
    <div className="desktop:px-0 tablet:grid-cols-2 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4">
      {projects.map((project, idx) => (
        <ScrollReveal
          key={project.title}
          className="group mb-2 flex flex-col items-center rounded-2xl bg-[#f6f7fa] p-6 shadow-sm hover:cursor-pointer"
        >
          <div
            className="mb-6 flex w-full items-center justify-center overflow-hidden rounded-2xl"
            style={{
              background:
                idx % 2 === 0
                  ? "#23402C"
                  : "linear-gradient(90deg, #6B4EFF 0%, #A259FF 100%)",
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="size-full rounded-[inherit] object-cover object-center transition-transform duration-600 group-hover:scale-110"
            />
          </div>
          <div className="w-full text-left">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <ArrowUpRightIcon
                className="tablet:opacity-0 tablet:pointer-events-auto tablet:-translate-x-2 tablet:translate-y-2 tablet:group-hover:opacity-100 tablet:group-hover:translate-x-0 tablet:group-hover:translate-y-0 tablet:transition-all tablet:duration-300 opacity-100"
                size={32}
              />
            </div>
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
