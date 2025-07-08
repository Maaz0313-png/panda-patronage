import React from "react";
import ContactCard from "../components/ContactCard";
import {
  PiPhoneCallDuotone,
  PiRocketDuotone,
  PiCaretDown,
} from "react-icons/pi";
import { ChatsIcon, MapPinIcon } from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white px-2 py-12">
      {/* Header Section */}
      <div className="mb-10 flex flex-col items-center">
        <ScrollReveal as="span" className="mb-4 rounded-full bg-[#F5F6F9] px-4 py-1 text-xs tracking-widest text-gray-500">
          NEUTRA CONTACT
        </ScrollReveal>
        <ScrollReveal as="h1" className="mb-4 text-center text-4xl font-bold text-gray-900 tablet:text-5xl">
          Get in touch with us today!
        </ScrollReveal>
        <ScrollReveal as="p" className="max-w-xl text-center text-gray-500">
          Contact our sales and support teams for demos, onboarding assistance,
          or any product inquiries.
        </ScrollReveal>
      </div>
      {/* Contact Cards Section */}
      <div className="mb-12 flex w-full max-w-5xl flex-col gap-6 px-6 mx-auto tablet:flex-row">
        <ContactCard
          icon={
            <ChatsIcon size={32} weight="duotone" className="text-gray-900" />
          }
          title="Message us"
          description="Message us using our online chat system for quick and efficient support."
          address="support@neutra.com"
          protocol="mailto"
          cardClassName="border-[8px] w-full"
        />
        <ContactCard
          icon={<PiPhoneCallDuotone size={32} className="text-gray-900" />}
          title="Call us"
          description="Let's have a chat – there's nothing quite like talking to another person."
          address="+1(438) 000-0000"
          protocol="tel"
          cardClassName="border-[8px] w-full"
        />
        <ContactCard
          icon={
            <MapPinIcon size={32} weight="duotone" className="text-gray-900" />
          }
          title="Address"
          description="We'd be delighted to welcome you to our Head Office."
          address={"Montreal, Canada, 110 Notre-Dame St W"}
          cardClassName="border-[8px] w-full"
        />
      </div>
      {/* Contact Form Section */}
      <ScrollReveal className="flex w-full max-w-6xl flex-col justify-between gap-8 rounded-[24px] border-10 border-[#F5F6F9] bg-white p-8 shadow-sm tablet:flex-row">
        {/* Left Info */}
        <div className="mb-6 flex flex-1 flex-col tablet:mb-0">
          <div className="mb-3 flex items-center">
            <PiRocketDuotone size={32} className="mr-3 text-gray-900" />
          </div>
          <div className="mb-3 flex items-center">
            <span className="text-2xl font-normal text-gray-900">
              Feel free to send our friendly team a message
            </span>
          </div>
          <div className="mb-3 text-sm text-[#383838]">
            Message us using our online chat system for quick and efficient
            support.
          </div>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#313131]">
            <span>Free 7-day trial</span>
            <span>No credit card required</span>
            <span>Cancel anytime</span>
          </div>
        </div>
        {/* Right Form */}
        <form className="tablet:ml-auto flex w-full max-w-[420px] flex-col gap-4">
          <div className="w-full">
            <label className="mb-1 block text-xs text-black" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              className="w-full rounded-lg bg-[#F5F6F9] px-4 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[rgb(255,108,10)]"
            />
          </div>
          <div className="w-full">
            <label className="mb-1 block text-xs text-black" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@framer.com"
              className="w-full rounded-lg bg-[#F5F6F9] px-4 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[rgb(255,108,10)]"
            />
          </div>
          <div className="w-full">
            <label
              className="mb-1 block text-xs text-gray-500"
              htmlFor="location"
            >
              Location
            </label>
            <div className="relative">
              <select
                id="location"
                name="location"
                className="w-full appearance-none rounded-lg bg-[#F5F6F9] px-4 py-2 pr-10 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-[rgb(255,108,10)]"
              >
                <option value="">Select...</option>
                <option value="montreal">Montreal</option>
                <option value="toronto">Toronto</option>
                <option value="vancouver">Vancouver</option>
              </select>
              <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                <PiCaretDown size={20} />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:bg-[rgb(56,56,56)] hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
