import React from "react";
import ArticleBlogCard from "../../components/ArticleBlogCard";
import ScrollReveal from "../../components/ScrollReveal";
import articles from "../../data/articles";
import { Link } from "react-router-dom";

const DiscoverSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-16">
      <ScrollReveal>
        <h2 className="tablet:text-4xl tablet:font-bold mb-12 text-center text-2xl leading-[56px] text-gray-900">
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
              imgClassName="rounded-[24px]"
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
