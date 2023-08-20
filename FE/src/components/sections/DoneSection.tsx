import { useLottie } from "lottie-react";
import doneCheck from "@/assets/done-check.json";
import { useSwiper } from "swiper/react";
import { useSetAtom } from "jotai";
import { CookingOptionAtom, VegiOptionAtom } from "@/store/options";

const DoneSection = () => {
  const swiper = useSwiper();
  const setVegiOption = useSetAtom(VegiOptionAtom);
  const setCookingOptionAtom = useSetAtom(CookingOptionAtom);

  const options = {
    animationData: doneCheck,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <button
      className="w-full h-full flex justify-center items-center flex-col gap-2"
      onClick={() => {
        // swiper.slideToLoop(0);
        swiper.slideNext();
        setVegiOption("All");
        setCookingOptionAtom({
          title: "Plant-based Steak",
          price: 0,
          count: 1,
          vegiType: "All",
        });
      }}
    >
      <div className="w-[9rem]">{View}</div>
      <div className="text-3xl">Order Completed </div>
      <div className="text-[#737373]">
        It will be served in <span className="text-[#139859] font-bold">8</span>
        minutes
      </div>
    </button>
  );
};

export default DoneSection;
