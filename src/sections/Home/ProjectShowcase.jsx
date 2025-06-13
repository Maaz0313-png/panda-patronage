import React from "react";

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
  <section className="bg-white py-24 px-2 md:px-0">
    <div className="max-w-6xl mx-auto text-center mb-14">
      <h2
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
      >
        Building Digital Excellence with Panda.
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto">
        Discover the innovative marketing strategies that set Neutra apart,
        driving success in the digital landscape.
      </p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className="bg-[#f6f7fa] rounded-2xl shadow-sm p-6 flex flex-col items-center mb-2"
          style={{ minHeight: 420 }}
        >
          <div
            className="w-full flex justify-center items-center rounded-2xl overflow-hidden mb-6"
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
              className="object-contain w-[532px] h-[322.422px]"
              style={{ maxWidth: 532, maxHeight: 322.422 }}
            />
          </div>
          <div className="w-full text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectShowcase;
