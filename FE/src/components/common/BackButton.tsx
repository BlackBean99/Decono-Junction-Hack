import { APP_NAME } from "@/constants/main.en";
import { useSwiper } from "swiper/react";

const BackButton = () => {
  const swiper = useSwiper();

  const onBackButtonClick = () => {
    swiper.slidePrev();
  };

  return (
    <button onClick={onBackButtonClick} className="flex p-4 w-[20rem]">
      <img src="/icons/chevron.backward.svg" alt="back" />
      <div>{APP_NAME}</div>
    </button>
  );
};

export default BackButton;
