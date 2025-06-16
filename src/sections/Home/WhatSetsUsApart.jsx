import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import ScrollReveal from "../../components/ScrollReveal";

const WhatSetsUsApart = () => (
  <ScrollReveal>
    <section className="bg-[#f6f7fa] py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
          style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
        >
          Explore What Sets Us Apart
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-500">
          Explore how we stand out with innovative solutions designed to raise
          your fulfillment
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex min-h-[220px] flex-col items-start rounded-3xl bg-white p-8 text-left shadow-sm">
            <HiOutlineRocketLaunch className="mb-4 text-4xl text-gray-400" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Planning Phase
            </h3>
            <p className="text-base text-gray-500">
              We map out the game plan upfront, deciding what needs to be done
              and when, so every step is clear and focused.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex min-h-[220px] flex-col items-start rounded-3xl bg-white p-8 text-left shadow-sm">
            <HiOutlineUserGroup className="mb-4 text-4xl text-gray-400" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Strategy Blueprint
            </h3>
            <p className="text-base text-gray-500">
              Once the plan is set, we craft a powerful strategy designed to
              drive your success and fuel your growth.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex min-h-[220px] flex-col items-start rounded-3xl bg-white p-8 text-left shadow-sm">
            <HiOutlineCog6Tooth className="mb-4 text-4xl text-gray-400" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Working Process
            </h3>
            <p className="text-base text-gray-500">
              With the plan and strategy in place, our team dive in
              wholeheartedly to propel your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollReveal>
);

export default WhatSetsUsApart;
