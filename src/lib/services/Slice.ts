// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { toast } from "sonner";

// enum Category {
//   mobile_tablet,
//   appliances,
//   computers,
//   groceries,
//   electronics,
//   fashion,
//   beauty_health,
//   home_office,
// }
// type ProductProp = {
//   id: number;
//   price?: number;
//   cartID?: number;
//   currentPrice?: number;
//   previousPrice?: number;
//   category?: Category;
//   imageUrl?: string;
//   productUrl?: string;
//   title?: string;
//   quantity: number;
// }[];
// //   }
// const initialState = {
//   store: <ProductProp>[],
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     addToCart: (state, actions) => {
//       state.store.push(actions.payload);
//       setTimeout(() => toast("Item added to cart"), 2000);
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.store.filter((item) => Number(item.id) !== action.payload);
//       setTimeout(() => toast("Item removed cart"), 1500);
//     },
//     removeFromCart1: (state, action) => {
//       const { productId } = action.payload;
//       state.store = state.store.filter((product) => product.id !== productId);
//     },
//     increment: (state, action: PayloadAction<number>) => {
//       const selectedItem = action.payload;
//       const search = state.store.find((x) => x.id === selectedItem);

//       if (search === undefined) {
//         state.store.push({
//           id: selectedItem,
//           quantity: 1,
//         });
//       } else {
//         search.quantity++;
//       }
//     },
//     decrement: (state, action: PayloadAction<number>) => {
//       const selectedItem = action.payload;
//       const search = state.store.find((x) => x.id === selectedItem);

//       if (search === undefined) return;
//       else if (search.quantity === 0) return;
//       else {
//         search.quantity -= 1;
//       }
//     },
//     clearCart: (state) => {
//       state.store = [];
//     },
//     checkOut: (state) => {
//       const newStore = JSON.parse(JSON.stringify(state.store));
//       state.store = [];
//       console.log(newStore);
//       return newStore;
//     },
//   },
// });

// export const {
//   addToCart,
//   increment,
//   decrement,
//   removeFromCart,
//   clearCart,
//   checkOut,
// } = counterSlice.actions;

// export default counterSlice.reducer;
