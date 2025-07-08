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
            className="mb-6 flex items-center text-sm font-medium text-gray-900"
          >
            <GoArrowLeft className="mr-2 inline-block" size={16} /> All articles
          </Link>
          <h1 className="mb-4 text-4xl leading-tight font-bold text-gray-900">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal className="mb-8 flex w-fit items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <img
            src={writer?.image}
            alt={writer?.name}
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm font-medium text-gray-900">
            {writer?.name}
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <PiClockDuotone size={20} className="inline-block" />
            {readTime}
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <PiCalendarBlankDuotone size={20} className="inline-block" />
            {date}
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <PiTagDuotone size={20} className="inline-block" />
            {tag}
          </span>
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
