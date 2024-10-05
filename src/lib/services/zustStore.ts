import { toast } from "sonner";
import { create } from "zustand";
import { ProductSchema } from "../schemas/zod";
import { z } from "zod";

type ProductProp = z.infer<typeof ProductSchema>;

type CartProp = {
  orderID: number;
  cart: ProductProp;
  removeItem: (id: number) => void;
  addTCart: (data: ProductProp) => void;
  clearCart: (id: number) => void;
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
  clearCart: (orderId) => {
    set(() => ({ cart: [] }));
    setTimeout(
      () =>
        toast(`Your order with id #${orderId} has been processed successfully`),
      500
    );
  },
}));

export default useStore;
