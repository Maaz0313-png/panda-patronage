import ScrollReveal from "../../components/ScrollReveal";
import { motion } from "framer-motion";
const VendorSection = () => {
  return (
    <div className="bg-transparent py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-8 pt-12 pb-8 shadow-sm">
        <ScrollReveal className="tablet:flex-row mx-4 mb-8 flex w-full flex-col items-center justify-between">
          <h1 className="mb-4 mx-auto tablet:w-[524px] text-center tablet:text-left justify-start text-[48px] leading-tight font-bold">
            Not sure how to choose a vendor?
          </h1>
          <p className="mb-8 mx-auto tablet:w-[420px] text-center tablet:text-left max-w-[600px] justify-end text-[18px] font-normal text-[#222]">
            At Fulcrum we always find a way, also, we are courageously honest
            and we most certainly give a damn.
          </p>
        </ScrollReveal>
        <ScrollReveal
          as="img"
          src="https://framerusercontent.com/images/5iuQOEMKfBLccEeTbmc2fFLN7Q.jpg"
          alt="Workstation"
          className="block h-[360px] w-full max-w-[1136px] rounded-[28px] object-cover"
        />
      </div>
    </div>
  );
};
export default VendorSection;
