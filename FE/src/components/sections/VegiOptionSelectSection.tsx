import { KIOSK } from "@/constants/main.en";
import { VegiOptionAtom } from "@/store/options";
import { useSetAtom } from "jotai";
import { useSwiper } from "swiper/react";

const VegiOptionSelectSection = () => {
  const setOption = useSetAtom(VegiOptionAtom);
  const swiper = useSwiper();
  const onSelectedOption = (value: string) => {
    setOption(value);
    swiper.slideNext();
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[51.5rem]">
        <div className="text-3xl my-8 font-bold text-center">
          {KIOSK.SELECT_OPTION}
        </div>
        <div className="grid grid-cols-2 gap-4 font-medium text-2xl">
          <button
            className="col-span-2 border bg-[#B4B4B4] border-[#B4B4B4] rounded-md py-4"
            onClick={() => onSelectedOption(KIOSK.SHOW_ALL.TITLE)}
          >
            <div>{KIOSK.SHOW_ALL.TITLE}</div>
            <div className="text-[#4E4E4E] text-base">
              {KIOSK.SHOW_ALL.SUBTITLE}
            </div>
          </button>
          {KIOSK.VEGI_OPTIONS.map((option, index) => (
            <button
              className="border border-[#B4B4B4] rounded-md py-4"
              onClick={() => onSelectedOption(option.TITLE)}
              key={index}
            >
              <div>{option.TITLE}</div>
              <div className="text-[#4E4E4E] text-base">{option.SUBTITLE}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VegiOptionSelectSection;
