import React from "react";
import image from "../../../assets/discount.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Discount = () => {
  return (
    <div className="bg-[#F3F5F7] flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <img src={image} alt="discount" className="w-full h-auto object-contain" />
      </div>

      <div className="w-full md:w-1/2 px-6 md:pl-[72px] max-w-[452px] flex flex-col gap-4 text-center md:text-left">
        <p className="text-[#377DFF] font-bold">SALE UP TO 35% OFF</p>
        <h3 className="font-medium text-[28px] md:text-[40px] md:w-[350px]">
          HUNDREDS of New lower prices!
        </h3>
        <p className="text-[16px] md:text-[20px] font-normal">
          It’s more affordable than ever to give every room in your home a stylish makeover
        </p>
        <span className="text-sm font-medium text-[#141718] cursor-pointer border-b border-[#141718] flex items-center gap-2 mt-6 mx-auto md:mx-0 max-w-[100px]">
          Shop Now <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Discount);
