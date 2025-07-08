import { useParams, Link } from "react-router-dom";
import BlogDetailSection from "../sections/BlogDetail/BlogDetailSection";
import articles from "../data/articles";
import BlogGridSection from "../sections/Blogs/BlogGridSection";

export default function BlogDetailDynamic() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">Blog not found</h2>
        <Link to="/blog" className="text-blue-600 underline">
          Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <>
      <BlogDetailSection article={article} />
      <BlogGridSection
        articles={articles.slice(0, 3)} // Only show the 3 latest articles
        title="Latest Articles"
        subtitle="Stay informed with the latest guides and news."
        className="mt-20 bg-white"
      />
    </>
  );
}
