import ScrollReveal from "./ScrollReveal";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

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
        }}
      >
        <img
          src={img}
          alt={title}
          className="size-full rounded-[inherit] object-cover object-center"
          style={{ maxWidth: 532, maxHeight: 322.422 }}
        />
      </div>
      <div className="flex w-full items-center justify-between text-left">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <ArrowUpRightIcon
          className="tablet:opacity-0 tablet:pointer-events-auto tablet:-translate-x-2 tablet:translate-y-2 tablet:group-hover:opacity-100 tablet:group-hover:translate-x-0 tablet:group-hover:translate-y-0 tablet:transition-all tablet:duration-300 opacity-100"
          size={32}
        />
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
  <section className="desktop:px-0 bg-white px-8 pb-24">
    <div className="tablet:grid-cols-2 mx-auto grid max-w-6xl grid-cols-1 gap-8">
      {cases.map((item) => (
        <CaseCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default ProjectShowcase;
