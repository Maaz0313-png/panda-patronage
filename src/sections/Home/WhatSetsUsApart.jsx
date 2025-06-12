import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const WhatSetsUsApart = () => (
  <section className="bg-[#f6f7fa] py-16">
    <div className="max-w-5xl mx-auto text-center px-4">
      <h2
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
      >
        Explore What Sets Us Apart
      </h2>
      <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
        Explore how we stand out with innovative solutions designed to raise
        your fulfillment
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-start text-left min-h-[220px]">
          <HiOutlineRocketLaunch className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Planning Phase
          </h3>
          <p className="text-gray-500 text-base">
            We map out the game plan upfront, deciding what needs to be done and
            when, so every step is clear and focused.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-start text-left min-h-[220px]">
          <HiOutlineUserGroup className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Strategy Blueprint
          </h3>
          <p className="text-gray-500 text-base">
            Once the plan is set, we craft a powerful strategy designed to drive
            your success and fuel your growth.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-start text-left min-h-[220px]">
          <HiOutlineCog6Tooth className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Working Process
          </h3>
          <p className="text-gray-500 text-base">
            With the plan and strategy in place, our team dive in wholeheartedly
            to propel your success.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatSetsUsApart;
