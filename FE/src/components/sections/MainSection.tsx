import { APP_NAME, FIRST_SECTION_TEXT } from "@/constants/main.en";
import { useSwiper } from "swiper/react";

const MainSection = () => {
  const swipe = useSwiper();

  return (
    <button
      className="w-full h-full flex justify-center items-center text-4xl "
      onClick={() => swipe.slideNext()}
    >
      <div className="flex flex-col gap-12">
        <div className="text-6xl">{APP_NAME}</div>
        <div>{FIRST_SECTION_TEXT}</div>
      </div>
    </button>
  );
};

export default MainSection;
