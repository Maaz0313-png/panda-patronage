import { FiTwitter, FiDribbble, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#191919] h-[396px] text-white rounded-2xl m-4 pt-10 px-6 font-sans flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div className="md:col-span-1 flex flex-col justify-between">
          <img 
            src="https://framerusercontent.com/images/SbtkRyLYOLa1pNM5Vb7domSNKU.png?scale-down-to=512" 
            alt="Logo" 
            className="h-10 w-32 mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Get in touch to find out more about digital experiences to effectively reach and engage customers and target audiences.
          </p>
        </div>
        <div className="md:col-span-2 flex flex-row justify-end gap-20">
          <div>
            <h3 className="text-gray-300 text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><span className="text-gray-600 cursor-not-allowed">Contact</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-300 text-base font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold">Privacy Policy</a></li>
              <li><a href="/licensing" className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold">Licensing</a></li>
              <li><a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-auto w-full">
        <div className="max-w-6xl mx-auto border-t border-gray-800 flex flex-row justify-between items-center py-4 px-2">
          <p className="text-gray-500 text-sm">© Panda-Patronage 2025</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiDribbble size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;