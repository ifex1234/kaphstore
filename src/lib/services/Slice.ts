import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import { toast } from "sonner";

type CartItems = {
  id: string;
  image?: StaticImageData;
  price?: number;
  title?: string;
  icon?: string;
  category?: string;
  old?: number;
  percent?: number;
  qty: number;
}[];
//   }
const initialState = {
  store: <CartItems>[],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.store.push(actions.payload);
      setTimeout(() => toast("Item added to cart"), 2000);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.store.filter((item) => Number(item.id) != action.payload);
      setTimeout(() => toast("Item added to cart"), 1500);
    },
    increment: (state, action: PayloadAction<string>) => {
      const selectedItem = action.payload;
      const search = state.store.find((x) => x.id === selectedItem);

      if (search === undefined) {
        state.store.push({
          id: selectedItem,
          qty: 1,
        });
      } else {
        search.qty++;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const selectedItem = action.payload;
      const search = state.store.find((x) => x.id === selectedItem);

      if (search === undefined) return;
      else if (search.qty === 0) return;
      else {
        search.qty -= 1;
      }
    },
    clearCart: (state) => {
      state.store = [];
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } =
  counterSlice.actions;

export default counterSlice.reducer;
