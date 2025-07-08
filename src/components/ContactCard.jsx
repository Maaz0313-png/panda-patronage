import React from "react";
import ScrollReveal from "./ScrollReveal";

const ContactCard = ({
  icon,
  title,
  description,
  address,
  protocol = "",
  cardClassName = "",
}) => (
  <ScrollReveal
    className={`flex flex-1 flex-col rounded-[24px] border border-[#F5F6F9] bg-white p-6 shadow-sm ${cardClassName}`}
  >
    <div className="mb-4">{icon}</div>
    <h5 className="mb-1 text-lg font-normal text-gray-900">{title}</h5>
    <p className="mb-4 w-full text-sm text-gray-500">{description}</p>
    <hr className="border-[#e6e6e6] w-full" />
    {protocol ? (
      <a
        href={`${protocol}:${address}`}
        className="pt-6 text-sm break-words text-gray-900"
      >
        {address}
      </a>
    ) : (
      <address className="pt-6 text-sm break-words text-gray-900 not-italic">
        {address}
      </address>
    )}
  </ScrollReveal>
);

export default ContactCard;
