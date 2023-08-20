import { KIOSK } from "@/constants/main.en";
import { VegiOptionAtom } from "@/store/options";
import { useAtom } from "jotai";
import classnames from "classnames";

const CookingNavbar = () => {
  const data = KIOSK.VEGI_OPTIONS;
  const [navbar, setNavbar] = useAtom(VegiOptionAtom);

  return (
    <div className="flex flex-col text-xl pl-6 pr-12 pt-6 w-[14rem]">
      {[{ TITLE: "All" }, ...data].map((item, index) => (
        <button
          className={classnames("text-left p-6 rounded-md", {
            "bg-[#1F732C] text-white": navbar === item.TITLE,
          })}
          key={index}
          onClick={() => setNavbar(item.TITLE)}
        >
          {item.TITLE}
        </button>
      ))}
    </div>
  );
};

export default CookingNavbar;
