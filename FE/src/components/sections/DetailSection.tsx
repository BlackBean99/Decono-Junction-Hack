import { COOKING_MENU, DETAIL_MENU } from "@/constants/main.en";
import { CookingOptionAtom } from "@/store/options";
import { useAtomValue } from "jotai";
import BackButton from "../common/BackButton";

const DetailSection = () => {
  const data = useAtomValue(CookingOptionAtom);

  return (
    <div className="overflow-auto w-full h-full">
      <div className="flex h-0">
        <div className="relative">
          <div className="h-96 overflow-hidden w-full absolute -z-20">
            <img
              className="object-center w-full -translate-y-[55rem] "
              src={COOKING_MENU.find((item) => item.title === data.title)?.img}
              alt={data.title}
            />
          </div>
          <div className="top-0 absolute h-96 w-full bg-gradient-to-b from-black via-70% via-transparent to-black -z-20"></div>
          <BackButton isDefault={false} />
          <div className="text-white h-80 flex flex-col justify-between pl-12">
            <div>
              <div className="text-4xl font-extrabold mb-2">
                Black Bean Plant-based Steak
              </div>
              <div>
                Plant-based meat is produced directly from plants. <div />
                <div>Tender, flavorful, and protein-packed. </div>
                <div>You wouldn’t know the difference!</div>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              {COOKING_MENU.find(
                (item) => item.title === data.title
              )?.vegiType.map((type, index) => (
                <div className="bg-white/50 p-2 " key={index}>
                  {type}
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 flex flex-col gap-4">
            <div>
              <div className="font-bold">Ingredients</div>
              <div>
                검은콩, 두부, 양파, 소금, 계란, 마늘, 옥수수, 완두콩, 빵가루,
                오일, 스테이크소스, 양송이버섯캔, 간장, 황설탕, 올리고당, 물,
                아스파라거스
              </div>
            </div>
            <div className="bg-[#2AAA3E3D] p-4">
              ✅ Don’t worry! We’ve got the insight, trustworthy data and
              expertised robots to create the perfect dish just for you.
            </div>
            <div className="bg-[#BCBCBC3D]">
              {DETAIL_MENU.map((menu, index) => {
                return (
                  <div key={index} className="p-4 pt-8 first:pt-0">
                    <div className="py-12">
                      <div className="text-2xl font-bold">{menu.TITLE}</div>
                      <div className="text-[#737373]">{menu.SUBTITLE}</div>
                    </div>
                    <div className="flex flex-wrap gap-[0.5rem_4rem] w-full justify-between">
                      {menu.SELECT.map((item, index) => (
                        <div
                          className="flex-1 min-w-fit flex gap-2 font-normal text-lg"
                          key={index}
                        >
                          <input
                            className="bg-transparent"
                            type="radio"
                            name={menu.TITLE}
                            id={menu.TITLE + index}
                            defaultChecked={index === 0}
                          />
                          <label htmlFor={menu.TITLE + index}>{item}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
