import React from "react";

/**
 * ArticleBlogCard - A responsive, pixel-perfect blog/article card using TailwindCSS.
 * Props:
 *  - image: string (image URL)
 *  - date: string (e.g., 'Nov 15, 2023')
 *  - tag: string (e.g., 'UX Design')
 *  - title: string
 *  - description: string
 */
const ArticleBlogCard = ({ image, date, tag, title, description }) => {
  return (
    <div className="flex h-[547.125px] w-full max-w-[564px] flex-col overflow-hidden rounded-[24px] bg-white">
      <img
        src={image}
        alt={title}
        className="h-[393.125px] w-full rounded-3xl object-cover"
      />
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
        <div className="font-roboto flex-1 text-base leading-6 text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ArticleBlogCard;
