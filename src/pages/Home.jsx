import HeroSection from "../sections/Home/HeroSection";
import WhatSetsUsApart from "../sections/Home/WhatSetsUsApart";
import OurServices from "../sections/Home/OurServices";
import ImpactStatement from "../sections/Home/ImpactStatement";
import PricingSection from "../sections/Home/PricingSection";
import TestimonialsSection from "../sections/Home/TestimonialsSection";
import ProjectShowcase from "../sections/Home/ProjectShowcase";
import FaqsSection from "../components/FaqsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatSetsUsApart />
      <OurServices />
      <ImpactStatement />
      <ProjectShowcase />
      <TestimonialsSection />
      <PricingSection />
      <FaqsSection />
    </>
  );
};

export default Home;
