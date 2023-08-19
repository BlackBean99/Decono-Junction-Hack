import { useSwiper } from "swiper/react";

const MainSection = () => {
  const swipe = useSwiper();
  return (
    <button
      className="w-full h-full text-white flex justify-evenly items-center text-4xl"
      onClick={() => swipe.slideNext()}
    ></button>
  );
};

export default MainSection;
