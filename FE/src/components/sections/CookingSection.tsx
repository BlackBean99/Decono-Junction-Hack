import { COOKING_MENU } from "@/constants/main.en";
import CardGroup from "../cards/Card";
import BackButton from "../common/BackButton";
import CloseButton from "../common/CloseButton";

const CookingSection = () => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-between">
        <BackButton />
        <CloseButton />
      </div>
      <CardGroup data={COOKING_MENU} />
    </div>
  );
};

export default CookingSection;
