import { CONFIRM, COOKING_MENU, DETAIL_MENU } from "@/constants/main.en";
import { CookingOptionAtom } from "@/store/options";
import { useAtomValue } from "jotai";
import BackButton from "../common/BackButton";
import { useRef, useState } from "react";
import Modal from "react-modal";
import { useSwiper } from "swiper/react";
import DetailRadio from "../common/DetailRadio";

const DetailSection = () => {
  const data = useAtomValue(CookingOptionAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [selectSource, setSelectSource] = useState<string>("");
  const swiper = useSwiper();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            width: "20rem",
            height: "12rem",
            borderRadius: "1rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
          },
          overlay: {
            zIndex: 100,
            backdropFilter: "blur(10px) brightness(0.5)",
          },
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex h-full justify-center items-center flex-col flex-1 px-8 text-center font-light">
            <div>You have chose {selectSource} from BBQ Sauce.</div>
            <div>
              If you’re a Vegan vegetarian, you can now be able to enjoy this
              dish.
            </div>
          </div>
          <div className="flex justify-center p-4 w-full border-t text-[#1F732C] font-semibold text-sm">
            <button onClick={() => setIsOpen(false)}>{CONFIRM}</button>
          </div>
        </div>
      </Modal>
      <div className="overflow-auto w-full h-full" ref={scrollRef}>
        <div className="flex h-0 w-full">
          <div className="relative w-full">
            <div className="h-96 overflow-hidden w-full absolute -z-20">
              <img
                className="object-center w-full -translate-y-[55rem] "
                src={
                  COOKING_MENU.find((item) => item.title === data.title)?.img
                }
                alt={data.title}
              />
            </div>
            <div className="top-0 absolute h-96 w-full bg-gradient-to-b from-black via-70% via-transparent to-black -z-20"></div>
            <div className="py-2 translate-x-1 translate-y-2">
              <BackButton isDefault={false} />
            </div>
            <div className="text-white h-80 flex flex-col justify-between pl-12">
              <div>
                <div className="text-4xl font-extrabold mb-2">{data.title}</div>
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
                  <div className="bg-[#1F732CBC] p-2 " key={index}>
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 flex flex-col gap-4">
              <div>
                <div className="font-bold">Ingredients</div>
                <div className="text-[0.9rem]">
                  Black beans, tofu, onion, salt, egg, garlic, corn, peas, bread
                  crumbs, oil, steak sauce, mushroom can, soy sauce, brown
                  sugar, oligosaccharide, water, asparagus
                </div>
              </div>
              <div className="bg-[#2AAA3E3D] p-4 text-[#1F732C]">
                Don’t worry! We’ve got the insight, trustworthy data and
                expertised robots to create the perfect dish just for you.
              </div>
              <div className="bg-[#BCBCBC3D]">
                {DETAIL_MENU.map((menu, index) => {
                  return (
                    <div key={index} className="m-4">
                      <div className="mt-16 mb-4 first:mt-0">
                        <div className="text-2xl font-bold">{menu.TITLE}</div>
                        <div className="text-[#737373]">{menu.SUBTITLE}</div>
                      </div>
                      <div className="flex flex-col gap-2 w-full justify-between">
                        {menu.SELECT.map((item, index) => (
                          <DetailRadio
                            key={index}
                            index={index}
                            menu={menu}
                            item={item}
                            setIsOpen={setIsOpen}
                            setSelectSource={setSelectSource}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
                <div className="w-full flex justify-center my-8">
                  <button
                    className="bg-[#1F732C] text-white py-4 px-36"
                    onClick={() => {
                      swiper.slideNext();
                      scrollRef.current?.scrollTo(0, 0);
                    }}
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
