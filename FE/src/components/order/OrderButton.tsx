import { FC } from "react";
import classnames from "classnames";

interface OrderButtonProps {
  isShow: boolean;
}

const OrderButton: FC<OrderButtonProps> = ({ isShow }) => {
  return (
    <button
      className={classnames(
        "flex justify-center font-medium text-2xl items-center text-white fixed right-12 bottom-16 h-24 w-24 bg-[#1F732C] border-2 border-[#C5C5C5] rounded-full hover:cursor-pointer z-[100]",
        isShow ? "visible" : "invisible"
      )}
    >
      Order
    </button>
  );
};

export default OrderButton;
