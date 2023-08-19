import { KIOSK } from "@/constants/main.en";
import { VegiOptionAtom } from "@/store/options";
import { useAtom } from "jotai";
import classnames from "classnames";

const CookingNavbar = () => {
  const data = KIOSK.VEGI_OPTIONS;
  const [navbar, setNavbar] = useAtom(VegiOptionAtom);

  return (
    <div className="flex flex-col text-xl px-6 pt-6">
      {[{ TITLE: "All" }, ...data].map((item, index) => (
        <button
          className={classnames("text-left p-6", {
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
