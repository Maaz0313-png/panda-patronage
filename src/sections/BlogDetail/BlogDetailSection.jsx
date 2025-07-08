import { GoArrowLeft } from "react-icons/go";
import {
  PiClockDuotone,
  PiTagDuotone,
  PiCalendarBlankDuotone,
} from "react-icons/pi";
import ScrollReveal from "../../components/ScrollReveal";
import { Link } from "react-router-dom";

export default function BlogDetailSection({ article }) {
  if (!article) return null;
  const { image, date, tag, title, content, writer, readTime } = article;
  return (
    <section className="flex w-full flex-col items-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <ScrollReveal>
          <Link
            to="/blog"
            className="mb-6 flex items-start text-sm font-medium text-gray-900"
          >
            <GoArrowLeft className="mr-2 inline-block" size={16} /> All articles
          </Link>
          <h1 className="tablet:text-5xl mb-4 text-4xl leading-tight font-bold text-gray-900">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal className="mb-8 grid w-full grid-cols-[fit-content(100%)_fit-content(100%)] tablet:grid-cols-[fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] gap-x-8 gap-y-3 rounded-xl bg-gray-50 px-6 py-5 items-center justify-start">
          <div className="flex items-center gap-2 w-full">
            <img
              src={writer?.image}
              alt={writer?.name}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm font-medium text-gray-900">
              {writer?.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 w-full">
            <PiClockDuotone size={20} className="inline-block" />
            {readTime}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 w-full">
            <PiCalendarBlankDuotone size={20} className="inline-block" />
            {date}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 w-full">
            <PiTagDuotone size={20} className="inline-block" />
            {tag}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <img
            src={image}
            alt={title}
            className="mx-auto mb-10 h-[480px] w-full max-w-[762px] rounded-[12px] object-cover"
            style={{ aspectRatio: "762/480" }}
          />
        </ScrollReveal>
        <ScrollReveal className="space-y-4 text-base leading-relaxed text-gray-700">
          {content?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
