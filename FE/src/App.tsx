import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import Page1 from "./pages/Page1";

const App = () => {
  return (
    <Swiper
      className="w-screen h-screen"
      modules={[Keyboard, Pagination, Navigation]}
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
    >
      <SwiperSlide>
        <Page1 />
      </SwiperSlide>
      <SwiperSlide className="bg-blue-600"></SwiperSlide>
      <SwiperSlide className="bg-amber-300"></SwiperSlide>
      <SwiperSlide className="bg-amber-900"></SwiperSlide>
    </Swiper>
  );
};

export default App;
