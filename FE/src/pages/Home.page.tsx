import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Section1 from "@/components/sections/Section1";
import CookingSection from "@/components/sections/CookingSection";
("../components/sections/Section1");

const MainPage = () => {
  return (
    <Swiper
      className="w-screen h-screen"
      slidesPerView={1}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <Section1 />
      </SwiperSlide>
      <SwiperSlide className="bg-blue-600">
        <CookingSection />
      </SwiperSlide>
      <SwiperSlide className="bg-amber-300"></SwiperSlide>
      <SwiperSlide className="bg-amber-900"></SwiperSlide>
    </Swiper>
  );
};

export default MainPage;
