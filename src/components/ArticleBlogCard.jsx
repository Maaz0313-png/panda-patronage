import React from "react";

/**
 * ArticleBlogCard - A responsive, pixel-perfect blog/article card using TailwindCSS.
 * Props:
 *  - image: string (image URL)
 *  - date: string (e.g., 'Nov 15, 2023')
 *  - tag: string (e.g., 'UX Design')
 *  - title: string
 *  - description: string
 *  - href: string (optional, for link destination)
 *  - cardClassName: string (optional, for custom card width/height)
 *  - imgClassName: string (optional, for custom image width/height)
 *
 * Note: To ensure all cards have the same width in a grid, set the width via the parent grid or pass a consistent cardClassName.
 */
const ArticleBlogCard = ({
  image,
  date,
  tag,
  title,
  description,
  href = "#",
  cardClassName = "",
  imgClassName = "",
}) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-[24px] bg-white transition-transform duration-300 hover:-translate-y-2 ${cardClassName}`}
    >
      <img src={image} alt={title} className={`object-cover ${imgClassName}`} />
      <div className="flex flex-1 flex-col px-4 py-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-900">
            {tag}
          </span>
        </div>
        <div className="font-roboto mb-2 text-[22px] leading-7 font-bold text-gray-900">
          {title}
        </div>
        <div className="font-roboto text-base leading-6 text-gray-600">
          {/* Removed flex-1 to ensure description is always fully visible */}
          {description}
        </div>
      </div>
      <a
        href={href}
        className="absolute inset-0 z-10"
        tabIndex="-1"
        aria-label={title}
      ></a>
    </div>
  );
};

export default ArticleBlogCard;
