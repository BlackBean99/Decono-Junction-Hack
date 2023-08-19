export const APP_NAME = "Vegi";

export const FIRST_SECTION_TEXT = "Touch the screen to see the menu";

export const CLOSE_ALERT =
  "If you continue to exit the menu,\n all of the selected menus will be initialized.\nDo you still want to exit the menu?";

export const CLOSE = "Close";
export const CONFIRM = "Confirm";

export const KIOSK = {
  SELECT_OPTION: "What type of vegetarian are you?",
  IS_FIRST_VEGI: "",
  SHOW_ALL: {
    TITLE: "ALL",
    SUBTITLE: "I would like to see the menu without choosing",
  },
  VEGI_OPTIONS: [
    {
      TITLE: "Flexitarian",
      SUBTITLE: "Consume vegetables mainly, meat occasionally  ",
    },
    { TITLE: "Pollo", SUBTITLE: "Do not consume red meat at all" },
    { TITLE: "Pesco", SUBTITLE: "Consume fish and seafood" },
    { TITLE: "Lacto-ovo", SUBTITLE: "Consume eggs and dairy products" },
    { TITLE: "Ovo", SUBTITLE: "Consume eggs but not dairy products" },
    { TITLE: "Lacto", SUBTITLE: "Consume dairy products" },
    {
      TITLE: "Vegan",
      SUBTITLE: "Do not consume any animal products or by-products",
    },
    { TITLE: "Fruitarian", SUBTITLE: "Only consume fruits" },
  ],
};

export const COOKING_MENU = [
  {
    title: "Plant-based Steak",
    type: "Steak",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Plant-based Steak.png",
    price: 5000,
  },
  {
    title: "Black Bean Veggie Steak",
    type: "Steak",
    vegiType: ["Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Black Bean Veggie Steak.png",
    price: 5000,
  },
  {
    title: "Salmon Steak",
    type: "Steak",
    vegiType: ["Presco", "Pollo", "Flexitarian"],
    img: "/images/Salmon Steak.png",
    price: 5000,
  },
  {
    title: "Vegan Bolognese Pasta",
    type: "Pasta",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Vegan Bolognese Pasta.png",
    price: 5000,
  },
  {
    title: "Basil Pesto Pasta",
    type: "Pasta",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Basil Pesto Pasta.png",
    price: 5000,
  },
  {
    title: "Aglio e Olio",
    type: "Pasta",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Aglio e Olio.png",
    price: 5000,
  },
  {
    title: "Fruit Salad",
    type: "Salad",
    vegiType: [
      "Fruitarian",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Presco",
      "Pollo",
      "Flexitarian",
    ],
    img: "/images/Fruit Salad.png",
    price: 5000,
  },
  {
    title: "Salmon Salad",
    type: "Salad",
    vegiType: ["Presco", "Pollo", "Flexitarian"],
    img: "/images/Salmon Salad.png",
    price: 5000,
  },
  {
    title: "Pumpkin Pizza",
    type: "Pizza",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Pumpkin Pizza.png",
    price: 5000,
  },
  {
    title: "Vegan Sandwich",
    type: "Sandwich",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Presco", "Pollo", "Flexitarian"],
    img: "/images/Vegan Sandwich.png",
    price: 5000,
  },
  {
    title: "Beef Taco",
    type: "Sandwich",
    vegiType: ["Flexitarian"],
    img: "/images/Beef Taco.png",
    price: 5000,
  },
];
