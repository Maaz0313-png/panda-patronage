import ArticleBlogCard from "../../components/ArticleBlogCard";
import ScrollReveal from "../../components/ScrollReveal";

const articles = [
  {
    image:
      "https://framerusercontent.com/images/vss98kimC7Rm3BkWtOJ4E7PF0.png?scale-down-to=512",
    date: "Nov 24, 2023",
    tag: "UX Design",
    title: "The UX Revolution: Shaping Digital Experiences",
    description:
      "User Experience (UX) design is at the forefront of creating digital products that users love.",
  },
  {
    image:
      "https://framerusercontent.com/images/5GbIrngxJhowImxRpAWUx622xc.png?scale-down-to=512",
    date: "Nov 24, 2023",
    tag: "UI Design",
    title: "Mastering UI Design Trends: A Deep Dive",
    description:
      "User Interface (UI) design is an art that constantly evolves. To create digital experiences that captivate and engage.",
  },
  {
    image:
      "https://framerusercontent.com/images/gEuLZWqISbowA6Z5TeEzISEsgs.jpg?scale-down-to=512",
    date: "Nov 23, 2023",
    tag: "Web design",
    title: "The Power of Responsive Web Design",
    description:
      "In today's digital landscape, where users access websites from various devices and screen sizes.",
  },
  {
    image:
      "https://framerusercontent.com/images/32Ao0YOpynUtm9KTYphzi9oT2eQ.jpg?scale-down-to=512",
    date: "Nov 15, 2023",
    tag: "UX Design",
    title: "Mastering the Craft of User Experience Design",
    description:
      "In the ever-changing landscape of digital design, UX design stands as a pillar of creating experiences that resonate.",
  },
  {
    image:
      "https://framerusercontent.com/images/KjsfCaVMvkjlLs2CFlHb4HZqE.jpg?scale-down-to=1024",
    date: "Nov 5, 2023",
    tag: "UX Design",
    title: "Revolutionizing UX Design",
    description:
      "Learn how exceptional UX design bridges the gap between users and products, fostering exceptional experiences.",
  },
  {
    image: "https://framerusercontent.com/images/CteRnkedt2SHUnA2jjD4Ds7Y.jpg",
    date: "Nov 22, 2023",
    tag: "Web design",
    title: "10 Web Design Trends to Watch in 2023",
    description:
      "In the ever-changing realm of web design, it's vital to keep your websites visually appealing and user-friendly.",
  },
  {
    image:
      "https://framerusercontent.com/images/QvhBmuXxN4j9e9lYPSdADXY9mE.jpg?scale-down-to=512",
    date: "Dec 27, 2023",
    tag: "Web design",
    title: "The Art of Responsive Web Design",
    description:
      "User experience is king in the digital age, making responsive web design vital for seamless websites.",
  },
  {
    image:
      "https://framerusercontent.com/images/IBw4Si6UN9kcQoOJzmLjrFRQ.jpg?scale-down-to=512",
    date: "Dec 6, 2023",
    tag: "Web design",
    title: "Boosting Website Performance with Smart Design Practices",
    description:
      "In the modern world, managing time efficiently is a skill that can significantly impact your personal and professional life.",
  },
  {
    image:
      "https://framerusercontent.com/images/GEAbPaLGvmC6oHqfJUtgkOIs4lA.jpg?scale-down-to=512",
    date: "Nov 3, 2023",
    tag: "UI Design",
    title: "Crafting Exceptional User Interfaces",
    description:
      "Task management isn't just about keeping track of everything on your plate, it's about knowing what to tackle first.",
  },
  {
    image:
      "https://framerusercontent.com/images/6RUmSize6gWxKuNHFjc2Kg9Vkos.jpg?scale-down-to=512",
    date: "Sep 23, 2023",
    tag: "UI Design",
    title:
      "Mastering Mobile UI Design: Best Practices for a Seamless Experience",
    description:
      "Discover how Taskify fosters seamless team collaboration, boosting productivity and improving communication.",
  },
];

const BlogGridSection = () => {
  return (
    <section className="font-roboto mx-auto w-full max-w-[1200px] px-4 py-20">
      <div className="mb-10 flex w-full justify-center">
        <div className="h-px w-3/4 bg-gray-200" />
      </div>
      <h2 className="mb-2 text-center text-[40px] leading-[56px] font-bold text-gray-900">
        Latest Guides & News Articles
      </h2>
      <p className="mb-12 text-center text-base text-gray-500">
        Stay informed with the latest guides and news.
      </p>
      <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div className="flex justify-center">
              <div className="w-[368px]">
                <ArticleBlogCard
                  {...article}
                  image={article.image}
                  date={article.date}
                  tag={article.tag}
                  title={article.title}
                  description={article.description}
                  cardClassName="w-[368px]"
                  imgClassName="w-[368px] h-[256.5px] rounded-[24px] object-cover"
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
