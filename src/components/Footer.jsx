import { FiTwitter, FiDribbble, FiLinkedin } from "react-icons/fi";
import {
  PiDribbbleLogoDuotone,
  PiLinkedinLogoDuotone,
  PiTwitterLogoDuotone,
} from "react-icons/pi";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
      <ScrollReveal className="flex flex-col justify-between m-4 rounded-2xl bg-gradient-to-tl from-black to-orange-900 px-4 py-10 tablet:px-6 font-sans text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 pb-8 tablet:grid-cols-3">
          <div className="flex flex-col justify-between tablet:col-span-1">
            <img
              src="https://framerusercontent.com/images/SbtkRyLYOLa1pNM5Vb7domSNKU.png?scale-down-to=512"
              alt="Logo"
              className="mb-4 h-10 w-32"
            />
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Get in touch to find out more about digital experiences to
              effectively reach and engage customers and target audiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 tablet:flex tablet:flex-row tablet:justify-end tablet:gap-20 tablet:col-span-2">
            <div>
              <h3 className="mb-3 text-base font-semibold text-gray-300">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-base font-semibold text-gray-300">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="font-semibold text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/licensing"
                    className="font-semibold text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Licensing
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="font-semibold text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-auto w-full">
          <div className="flex flex-col tablet:flex-row items-start gap-8 desktop:gap-0 desktop:justify-between justify-center border-t border-gray-800 px-2 py-4">
            <p className="text-sm text-gray-500">© Panda-Patronage 2025</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <PiTwitterLogoDuotone size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <PiDribbbleLogoDuotone size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <PiLinkedinLogoDuotone size={20} />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
  );
};

export default Footer;
