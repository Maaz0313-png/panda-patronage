import { FiTwitter, FiDribbble, FiLinkedin } from "react-icons/fi";
import {
  PiDribbbleLogoDuotone,
  PiLinkedinLogoDuotone,
  PiTwitterLogoDuotone,
} from "react-icons/pi";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ScrollReveal className="tablet:px-6 m-4 flex flex-col justify-between rounded-2xl p-8 tablet:pt-12 font-sans text-white [background:linear-gradient(-25deg,black_55%,#7c2d12_100%)]">
      <div className="tablet:grid-cols-3 tablet:justify-between desktop:gap-12 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 pb-4">
        <div className="tablet:col-span-1 flex flex-col">
          <img
            src="/images/misc/footer-logo.png"
            alt="Logo"
            className="mb-3 h-10 w-32"
          />
          <p className="max-w-sm text-sm leading-relaxed text-white">
            Get in touch to find out more about digital experiences to
            effectively reach and engage customers and target audiences.
          </p>
        </div>
        <div className="tablet:flex tablet:flex-row tablet:justify-end tablet:gap-16 tablet:col-span-2 desktop:gap-20 grid grid-cols-2 gap-8">
          <div>
            <h3 className="mb-2 text-base font-semibold text-[#a7a7a7]">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Article
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-[#a7a7a7]">
              Legal
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/licensing"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Licensing
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-auto w-full">
        <div className="tablet:flex-row desktop:gap-0 desktop:justify-between flex w-full flex-col items-start justify-between gap-8 border-t border-gray-800 px-2 py-3">
          <p className="text-left text-sm text-gray-500">
            © Panda-Patronage 2025
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
            >
              <PiTwitterLogoDuotone size={20} />
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
            >
              <PiDribbbleLogoDuotone size={20} />
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white transition-colors duration-300 hover:text-[rgb(255,108,10)]"
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
