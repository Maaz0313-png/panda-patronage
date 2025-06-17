import ArticleBlogCard from "../../components/ArticleBlogCard";
import ScrollReveal from "../../components/ScrollReveal";

const BlogGridSection = ({
  articles = [],
  title = "Latest Guides & News Articles",
  subtitle = "Stay informed with the latest guides and news.",
  className = "",
}) => {
  if (!articles.length) return null;
  return (
    <section
      className={`font-roboto mx-auto w-full max-w-[1200px] px-4 py-20 ${className}`}
    >
      <div className="mb-10 flex w-full justify-center">
        <div className="h-px w-3/4 bg-gray-200" />
      </div>
      <h2 className="mb-2 text-center text-[40px] leading-[56px] font-bold text-gray-900">
        {title}
      </h2>
      <p className="mb-12 text-center text-base text-gray-500">{subtitle}</p>
      <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div className="flex justify-center">
              <div className="w-[368px]">
                <ArticleBlogCard
                  {...article}
                  cardClassName="w-[368px]"
                  imgClassName="w-[368px] h-[256.5px] rounded-[24px] object-cover"
                  href={`/blog/${encodeURIComponent(article.slug)}`}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default BlogGridSection;
