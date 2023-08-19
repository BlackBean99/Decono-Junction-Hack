import { FC } from "react";
import { useSwiper } from "swiper/react";

interface BackButtonProps {
  isDefault?: boolean;
}

const BackButton: FC<BackButtonProps> = ({ isDefault = true }) => {
  const swiper = useSwiper();

  const onBackButtonClick = () => {
    swiper.slidePrev();
  };

  return (
    <button onClick={onBackButtonClick} className="flex p-4 w-[20rem]">
      <img
        src={
          isDefault
            ? "/icons/chevron.backward.svg"
            : "/icons/chevron.backward.white.svg"
        }
        alt="back"
      />
    </button>
  );
};

export default BackButton;
