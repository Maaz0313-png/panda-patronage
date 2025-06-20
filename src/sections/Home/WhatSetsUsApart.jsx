import { PiGearDuotone, PiRocketDuotone } from "react-icons/pi";
import ScrollReveal from "../../components/ScrollReveal";
import { UsersThreeIcon } from "@phosphor-icons/react";

const WhatSetsUsApart = () => (
  <section className="bg-[#f6f7fa] py-16">
    <div className="mx-auto w-full px-4 text-center">
      <ScrollReveal>
        <h2
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          Explore What Sets Us Apart
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-700">
          Explore how we stand out with innovative solutions designed to raise
          your fulfillment
        </p>
      </ScrollReveal>
      <div className="mx-auto grid w-fit grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Card 1 */}
        <ScrollReveal className="flex flex-col items-start rounded-3xl bg-white p-8 text-left md:h-[260px] md:w-[373.328px]">
          <PiRocketDuotone className="mb-4" size={48} />
          <h3 className="mb-2 text-2xl font-normal text-gray-900">
            Planning Phase
          </h3>
          <p className="text-base text-gray-700">
            We map out the game plan upfront, deciding what needs to be done and
            when, so every step is clear and focused.
          </p>
        </ScrollReveal>
        {/* Card 2 */}
        <ScrollReveal className="flex flex-col items-start rounded-3xl bg-white p-8 text-left md:h-[260px] md:w-[373.328px]">
          <UsersThreeIcon weight="duotone" className="mb-4" size={48} />
          <h3 className="mb-2 text-2xl font-normal text-gray-900">
            Strategy Blueprint
          </h3>
          <p className="text-base text-gray-700">
            Once the plan is set, we craft a powerful strategy designed to drive
            your success and fuel your growth.
          </p>
        </ScrollReveal>
        {/* Card 3 */}
        <ScrollReveal className="flex flex-col items-start rounded-3xl bg-white p-8 text-left md:h-[260px] md:w-[373.328px]">
          <PiGearDuotone className="mb-4" size={48} />
          <h3 className="mb-2 text-2xl font-normal text-gray-900">
            Working Process
          </h3>
          <p className="text-base text-gray-700">
            With the plan and strategy in place, our team dive in wholeheartedly
            to propel your success.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhatSetsUsApart;
