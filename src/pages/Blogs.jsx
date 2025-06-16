import ScrollReveal from "../components/ScrollReveal";
import DiscoverSection from "../sections/Blogs/DiscoverSection";
import BlogGridSection from "../sections/Blogs/BlogGridSection";

const Blogs = () => {
  return (
    <>
      <ScrollReveal>
        <DiscoverSection />
      </ScrollReveal>
      <ScrollReveal>
        <BlogGridSection />
      </ScrollReveal>
      {/* sections here */}
    </>
  );
};

export default Blogs;
