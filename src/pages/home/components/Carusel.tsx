import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "../../../assets/swiper.png";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

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
        <div className="flex flex-col md:flex-row md:items-center text-center md:md:text-start  justify-between">
          <div className="text-[40px] tracking-tighter leading-[44px] font-[500] sm:text-5xl md:text-7xl font-poppins md:tracking-[-2px] md:leading-[76px]">
            <h1>
              Simply Unique<span className="text-gray-500">/</span>
            </h1>
            <h1>
              Simply Better<span className="text-gray-500">.</span>
            </h1>
          </div>
          <div className="w-full md:w-[40%] pr-0 md:pr-7 mt-4 md:mt-0">
            <span className="font-inter text-[#6C7275] text-[14px] md:text-[16px]">
              <b className="text-[#343839]">3legant</b> is a gift & decorations
              store based in HCMC, Vietnam. Est since 2019..
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Carusel);
