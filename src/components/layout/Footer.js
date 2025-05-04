import { FaFacebookF, FaInstagram } from "react-icons/fa";
import FooterLink from "../ui/buttons/FooterButtons";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
        <div
            className="absolute inset-0 bg-[url(/images/footer-bg.png)] z-10 bg-cover bg-center opacity-100"
            aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-[#072C4C]" aria-hidden="true"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm md:text-base">
            
            {/* Logo + Description */}
            <div className="space-y-4">
                <div className="flex items-center">
                    <span className="bg-white text-orange-500 font-bold text-sm px-2 py-1 rounded-full">DIGI</span>
                    <span className="ml-2 text-white font-semibold text-lg">BUSINESS CARD</span>
                </div>
                <p className="text-gray-300">
                    Goodbye to paper business cards! Make your digital card in 2 minutes – it’s simple, stylish, and free. 
                    Your digital business card is always with you, doesn't tear or run out. 
                    Update easily with our dashboard, no reprints needed. 
                    Stay current, stay connected – embrace the future with our digital business cards!
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-orange-500 font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#process" className="hover:underline">Process</a></li>
                    <li><a href="#features" className="hover:underline">Features</a></li>
                    <li><a href="#demo" className="hover:underline">Demo Cards</a></li>
                    <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#blogs" className="hover:underline">Blogs</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>

            {/* Legal Pages */}
            <div>
                <h3 className="text-orange-500 font-semibold mb-3">Legal Pages</h3>
                <ul className="space-y-2 text-gray-300">
                    <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:underline">Terms And Conditions</a></li>
                    <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-orange-500 font-semibold mb-3">Contact Information</h3>
                <p className="text-gray-300 mb-2">
                    📍 Address:<br />
                    G-1 242, The Paradise Complex, opposite Agarwal Dharmshala,<br />
                    Sector 11, Hiran Magri, Udaipur, Rajasthan 313001
                </p>
                <p className="text-gray-300 mb-2">
                    📞 Phone: <a href="tel:+919783207700" className="text-blue-400 underline">+91-97832-07700</a>
                </p>
                <p className="text-gray-300">
                    📧 Email: <a href="mailto:info@digibcard.com" className="text-blue-400 underline">info@digibcard.com</a>
                </p>
            </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between relative max-w-7xl mx-auto px-6 pb-6 pt-4 z-20 border-t border-white/10">
            <div className="flex items-center gap-4 text-white">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-xl">
                    <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-xl">
                    <FaFacebookF />
                </a>
            </div>
            <p className="text-gray-300 mt-4 md:mt-0 text-center md:text-right text-sm">
            Copyright © 2025 <span className="font-semibold underline">digibcard.com</span> All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
