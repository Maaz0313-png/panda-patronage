import ScrollReveal from "../../components/ScrollReveal";

const VendorSection = () => (
  <ScrollReveal>
    <div className="min-h-screen bg-[#f2f2f2] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-8 pt-12 pb-8 shadow-sm">
        <div className="mx-4 mb-8 flex w-full items-center justify-between">
          <h1 className="mb-4 w-[524px] justify-start text-[48px] leading-tight font-bold">
            Not sure how to choose a vendor?
          </h1>
          <p className="mb-8 w-[420px] max-w-[600px] justify-end text-[18px] font-normal text-[#222]">
            At Fulcrum we always find a way, also, we are courageously honest
            and we most certainly give a damn.
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/5iuQOEMKfBLccEeTbmc2fFLN7Q.jpg"
          alt="Workstation"
          className="block h-[360px] w-full max-w-[1136px] rounded-[28px] object-cover"
        />
      </div>
    </div>
  </ScrollReveal>
);

export default VendorSection;
