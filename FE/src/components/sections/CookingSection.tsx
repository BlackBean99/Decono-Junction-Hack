import { COOKING_MENU } from "@/constants/main.ko";
import CardGroup from "../cards/Card";
import { useSwiper } from "swiper/react";

const CookingSection = () => {
  const swipe = useSwiper();

  return (
    <div>
      <div className="grid grid-cols-4">
        <CardGroup data={COOKING_MENU} />
      </div>
      <button
        className="py-2 px-4 rounded-full bg-white text-black hover:cursor-pointer"
        onClick={() => swipe.slideNext()}
      >
        Next
      </button>
    </div>
  );
};

export default CookingSection;
