import React from "react";
import { GoArrowRight } from "react-icons/go";
import furniture from "../../../assets/furniture.png";
import chair from "../../../assets/chair.png";
import toaster from "../../../assets/toaster.png";

const Funiture = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-6">
        <div
          className="row-span-2 h-[664px] p-12"
          style={{ backgroundImage: `url(${chair})` }}
        >
          <div>
            <h3 className="text-3xl font-poppins tracking-[-0.6px] mb-3">
              Living Room
            </h3>
            <span className="inline-block">
              <a
                href="#"
                className="relative flex items-center gap-2 font-inter tracking-[-0.4px] text-black pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Shop Now <GoArrowRight />
              </a>
            </span>
          </div>
        </div>
        <div
          className="px-8 py-10 bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${furniture})` }}
        >
          <div>
            <h3 className="text-3xl font-poppins tracking-[-0.6px] mb-3">
              Bedroom
            </h3>
            <span className="inline-block">
              <a
                href="#"
                className="relative flex items-center gap-2 font-inter tracking-[-0.4px] text-black pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Shop Now <GoArrowRight />
              </a>
            </span>
          </div>
        </div>
        <div
          className="px-8 py-10 bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${toaster})` }}
        >
          <div>
            <h3 className="text-3xl font-poppins tracking-[-0.6px] mb-3">
              Kitchen
            </h3>
            <span className="inline-block">
              <a
                href="#"
                className="relative flex items-center gap-2 font-inter tracking-[-0.4px] text-black pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Shop Now <GoArrowRight />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Funiture);
