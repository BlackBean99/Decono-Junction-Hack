import { useLottie } from "lottie-react";
import doneCheck from "@/assets/done-check.json";

const DoneSection = () => {
  const options = {
    animationData: doneCheck,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-2">
      <div className="w-[9rem]">{View}</div>
      <div className="text-3xl">Order Completed </div>
      <div className="text-[#737373]">
        It will be served in <span className="text-[#139859] font-bold">8</span>
        minutes
      </div>
    </div>
  );
};

export default DoneSection;
