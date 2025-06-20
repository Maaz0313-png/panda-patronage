import React from "react";
import ArticleBlogCard from "../../components/ArticleBlogCard";
import ScrollReveal from "../../components/ScrollReveal";
import articles from "../../data/articles";

const DiscoverSection = () => {
  return (
    <section className="font-roboto mx-auto w-full max-w-[1200px] px-4 pt-16">
      <ScrollReveal>
        <h2 className="mb-12 text-center text-[40px] leading-[56px] font-bold text-gray-900">
          Discover articles and
          <br />
          tutorials to help you build
          <br />
          better.
        </h2>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-8">
        {articles.slice(1, 3).map((article, idx) => (
          <ScrollReveal
            key={idx}
            delay={idx * 0.1}
            className="box-border max-w-[564px] min-w-[280px] flex-1"
          >
            <ArticleBlogCard
              {...article}
              href={`/blog/${encodeURIComponent(article.slug)}`}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
