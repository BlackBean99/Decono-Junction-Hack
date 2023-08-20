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
        onSwiper={(swiper) => {
          swiper.on("slideChange", (e) => {
            // setProgress((e.activeIndex / (e.slides.length - 1)) * 100);
            setActiveIndex(e.activeIndex);
          });
        }}
      >
        <SwiperSlide>
          <MainSection />
        </SwiperSlide>
        <SwiperSlide>
          <VegiOptionSelectSection />
        </SwiperSlide>
        <SwiperSlide>
          <CookingSection />
        </SwiperSlide>
        <SwiperSlide>
          <DetailSection />
        </SwiperSlide>
        <SwiperSlide>
          <DoneSection />
        </SwiperSlide>
      </Swiper>
      <OrderButton isShow={activeIndex > 1 && activeIndex < 3} />
    </div>
  );
};

export default MainPage;
