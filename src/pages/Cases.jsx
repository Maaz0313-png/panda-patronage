import CasesIntro from "../sections/Cases/CasesIntro";
import ProjectShowcase from "../components/ProjectShowcase";
import FaqsSection from "../components/FaqsSection";

const cases = [
  {
    title: "Codify",
    img: "https://framerusercontent.com/images/C46rY8czFx8HjeyGBBr7SnlupM.png",
    tags: ["Agency", "Portfolio", "Saas"],
    url: "#",
  },
  {
    title: "Taskify",
    img: "https://framerusercontent.com/images/1EbsYvM5Gyb15ZgRtX8UF7b474.png",
    tags: ["Business", "AI", "Saas"],
    url: "#",
  },
  {
    title: "Flexify",
    img: "https://framerusercontent.com/images/ymBaWuyG4ivgK2aSTlKsfHD7cvo.png",
    tags: ["Saas", "AI", "Business"],
    url: "#",
  },
  {
    title: "Landify",
    img: "https://framerusercontent.com/images/mt2fx3NVaLd8pGv0ERaLEJmc4Y.png",
    tags: ["Business", "Portfolio", "Landing"],
    url: "#",
  },
  {
    title: "Nexus AI",
    img: "https://framerusercontent.com/images/kg3eNccUy41ywZMReAJv2nO80gc.png",
    tags: ["AI", "Saas", "Business"],
    url: "#",
  },
  {
    title: "Todofusion",
    img: "https://framerusercontent.com/images/qqgo5MbuI7VXnfS1E4CwLgt7BU.png",
    tags: ["AI", "Business", "Agency"],
    url: "#",
  },
  {
    title: "Brandify",
    img: "https://framerusercontent.com/images/1EbsYvM5Gyb15ZgRtX8UF7b474.png",
    tags: ["Branding", "Portfolio", "Saas"],
    url: "#",
  },
  {
    title: "MarketPro",
    img: "https://framerusercontent.com/images/C46rY8czFx8HjeyGBBr7SnlupM.png",
    tags: ["Marketing", "Business", "AI"],
    url: "#",
  },
  {
    title: "Insightly",
    img: "https://framerusercontent.com/images/ymBaWuyG4ivgK2aSTlKsfHD7cvo.png",
    tags: ["Analytics", "Saas", "Business"],
    url: "#",
  },
  {
    title: "Creatify",
    img: "https://framerusercontent.com/images/mt2fx3NVaLd8pGv0ERaLEJmc4Y.png",
    tags: ["Creative", "Portfolio", "Agency"],
    url: "#",
  },
  {
    title: "Optima",
    img: "https://framerusercontent.com/images/kg3eNccUy41ywZMReAJv2nO80gc.png",
    tags: ["Optimization", "AI", "Saas"],
    url: "#",
  },
  {
    title: "Visionary",
    img: "https://framerusercontent.com/images/qqgo5MbuI7VXnfS1E4CwLgt7BU.png",
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
