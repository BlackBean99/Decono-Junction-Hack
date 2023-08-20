import { KIOSK } from "@/constants/main.en";
import { VegiOptionAtom } from "@/store/options";
import { useAtomValue } from "jotai";

const CenterTitle = () => {
  const data = [
    { TITLE: "All", SUBTITLE: "Menus that our restaurant proudly presents" },
    ...KIOSK.VEGI_OPTIONS,
  ];

  const navbar = useAtomValue(VegiOptionAtom);

  return (
    <div className="flex gap-2 flex-1 text-xl">
      <div className="font-bold">{navbar}</div>
      <div className="font-light text-[#808080]">
        {data.filter((item) => item.TITLE === navbar)[0]?.SUBTITLE ||
          "Menus that our restaurant proudly presents"}
      </div>
    </div>
  );
};

export default CenterTitle;
