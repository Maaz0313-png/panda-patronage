import ScrollReveal from "../../components/ScrollReveal";
import { motion } from "framer-motion";
const VendorSection = () => {
  return (
    <div className="bg-transparent py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-8 pt-12 pb-8 shadow-sm">
        <ScrollReveal className="tablet:flex-row mx-4 mb-8 flex w-full flex-col items-center justify-between">
          <h1 className="tablet:w-[524px] tablet:text-left mx-auto mb-4 justify-start text-center text-[48px] leading-tight font-bold">
            Not sure how to choose a vendor?
          </h1>
          <p className="tablet:w-[420px] tablet:text-left mx-auto mb-8 max-w-[600px] justify-end text-center text-[18px] font-normal text-[#222]">
            At Fulcrum we always find a way, also, we are courageously honest
            and we most certainly give a damn.
          </p>
        </ScrollReveal>
        <ScrollReveal
          as="img"
          src="/images/misc/vendor-workstation.jpg"
          alt="Workstation"
          className="block h-[360px] w-full max-w-[1136px] rounded-[28px] object-cover"
        />
      </div>
    </div>
  );
};
export default VendorSection;
