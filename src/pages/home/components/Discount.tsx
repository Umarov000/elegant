import React from "react";
import image from "../../../assets/discount.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Discount = () => {
  return <div className="">
    <div className="flex items-center bg-[#F3F5F7]">
      <div className="w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="w-1/2 pl-[72px]  max-w-[452px] flex flex-col gap-4">
        <p className="text-[#377DFF] font-bold">SALE UP TO 35% OFF</p>
        <h3 className="font-medium text-[40px]  w-[350px]">HUNDREDS of New lower prices!</h3>
        <p className="text-[20px] font-normal">It’s more affordable than ever to give every room in your home a stylish makeover</p>
        <span className="text-sm font-medium text-[#141718] cursor-pointer border-b border-[#141718] flex items-center gap-2 mt-6 max-w-[100px]">
        Shop Now <FaArrowRightLong className=""/>
        </span>
      </div>
    </div>
  </div>;
};

export default React.memo(Discount);
