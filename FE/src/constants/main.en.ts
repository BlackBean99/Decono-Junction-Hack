export const APP_NAME = "VEGET";

export const FIRST_SECTION_TEXT = "Touch the screen to see the menu";

export const CLOSE_ALERT =
  "If you continue to exit the menu,\n all of the selected menus will be initialized.\nDo you still want to exit the menu?";

export const CLOSE = "Close";
export const CONFIRM = "Confirm";

export const KIOSK = {
  SELECT_OPTION: "What type of vegetarian are you?",
  IS_FIRST_VEGI: "",
  SHOW_ALL: {
    TITLE: "All",
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
    vegiType: [
      "Vegan",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Pesco",
      "Pollo",
      "Flexitarian",
    ],
    img: "/images/Plant-based Steak.png",
    price: 5000,
  },
  {
    title: "Black Bean Veggie Steak",
    type: "Steak",
    vegiType: ["Ovo", "Lacto-ovo", "Pesco", "Pollo", "Flexitarian"],
    img: "/images/Black Bean Veggie Steak.png",
    price: 5000,
  },
  {
    title: "Salmon Steak",
    type: "Steak",
    vegiType: ["Pesco", "Pollo", "Flexitarian"],
    img: "/images/Salmon Steak.png",
    price: 5000,
  },
  {
    title: "Vegan Bolognese Pasta",
    type: "Pasta",
    vegiType: [
      "Vegan",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Pesco",
      "Pollo",
      "Flexitarian",
    ],
    img: "/images/Vegan Bolognese Pasta.png",
    price: 5000,
  },
  {
    title: "Basil Pesto Pasta",
    type: "Pasta",
    vegiType: [
      "Vegan",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Pesco",
      "Pollo",
      "Flexitarian",
    ],
    img: "/images/Basil Pesto Pasta.png",
    price: 5000,
  },
  {
    title: "Aglio e Olio",
    type: "Pasta",
    vegiType: [
      "Vegan",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Pesco",
      "Pollo",
      "Flexitarian",
    ],
    img: "/images/Aglio e Olio.png",
    price: 5000,
  },
  {
    title: "Fruit Salad",
    type: "Salad",
    vegiType: [
      "Fruitarian",
      "Vegan",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Pesco",
      "Pollo",
      "Flexitarian",
    ],
    img: "/images/Fruit Salad.png",
    price: 5000,
  },
  {
    title: "Salmon Salad",
    type: "Salad",
    vegiType: ["Pesco", "Pollo", "Flexitarian"],
    img: "/images/Salmon Salad.png",
    price: 5000,
  },
  {
    title: "Pumpkin Pizza",
    type: "Pizza",
    vegiType: ["Lacto", "Ovo", "Lacto-ovo", "Pesco", "Pollo", "Flexitarian"],
    img: "/images/Pumpkin Pizza.png",
    price: 5000,
  },
  {
    title: "Vegan Sandwich",
    type: "Sandwich",
    vegiType: [
      "Vegan",
      "Lacto",
      "Ovo",
      "Lacto-ovo",
      "Pesco",
      "Pollo",
      "Flexitarian",
    ],
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

export const DETAIL_MENU = [
  {
    TITLE: "Plant-Based Meat",
    SUBTITLE: "choose the ingredient that you wish to take.",
    SELECT: [
      "Black Bean Only",
      "Black Bean + Mushroom (+1,000)",
      "Black Bean + Pumpkin",
      "Black Bean + Wheat",
    ],
    DEFAULT: "Black Bean Only",
  },
  {
    TITLE: "Bean Content",
    SUBTITLE: "choose the ingredient that you wish to take.",
    SELECT: ["30%", "40%", "50%", "60%"],
    DEFAULT: "50%",
  },
  {
    TITLE: "Degree of Doness",
    SUBTITLE: "choose the content of bean in plant based meat",
    SELECT: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
    DEFAULT: "Medium",
  },
  {
    TITLE: "Side menu",
    SUBTITLE: "what goes well with plant based steak?",
    SELECT: [
      "Baked Sweet Potato Wedges (+6,500)",
      "Garlic Mashed Potatoes (+6,000)",
      "Mediterranean Chickpea Wedge Salad (+12,000)",
      "Creamy Brussels Sprouts Bake (+5,400)",
      "Steamed Mushrooms (+3,500)",
    ],
  },
  {
    TITLE: "Sauce",
    SUBTITLE: "what goes well with plant based steak?",
    SELECT: [
      "BBQ Sauce",
      "Vegan Cashew Sauce",
      "Vegan Pesto Sauce",
      "Creamy Cilantro Sauce",
      "Cashew Cream Sauce",
    ],
    DEFAULT: "BBQ Sauce",
    ALERT_SELECT: ["Vegan Cashew Sauce", "Vegan Pesto Sauce"],
  },
];
