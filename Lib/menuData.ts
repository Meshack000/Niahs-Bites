export type MenuItem = {
  name: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "cakes-pastries",
    title: "Cake & Pastry",
    items: [
      { name: "Spring Rolls", price: "GH₵30" },
      { name: "Cake Parfait", price: "GH₵25 / 35 / 45" },
      { name: "Foil Cake", price: "GH₵35 / 65" },
      { name: "Mini Cake Loaf", price: "GH₵25" },
      { name: "Ring Doughnuts", price: "GH₵50 / 60 with toppings" },
      { name: "Butter Cookies", price: "GH₵30 / 50" },
      { name: "Bento Cake", price: "GH₵100" },
      { name: "Bento + 2 Cupcakes", price: "GH₵150" },
      { name: "Bento + 5 Cupcakes", price: "GH₵250" },
      { name: "Bento + 8 Cupcakes", price: "GH₵300" },
    ],
  },
  {
    id: "cupcakes-frosting",
    title: "Cupcakes — With Frosting",
    items: [
      { name: "24 Pieces", price: "GH₵400" },
      { name: "12 Pieces", price: "GH₵200" },
      { name: "6 Pieces", price: "GH₵100" },
      { name: "4 Pieces", price: "GH₵70" },
    ],
  },
  {
    id: "cupcakes-plain",
    title: "Cupcakes — Without Frosting",
    items: [
      { name: "24 Pieces", price: "GH₵330" },
      { name: "12 Pieces", price: "GH₵170" },
      { name: "6 Pieces", price: "GH₵80" },
      { name: "4 Pieces", price: "GH₵50" },
    ],
  },
  {
    id: "yoghurt",
    title: "Yoghurt",
    items: [
      { name: "Fresh Yoghurt — 250ml", price: "GH₵12" },
      { name: "Fresh Yoghurt — 1 Litre", price: "GH₵50" },
      { name: "Greek Yoghurt (Unsweetened) — 500ml", price: "GH₵45" },
      { name: "Greek Yoghurt (Unsweetened) — 1 Litre", price: "GH₵95" },
      { name: "Greek Yoghurt (Unsweetened) — 2 Litre", price: "GH₵180" },
      { name: "Greek Yoghurt (Sweetened) — 500ml", price: "GH₵50" },
      { name: "Greek Yoghurt (Sweetened) — 1 Litre", price: "GH₵100" },
      { name: "Greek Yoghurt (Sweetened) — 2 Litre", price: "GH₵190" },
      { name: "Granola", price: "GH₵50 / 110" },
    ],
  },
  {
    id: "spring-rolls",
    title: "Frozen Spring Rolls (10 pcs)",
    items: [
      { name: "Vegetables Only", price: "GH₵40" },
      { name: "Vegetables & Canned Beef", price: "GH₵50" },
      { name: "Beans", price: "GH₵40" },
    ],
  },
  {
    id: "samosa",
    title: "Frozen Samosa (10 pcs)",
    items: [
      { name: "Chicken & Vegetables", price: "GH₵60" },
      { name: "Canned Beef & Vegetables", price: "GH₵50" },
      { name: "Vegetables Only", price: "GH₵40" },
    ],
  },
  {
    id: "add-ons",
    title: "Add-ons",
    items: [
      { name: "Oreo", price: "GH₵5" },
      { name: "Candle", price: "GH₵5" },
      { name: "Card", price: "GH₵25" },
      { name: "Sprinkles", price: "GH₵5" },
      { name: "Non-edible Topper", price: "GH₵12" },
    ],
  },
];