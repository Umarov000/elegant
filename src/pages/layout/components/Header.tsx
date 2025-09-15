import { memo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import shoppingBag from "../../../assets/ozodbek_shopping_bag.svg";
import searchIcon from "../../../assets/ozodbek_search.svg";
import profileIcon from "../../../assets/ozodbek_profile.svg";

const Header = () => {
  const { pathname } = useLocation();

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
                  to="/product"
                  className={`${
                    pathname.startsWith("/product")
                      ? "text-black font-medium"
                      : "text-[#6C7275]"
                  }`}
                >
                  Product
                </NavLink>
              </li>
            </ul>

            <div className="flex gap-4 items-center">
              <Link to={"/search"}>
                <img src={searchIcon} alt="search" />
              </Link>
              <Link to={"/account"}>
                <img src={profileIcon} alt="account" />
              </Link>
              <Link to={"/shop"}>
                <img src={shoppingBag} alt="shop" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
