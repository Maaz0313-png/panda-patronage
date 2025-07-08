import DiscoverSection from "../sections/Blogs/DiscoverSection";
import BlogGridSection from "../sections/Blogs/BlogGridSection";
import articles from "../data/articles";

const Blogs = () => {
  return (
    <div className="bg-white">
      <DiscoverSection />
      <BlogGridSection articles={articles} />
      {/* sections here */}
    </div>
  );
};

export default Blogs;
