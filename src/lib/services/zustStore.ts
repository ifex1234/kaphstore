import { toast } from "sonner";
import { create } from "zustand";

enum Category {
  mobile_tablet,
  appliances,
  computers,
  groceries,
  electronics,
  fashion,
  beauty_health,
  home_office,
}
type ProductProp = {
  id?: number;
  price?: number;
  cartID?: number;
  currentPrice?: number;
  previousPrice?: number;
  category?: Category;
  imageUrl?: string;
  productUrl?: string;
  title?: string;
  quantity: number;
}[];
type ProductProp1 = {
  id?: number;
  currentPrice?: number;
  category?: Category;
  imageUrl?: string;
  title?: string;
  quantity: number;
};

type CartProp = {
  orderID: number;
  cart: ProductProp;
  removeItem: (id: number) => void;
  addTCart: (data: ProductProp) => void;
};

const id = Math.round(Math.random() * 10000000);
const useStore = create<CartProp>((set, get) => ({
  orderID: id,
  cart: [],
  addTCart: (data: ProductProp) => {
    set((state) => ({
      cart: state.cart.concat(data),
    }));
    setTimeout(() => toast("Item added to cart"), 500);
  },
  removeItem: (id: number) => {
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
    setTimeout(() => toast("Item removed from cart"), 500);
  },
}));

export default useStore;
