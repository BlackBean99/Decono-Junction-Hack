import { useSwiper } from "swiper/react";

const Section1 = () => {
  const sipwer = useSwiper();
  return (
    <div className="w-full h-full bg-black text-white flex justify-evenly items-center text-4xl">
      <button
        className="bg-white text-black rounded-full py-2 px-4 hover:cursor-pointer"
        onClick={() => sipwer.slideNext()}
      ></button>
    </div>
  );
};

export default Section1;
