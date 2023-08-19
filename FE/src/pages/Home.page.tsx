import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Page1 from "../components/Page1";

const MainPage = () => {
  return (
    <Swiper className="w-screen h-screen" slidesPerView={1}>
      <SwiperSlide>
        <Page1 />
      </SwiperSlide>
      <SwiperSlide className="bg-blue-600"></SwiperSlide>
      <SwiperSlide className="bg-amber-300"></SwiperSlide>
      <SwiperSlide className="bg-amber-900"></SwiperSlide>
    </Swiper>
  );
};

export default MainPage;
