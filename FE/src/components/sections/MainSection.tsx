import { FIRST_SECTION_TEXT } from "@/constants/main.en";
import { useSwiper } from "swiper/react";
import touchInducement from "@/assets/touch-inducement.json";
import { useLottie } from "lottie-react";

const MainSection = () => {
  const swipe = useSwiper();

  const segment: [number, number] = [0, 30];

  const options = {
    animationData: touchInducement,
    loop: true,
    speed: 0.3,
    initialSegment: segment,
  };

  const { View } = useLottie(options);

  return (
    <button
      className="w-full h-full flex justify-center items-center"
      onClick={() => swipe.slideNext()}
    >
      <div className="flex flex-col items-center">
        <div className="w-[16rem]">{View}</div>
        <div className="text-xl font-light -translate-y-6">
          {FIRST_SECTION_TEXT}
        </div>
      </div>
      <div className="absolute bottom-24">
        <img src="/icons/VEGET.svg" alt="veget" />
      </div>
    </button>
  );
};

export default MainSection;
