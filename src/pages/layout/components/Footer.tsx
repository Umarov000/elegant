import { memo } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-gray-700 pb-6">
          <div>
            <h1 className="text-2xl font-bold">3legant.</h1>
            <p className="text-sm text-gray-400">Gift &amp; Decoration Store</p>
          </div>
          <nav>
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-gray-300">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-gray-400 text-sm">
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
