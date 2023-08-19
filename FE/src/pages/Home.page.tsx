import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MainSection from "@/components/sections/MainSection";
import VegiOptionSelectSection from "@/components/sections/VegiOptionSelectSection";
import LinearProgress from "@/components/common/LinearProgress";
import { useState } from "react";
import CookingSection from "@/components/sections/CookingSection";
import OrderButton from "@/components/order/OrderButton";

const MainPage = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <LinearProgress value={progress} />
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiper.on("slideChange", (e) => {
            setProgress((e.activeIndex / (e.slides.length - 1)) * 100);
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
        <SwiperSlide className="bg-amber-900"></SwiperSlide>
      </Swiper>
      <OrderButton />
    </div>
  );
};

export default MainPage;
