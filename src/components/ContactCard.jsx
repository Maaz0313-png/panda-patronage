import React from "react";

const ContactCard = ({
  icon,
  title,
  description,
  detail,
  cardClassName = "",
}) => (
  <div
    className={`flex max-w-[340px] min-w-[260px] flex-1 flex-col rounded-[24px] border border-[#F5F6F9] bg-white p-6 shadow-sm ${cardClassName}`}
  >
    <div className="mb-4">{icon}</div>
    <div className="mb-1 text-lg font-semibold text-gray-900">{title}</div>
    <div className="mb-4 text-sm text-gray-500">{description}</div>
    <div className="my-2 border-t border-[#F5F6F9]" />
    <div className="mt-2 text-sm break-words text-gray-900">{detail}</div>
  </div>
);

export default ContactCard;
