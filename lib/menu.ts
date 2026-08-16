export type Category = "yakitori" | "izakaya" | "desserts" | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  jp: string;
  desc: string;
  price: number;
  category: Category;
  img: string;
  popular?: boolean;
  veg?: boolean;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  yakitori: "Yakitori",
  izakaya: "Izakaya",
  desserts: "Desserts",
  drinks: "Drinks",
};

export const MENU: MenuItem[] = [
  // ── Yakitori ──────────────────────────────────────────────
  {
    id: "tori",
    name: "Tori",
    jp: "鶏もも",
    desc: "Charcoal-grilled chicken thigh, tare glaze, sansho pepper.",
    price: 3.9,
    category: "yakitori",
    img: "/images/tori.jpg",
    popular: true,
  },
  {
    id: "negima",
    name: "Negima",
    jp: "ねぎま",
    desc: "Chicken thigh & spring leek, sea salt (shio).",
    price: 3.9,
    category: "yakitori",
    img: "/images/negima.jpg",
  },
  {
    id: "tsukune",
    name: "Tsukune",
    jp: "つくね",
    desc: "Hand-formed chicken meatball, tare glaze, free-range egg yolk dip.",
    price: 4.2,
    category: "yakitori",
    img: "/images/tsukune.jpg",
    popular: true,
  },
  {
    id: "buta-bara",
    name: "Buta Bara",
    jp: "豚バラ",
    desc: "Pork belly skewer, crispy edges, sweet soy & yuzu kosho.",
    price: 4.5,
    category: "yakitori",
    img: "/images/buta.jpg",
  },
  {
    id: "kawa",
    name: "Kawa",
    jp: "皮",
    desc: "Crispy chicken skin, seven-spice shichimi, lemon.",
    price: 3.5,
    category: "yakitori",
    img: "/images/kawa.jpg",
  },
  {
    id: "ebi",
    name: "Ebi",
    jp: "海老",
    desc: "Charcoal-grilled tiger prawn, smoked sea salt.",
    price: 4.8,
    category: "yakitori",
    img: "/images/ebi.jpg",
  },
  {
    id: "yasai",
    name: "Yasai",
    jp: "野菜",
    desc: "Shiitake, zucchini & cherry tomato skewer (vegan).",
    price: 3.6,
    category: "yakitori",
    img: "/images/veg.jpg",
    veg: true,
  },
  {
    id: "onigiri",
    name: "Yaki Onigiri",
    jp: "焼きおにぎり",
    desc: "Grilled rice ball, soy glaze, nori, miso butter.",
    price: 3.2,
    category: "yakitori",
    img: "/images/onigiri.jpg",
  },
  {
    id: "set",
    name: "Yakitori Set",
    jp: "焼き鳥セット",
    desc: "Chef's selection of 8 skewers — the full fire tour.",
    price: 18.9,
    category: "yakitori",
    img: "/images/hero.jpg",
    popular: true,
  },

  // ── Izakaya ───────────────────────────────────────────────
  {
    id: "edamame",
    name: "Edamame",
    jp: "枝豆",
    desc: "Steamed soybeans, flaky sea salt, shiso oil.",
    price: 4.5,
    category: "izakaya",
    img: "/images/edamame.jpg",
    veg: true,
  },
  {
    id: "gyoza",
    name: "Gyoza",
    jp: "餃子",
    desc: "Pan-fried pork dumplings (6), chili soy dip, chive.",
    price: 7.5,
    category: "izakaya",
    img: "/images/gyoza.jpg",
    popular: true,
  },
  {
    id: "karaage",
    name: "Karaage",
    jp: "唐揚げ",
    desc: "Twice-fried chicken, kewpie mayo, sudachi lemon.",
    price: 8.9,
    category: "izakaya",
    img: "/images/karaage.jpg",
  },
  {
    id: "takoyaki",
    name: "Takoyaki",
    jp: "たこ焼き",
    desc: "Octopus balls (6), takoyaki sauce, mayo, dancing bonito.",
    price: 7.9,
    category: "izakaya",
    img: "/images/takoyaki.jpg",
  },
  {
    id: "sashimi",
    name: "Sashimi Mori",
    jp: "刺身盛り",
    desc: "Chef's mixed sashimi platter — salmon, tuna, hamachi.",
    price: 16.9,
    category: "izakaya",
    img: "/images/sashimi.jpg",
  },
  {
    id: "nasu",
    name: "Nasu Dengaku",
    jp: "茄子田楽",
    desc: "Miso-glazed grilled eggplant, sesame, scallion.",
    price: 7.5,
    category: "izakaya",
    img: "/images/nasu.jpg",
    veg: true,
  },

  // ── Desserts ──────────────────────────────────────────────
  {
    id: "mochi",
    name: "Matcha Mochi",
    jp: "抹茶餅",
    desc: "Matcha mochi ice cream, kinako dust, black sesame.",
    price: 5.9,
    category: "desserts",
    img: "/images/mochi.jpg",
  },
  {
    id: "tiramisu",
    name: "Matcha Tiramisu",
    jp: "抹茶ティラミス",
    desc: "Layered matcha mascarpone, cocoa, ladyfinger.",
    price: 6.5,
    category: "desserts",
    img: "/images/tiramisu.jpg",
    popular: true,
  },

  // ── Drinks ────────────────────────────────────────────────
  {
    id: "sake",
    name: "Sake",
    jp: "日本酒",
    desc: "Chilled junmai sake — rotating brewer, ask your server.",
    price: 6.9,
    category: "drinks",
    img: "/images/sake.jpg",
  },
  {
    id: "highball",
    name: "Whisky Highball",
    jp: "ハイボール",
    desc: "Japanese whisky, soda, lemon twist.",
    price: 7.9,
    category: "drinks",
    img: "/images/highball.jpg",
    popular: true,
  },
  {
    id: "beer",
    name: "Asahi Draft",
    jp: "アサヒ",
    desc: "Crisp Japanese lager, 0.4 L.",
    price: 5.5,
    category: "drinks",
    img: "/images/beer.jpg",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    jp: "抹茶ラテ",
    desc: "Ceremonial-grade matcha, oat milk, honey.",
    price: 4.9,
    category: "drinks",
    img: "/images/matcha.jpg",
  },
];

export const formatPrice = (p: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(p);
