import React from "react";
import ArticleBlogCard from "../../components/ArticleBlogCard";
import ScrollReveal from "../../components/ScrollReveal";

// Sample data for the discover section
const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    date: "Nov 15, 2023",
    tag: "UX Design",
    title: "Crafting Exceptional User Experiences",
    description:
      "In the ever-changing landscape of digital design, UX design stands as a pillar of creating experiences that resonate.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    date: "Oct 12, 2023",
    tag: "UI Design",
    title: "UI Design: Elevating Experiences",
    description:
      "In the digital realm, UI design guides user journeys. Crafting remarkable experiences is at the core of web design.",
  },
];

const DiscoverSection = () => {
  return (
    <ScrollReveal
      as="section"
      className="font-roboto mx-auto w-full max-w-[1200px] px-4 pt-16"
    >
      <h2 className="mb-12 text-center text-[40px] leading-[56px] font-bold text-gray-900">
        Discover articles and
        <br />
        tutorials to help you build
        <br />
        better.
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {articles.map((article, idx) => (
          <ScrollReveal
            key={idx}
            delay={idx * 0.1}
            className="box-border max-w-[564px] min-w-[280px] flex-1"
          >
            <ArticleBlogCard {...article} />
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default DiscoverSection;
