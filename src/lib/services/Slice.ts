import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

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
      console.log("added to cart");
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const newState = state.store.filter((item) => item.id !== action.payload);
      console.log("item removed", newState.length);
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
        search.qty += 1;
      }
    },
    // increment: (state, action: PayloadAction<string>) => {
    //   const selectedItem = action.payload;
    //   const search = state.store.find((x) => x.id === selectedItem);

    //   if (search === undefined) {
    //     state.store.push({
    //       id: selectedItem,
    //       qty: 1,
    //     });
    //   } else {
    //     search.qty += 1;
    //   }
    // },

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
