import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "../../../assets/swiper.png";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Carusel = () => {
  return (
    <section>
      <div className="pb-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mb-8"
        >
          <SwiperSlide>
            <img className="max-w-full" src={swiper} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="max-w-full" src={swiper} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="max-w-full" src={swiper} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-7xl font-poppins tracking-[-2px]">
              Simply Unique<span className="text-gray-500">/</span>
            </h1>
            <h1 className="text-7xl font-poppins tracking-[-2px]">
              Simply Better<span className="text-gray-500">.</span>
            </h1>
          </div>
          <div className="w-[40%] pr-7">
            <span className="font-inter text-[#6C7275] text-[16px]">
              <b className="text-[#343839]">3legant</b> is a gift & decorations
              store based in HCMC, Vietnam. Est since 2019.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Carusel);
