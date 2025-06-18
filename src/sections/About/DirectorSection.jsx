import { BsEmojiSmile } from "react-icons/bs";
import ScrollReveal from "../../components/ScrollReveal";

const DirectorSection = () => (
    <div className="flex w-full flex-col items-center bg-[#f2f2f2] py-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-4 py-16 shadow-sm md:px-16">
        <div className="flex flex-col items-center">
          <ScrollReveal className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-300">
            <BsEmojiSmile className="text-2xl" />
          </ScrollReveal>
          <ScrollReveal as="h2" className="font-roboto mb-4 text-center text-[40px] font-bold md:text-[48px]">
            Insights from Our Director
          </ScrollReveal>
          <ScrollReveal as="p" className="font-roboto mb-8 max-w-2xl text-center text-lg text-gray-500">
            Hear directly from our Agency Director about how Neutra is shaping
            the future of digital design and innovation.
          </ScrollReveal>
          <ScrollReveal className="mt-4 flex flex-col items-center">
            <span className="font-greatvibes mb-2 text-[48px] leading-none text-gray-800">
              David Johnson
            </span>
            <span className="font-roboto text-xs tracking-widest text-gray-400 uppercase">
              CEO FOUNDER
            </span>
          </ScrollReveal>
        </div>
      </div>
    </div>
);

const StatsSection = () => (
  <div className="flex w-full flex-col items-center bg-[#f2f2f2] py-0">
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-4 py-12 shadow-sm md:px-16">
      <ScrollReveal className="grid w-full grid-cols-2 gap-6 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <span className="font-roboto text-[40px] font-bold text-gray-800 md:text-[44px]">
            700+
          </span>
          <span className="font-roboto mt-1 text-base text-gray-400">
            Clients
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-roboto text-[40px] font-bold text-gray-800 md:text-[44px]">
            40K
          </span>
          <span className="font-roboto mt-1 text-base text-gray-400">
            Projects
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-roboto text-[40px] font-bold text-gray-800 md:text-[44px]">
            10K+
          </span>
          <span className="font-roboto mt-1 text-base text-gray-400">
            Units sold
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-roboto text-[40px] font-bold text-gray-800 md:text-[44px]">
            99K+
          </span>
          <span className="font-roboto mt-1 text-base text-gray-400">
            Designed
          </span>
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export { DirectorSection, StatsSection };
