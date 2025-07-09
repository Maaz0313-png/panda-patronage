import { BsEmojiSmile } from "react-icons/bs";
import ScrollReveal from "../../components/ScrollReveal";

const DirectorSection = () => (
  <div className="flex w-full flex-col items-center bg-transparent py-8">
    <div className="tablet:px-16 mx-auto flex w-full max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-4 py-16 shadow-sm">
      <div className="flex flex-col items-center">
        <ScrollReveal className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-300">
          <BsEmojiSmile className="text-2xl" />
        </ScrollReveal>
        <ScrollReveal
          as="h2"
          className="font-roboto tablet:text-4xl mb-4 text-center text-2xl font-bold"
        >
          Insights from Our Director
        </ScrollReveal>
        <ScrollReveal
          as="p"
          className="font-roboto tablet:text-lg mb-8 max-w-2xl text-center text-base text-gray-500"
        >
          Hear directly from our Agency Director about how Neutra is shaping the
          future of digital design and innovation.
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

export default DirectorSection;
