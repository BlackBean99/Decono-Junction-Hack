import { COOKING_MENU } from "@/constants/main.en";
import CardGroup from "../cards/Card";

const CookingSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4">
        <CardGroup data={COOKING_MENU} />
      </div>
    </div>
  );
};

export default CookingSection;
