import { COOKING_MENU } from "@/constants/main.en";
import { CookingOptionAtom, VegiOptionAtom } from "@/store/options";
import { useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";
import { useSwiper } from "swiper/react";
import classnames from "classnames";

interface CardProps {
  title: string;
  image: string;
  price: number;
  isHide: boolean;
}

const Card: FC<CardProps> = ({ image, price, title, isHide }) => {
  const swiper = useSwiper();
  const vegiOption = useAtomValue(VegiOptionAtom);
  const setCookingOption = useSetAtom(CookingOptionAtom);

  const onCardClick = () => {
    if (title === "Plant-based Steak") {
      swiper.slideNext();
      setCookingOption({
        title: "Plant-based Steak",
        price: 0,
        count: 1,
        vegiType: vegiOption,
      });
    }
  };

  return (
    <button
      onClick={onCardClick}
      className={classnames("flex gap-4 flex-col items-center text-xl", {
        "grayscale opacity-50": isHide,
        "cursor-default": title !== "Plant-based Steak",
      })}
    >
      <img
        className="object-cover h-full max-h-64 w-full"
        src={image}
        alt={title}
      />
      <div className="flex flex-col">
        <div className="font-semibold">{title}</div>
        <div>{`${price.toLocaleString("KR", {
          maximumSignificantDigits: 3,
        })} ₩`}</div>
      </div>
    </button>
  );
};

const CardGroup = () => {
  const navbarValue = useAtomValue(VegiOptionAtom);

  return (
    <div className="h-full w-full overflow-auto border-t pt-6 border-[#C1C1C1]">
      <div className="flex h-0">
        <div className="grid grid-cols-3 gap-4 pl-6 pr-24">
          {COOKING_MENU.map((menu, index) => (
            <Card
              key={index}
              image={menu.img}
              price={menu.price}
              title={menu.title}
              isHide={
                navbarValue !== "All" &&
                menu.vegiType.findIndex((type) => type === navbarValue) === -1
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
