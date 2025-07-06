import VendorSection from "../sections/About/VendorSection";
import DirectorSection from "../sections/About/DirectorSection";
import StatsSection from "../sections/About/StatsSection";
import TeamSection from "../sections/About/TeamSection";
import FaqsSection from "../components/FaqsSection";

const About = () => {
  return (
    <div className="px-4">
      <VendorSection />
      <DirectorSection />
      <StatsSection />
      <TeamSection />
      <FaqsSection />
    </div>
  );
};

export default About;
