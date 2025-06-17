import ScrollReveal from "../components/ScrollReveal";
import DiscoverSection from "../sections/Blogs/DiscoverSection";
import BlogGridSection from "../sections/Blogs/BlogGridSection";
import articles from "../data/articles";

const Blogs = () => {
  return (
    <>
      <ScrollReveal>
        <DiscoverSection />
      </ScrollReveal>
      <ScrollReveal>
        <BlogGridSection articles={articles} />
      </ScrollReveal>
      {/* sections here */}
    </>
  );
};

export default Blogs;
