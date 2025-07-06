import ScrollReveal from "../../components/ScrollReveal";

const StatsSection = () => (
    <div className="flex w-full flex-col items-center bg-transparent py-0">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center rounded-[32px] bg-white px-4 py-12 shadow-sm tablet:px-16">
        <ScrollReveal className="grid w-full grid-cols-1 gap-6 tablet:grid-cols-4">
          <div className="flex flex-col items-center">
            <span className="font-roboto text-[40px] font-bold text-gray-800 tablet:text-[44px]">
              700+
            </span>
            <span className="font-roboto mt-1 text-base text-gray-400">
              Clients
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-roboto text-[40px] font-bold text-gray-800 tablet:text-[44px]">
              40K
            </span>
            <span className="font-roboto mt-1 text-base text-gray-400">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-roboto text-[40px] font-bold text-gray-800 tablet:text-[44px]">
              10K+
            </span>
            <span className="font-roboto mt-1 text-base text-gray-400">
              Units sold
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-roboto text-[40px] font-bold text-gray-800 tablet:text-[44px]">
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

export default StatsSection;