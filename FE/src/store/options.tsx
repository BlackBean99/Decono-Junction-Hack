import { atom } from "jotai";

export const VegiOptionAtom = atom("All");

interface CookingOptionAtom {
  title: string;
  price: number;
  count: number;
  vegiType: string;
}

export const CookingOptionAtom = atom<CookingOptionAtom>({
  title: "Plant-based Steak",
  price: 0,
  count: 1,
  vegiType: "All",
});
