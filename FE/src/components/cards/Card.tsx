import { COOKING_MENU } from "@/constants/main.en";
import { CookingOptionAtom, VegiOptionAtom } from "@/store/options";
import { useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";
import { useSwiper } from "swiper/react";

interface CardProps {
  title: string;
  image: string;
  price: number;
}

const Card: FC<CardProps> = ({ image, price, title }) => {
  const swiper = useSwiper();
  const vegiOption = useAtomValue(VegiOptionAtom);
  const setCookingOption = useSetAtom(CookingOptionAtom);

  const onCardClick = () => {
    swiper.slideNext();
    setCookingOption((prev) => [
      ...prev,
      {
        title,
        price,
        count: 1,
        vegiType: vegiOption,
      },
    ]);
  };

  return (
    <button
      onClick={onCardClick}
      className="flex gap-2 flex-col items-center text-3xl"
    >
      <img
        className="object-cover rounded-md h-full max-h-96 w-full"
        src={image}
        alt={title}
      />
      <div className="font-semibold">{title}</div>
      <div>{price}</div>
    </button>
  );
};

interface CardGroupProps {
  data: typeof COOKING_MENU;
}

const CardGroup: FC<CardGroupProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-12">
      {data.map((menu, index) => (
        <Card
          key={index}
          image={menu.img}
          price={menu.price}
          title={menu.title}
        />
      ))}
    </div>
  );
};

export default CardGroup;
