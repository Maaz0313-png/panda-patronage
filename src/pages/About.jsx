import VendorSection from "../sections/About/VendorSection";
import {
  DirectorSection,
  StatsSection,
} from "../sections/About/DirectorSection";
import TeamSection from "../sections/About/TeamSection";
import FaqsSection from "../components/FaqsSection";

const About = () => {
  return (
    <>
      <VendorSection />
      <DirectorSection />
      <StatsSection />
      <TeamSection />
      <FaqsSection />
    </>
  );
};

export default About;
