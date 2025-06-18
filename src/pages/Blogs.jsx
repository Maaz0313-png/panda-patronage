import DiscoverSection from "../sections/Blogs/DiscoverSection";
import BlogGridSection from "../sections/Blogs/BlogGridSection";
import articles from "../data/articles";

const Blogs = () => {
  return (
    <>
      <DiscoverSection />
      <BlogGridSection articles={articles} />
      {/* sections here */}
    </>
  );
};

export default Blogs;
