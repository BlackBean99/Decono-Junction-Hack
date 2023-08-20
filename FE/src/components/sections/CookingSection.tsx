import CardGroup from "../cooking/Card";
import BackButton from "../common/BackButton";
import CloseButton from "../common/CloseButton";
import CookingNavbar from "../cooking/Navbar";
import CenterTitle from "../cooking/CenterTitle";

const CookingSection = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col pt-6 w-[14rem]">
        <BackButton />
        <CookingNavbar />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-baseline py-6">
          <CenterTitle />
          <CloseButton />
        </div>
        <CardGroup />
      </div>
    </div>
  );
};

export default CookingSection;
