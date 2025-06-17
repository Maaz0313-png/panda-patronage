import React from "react";

const BLOG_IMAGE_URL =
  "https://framerusercontent.com/images/vss98kimC7Rm3BkWtOJ4E7PF0.png?scale-down-to=512";
const WRITER_IMAGE_URL =
  "https://framerusercontent.com/images/cfae5rVbOPJ9IKMr5XZltSR4.png";

export default function BlogDetailSection() {
  return (
    <section className="flex w-full flex-col items-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <a
          href="#"
          className="mb-6 flex items-center text-sm text-gray-500 hover:underline"
        >
          &larr; All article
        </a>
        <h1 className="mb-4 text-4xl leading-tight font-bold text-gray-900">
          The UX Revolution: Shaping Digital Experiences
        </h1>
        <div className="mb-8 flex w-fit items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <img
            src={WRITER_IMAGE_URL}
            alt="Anastasia Solovyova"
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm font-medium text-gray-900">
            Anastasia Solovyova
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 2"
              />
            </svg>
            4 min read
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 2"
              />
            </svg>
            Nov 24, 2023
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 01-8 0"
              />
            </svg>
            UX Design
          </span>
        </div>
        <img
          src={BLOG_IMAGE_URL}
          alt="The UX Revolution: Shaping Digital Experiences"
          className="mx-auto mb-10 h-[480px] w-full max-w-[762px] rounded-[12px] object-cover"
          style={{ aspectRatio: "762/480" }}
        />
        <div className="space-y-4 text-base leading-relaxed text-gray-700">
          <p>
            User Experience (UX) design is at the forefront of creating digital
            products that users love. In this post, we explore the ongoing
            revolution in UX design and its profound impact on shaping digital
            experiences.
          </p>
          <p>
            Discover how empathy-driven design, user research, and accessibility
            considerations are revolutionizing the UX landscape. We delve into
            the principles that guide UX designers to create interfaces that are
            not only visually appealing but also highly intuitive and inclusive.
          </p>
          <p>
            Whether you’re a seasoned UX designer or just starting your journey,
            this post will provide valuable insights into the evolving world of
            UX design, where users’ needs and experiences take center stage.
          </p>
        </div>
      </div>
    </section>
  );
}
