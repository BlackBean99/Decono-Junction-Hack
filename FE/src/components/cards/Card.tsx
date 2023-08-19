import { COOKING_MENU } from "@/constants/main.ko";
import { FC } from "react";

interface CardProps {
  title: string;
  image: string;
  price: number;
}

const Card: FC<CardProps> = ({ image, price, title }) => {
  return (
    <div className="p-4">
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

interface CardGroupProps {
  data: typeof COOKING_MENU;
}

const CardGroup: FC<CardGroupProps> = ({ data }) => {
  return data.map((menu, index) => (
    <Card key={index} image={menu.img} price={menu.price} title={menu.title} />
  ));
};

export default CardGroup;
