import { FIRST_SECTION_TEXT } from "@/constants/main.en";
import { useSwiper } from "swiper/react";

const MainSection = () => {
  const swipe = useSwiper();
  return (
    <button
      className="w-full h-full flex justify-center items-center text-4xl"
      onClick={() => swipe.slideNext()}
    >
      {FIRST_SECTION_TEXT}
    </button>
  );
};

export default MainSection;
