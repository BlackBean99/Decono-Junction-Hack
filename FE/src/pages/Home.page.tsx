import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MainSection from "@/components/sections/MainSection";
import VegiOptionSelectSection from "@/components/sections/VegiOptionSelectSection";
import { useState } from "react";
import CookingSection from "@/components/sections/CookingSection";
import OrderButton from "@/components/order/OrderButton";
import DetailSection from "@/components/sections/DetailSection";
import DoneSection from "@/components/sections/DoneSection";

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-screen h-screen">
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        allowTouchMove={false}
        speed={500}
        loop={true}
        onSwiper={(swiper) => {
          swiper.on("slideChange", (e) => {
            setActiveIndex(e.activeIndex);
          });
        }}
      >
        <SwiperSlide className="bg-white">
          <MainSection />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <VegiOptionSelectSection />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <CookingSection />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <DetailSection />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <DoneSection />
        </SwiperSlide>
      </Swiper>
      <OrderButton isShow={activeIndex > 1 && activeIndex < 3} />
    </div>
  );
};

export default MainPage;
