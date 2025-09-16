import { memo } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-gray-700 pb-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">3legant.</h1>
            <p className="text-sm text-gray-400">Gift &amp; Decoration Store</p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="hover:text-white transition-colors"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-gray-400 text-sm">
          <p className="text-center md:text-left">
            © 2023 3legant. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
