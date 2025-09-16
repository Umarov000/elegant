import { memo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import type { RootState } from "../../../lib";

const Header = () => {
  const { pathname } = useLocation();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const cart = useSelector((state: RootState) => state.cart.value);

  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", active: pathname === "/" },
    { to: "/shop", label: "Shop", active: pathname.startsWith("/shop") },
    { to: "/blog", label: "Blog", active: pathname.startsWith("/blog") },
    {
      to: "/contact",
      label: "Contact us",
      active: pathname.startsWith("/contact"),
    },
  ];

  return (
    <header className="relative z-50">
      <div className="container">
        <nav>
          <div className="flex justify-between p-[18px] items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-8" />
            </Link>

            <ul className="hidden md:flex h-6 gap-10 text-[#6C7275]">
              {navLinks.map(({ to, label, active }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={`${
                      active ? "text-black font-medium" : "text-[#6C7275]"
                    }`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
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

              <button className="md:hidden" onClick={() => setOpen(true)}>
                <HiMenu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          {navLinks.map(({ to, label, active }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={`${
                  active ? "text-black font-medium" : "text-[#6C7275]"
                }`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
