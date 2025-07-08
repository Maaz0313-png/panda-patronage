import CasesIntro from "../sections/Cases/CasesIntro";
import ProjectShowcase from "../components/ProjectShowcase";
import FaqsSection from "../components/FaqsSection";

const cases = [
  {
    title: "Codify",
    img: "/images/projects/codify.png",
    tags: ["Agency", "Portfolio", "Saas"],
    url: "#",
  },
  {
    title: "Taskify",
    img: "/images/projects/taskify.png",
    tags: ["Business", "AI", "Saas"],
    url: "#",
  },
  {
    title: "Flexify",
    img: "/images/projects/flexify.png",
    tags: ["Saas", "AI", "Business"],
    url: "#",
  },
  {
    title: "Landify",
    img: "/images/projects/landify.png",
    tags: ["Business", "Portfolio", "Landing"],
    url: "#",
  },
  {
    title: "Nexus AI",
    img: "/images/projects/nexus-ai.png",
    tags: ["AI", "Saas", "Business"],
    url: "#",
  },
  {
    title: "Todofusion",
    img: "/images/projects/todofusion.png",
    tags: ["AI", "Business", "Agency"],
    url: "#",
  },
  {
    title: "Brandify",
    img: "/images/projects/taskify.png",
    tags: ["Branding", "Portfolio", "Saas"],
    url: "#",
  },
  {
    title: "MarketPro",
    img: "/images/projects/codify.png",
    tags: ["Marketing", "Business", "AI"],
    url: "#",
  },
  {
    title: "Insightly",
    img: "/images/projects/flexify.png",
    tags: ["Analytics", "Saas", "Business"],
    url: "#",
  },
  {
    title: "Creatify",
    img: "/images/projects/landify.png",
    tags: ["Creative", "Portfolio", "Agency"],
    url: "#",
  },
  {
    title: "Optima",
    img: "/images/projects/nexus-ai.png",
    tags: ["Optimization", "AI", "Saas"],
    url: "#",
  },
  {
    title: "Visionary",
    img: "/images/projects/todofusion.png",
    tags: ["Vision", "Business", "Portfolio"],
    url: "#",
  },
];

const Cases = () => {
  return (
    <>
      <CasesIntro />
      <ProjectShowcase cases={cases} />
      <FaqsSection />
    </>
  );
};

export default Cases;
