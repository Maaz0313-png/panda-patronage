import { MdArrowOutward } from "react-icons/md";
import ScrollReveal from "./ScrollReveal";

const CaseCard = ({ title, img, tags, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative mb-2 flex h-full w-full flex-col items-center rounded-2xl bg-[#f6f7fa] p-6 shadow-sm transition-transform hover:scale-[1.025] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    style={{ minHeight: 420 }}
  >
    <ScrollReveal>
      <div
        className="mb-6 flex w-full items-center justify-center overflow-hidden rounded-2xl"
        style={{
          background: "#23402C",
          height: 322.422,
          minHeight: 322.422,
          maxHeight: 322.422,
        }}
      >
        <img
          src={img}
          alt={title}
          className="h-[322.422px] w-[532px] object-contain"
          style={{ maxWidth: 532, maxHeight: 322.422 }}
        />
      </div>
      <div className="flex w-full items-center justify-between text-left">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <MdArrowOutward className="ml-2 text-2xl text-gray-700 transition-colors group-hover:text-indigo-600" />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className="absolute inset-0"
        aria-hidden="true"
        tabIndex={-1}
      ></span>
    </ScrollReveal>
  </a>
);

const ProjectShowcase = ({ cases }) => (
  <section className="bg-white px-2 pb-24 tablet:px-0">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 tablet:grid-cols-2">
      {cases.map((item) => (
        <CaseCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default ProjectShowcase;
