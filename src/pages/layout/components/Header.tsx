import { memo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../../lib";

const Header = () => {
  const { pathname } = useLocation();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="flex justify-between p-[18px] items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>

            <ul className="flex h-6 gap-10 text-[#6C7275]">
              <li>
                <NavLink
                  to="/"
                  className={`${
                    pathname === "/"
                      ? "text-black font-medium"
                      : "text-[#6C7275]"
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={`${
                    pathname.startsWith("/shop")
                      ? "text-black font-medium"
                      : "text-[#6C7275]"
                  }`}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={`${
                    pathname.startsWith("/blog")
                      ? "text-black font-medium"
                      : "text-[#6C7275]"
                  }`}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`${
                    pathname.startsWith("/contact")
                      ? "text-black font-medium"
                      : "text-[#6C7275]"
                  }`}
                >
                  Contact us
                </NavLink>
              </li>
            </ul>

            <div className="flex gap-4 items-center">
              <Link to={"/account"}>
                <FaRegUser size={25} />
              </Link>
              <Link to={"/wishes"} className="relative">
                <FaRegHeart size={25} />
                {!!wishlist.length && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-[16px] h-[16px] px-[4px] flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to={"/cart"} className="relative">
                <IoCartOutline size={30} />
                {!!cart.length && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-[16px] h-[16px] px-[4px] flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
