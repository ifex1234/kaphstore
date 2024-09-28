import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
  price?: number;
  currentPrice?: number;
  previousPrice?: number;
  category?: Category;
  imageUrl?: string;
  productUrl?: string;
  title?: string;
  quantity: number;
};
type State = {
  state: ProductProp;
  id: number;
  cart: ProductProp1;
};

type CartProp = {
  cart: ProductProp;
  // increaseQty: (id: number | undefined) => void;
  // decreaseQty: (id:number) => void;
  removeItem: (id: number) => void;
  addTCart: (data: ProductProp) => void;
};
const useStore = create<CartProp>((set, get) => ({
  cart: [],
  // increaseQty: (data: ProductProp1) => {
  //   set((state) => ({
  //     cart: [...state.cart, { ...data, quantity: +1 }],
  //   }));
  // },
  // increaseQty: (id) => {
  //   const myCart = get().cart;
  //   const search = myCart.find((x) => x.id === id);
  //   if (search === undefined) return;
  //   else if (search.quantity === 0) return;
  //   else {
  //     set((state) => ({cart:{...search., state.cart[0].quantity  -= 1,} } ))
  //   }
  // },
  // increaseQty: (productId) => {
  //   const myCart = get().cart;
  //   set((state) => {
  //     const foundProduct = state.cart.find(
  //       (product) => product.id === productId
  //     );
  //     if (foundProduct) {
  //       foundProduct.quantity += 1;
  //     }
  //   });
  // },
  // decreaseQty: (productId) =>
  //   set((state) => {
  //     const foundIndex = state.cart.findIndex(
  //       (product) => product.id === productId
  //     );

  //     if (foundIndex !== -1) {
  //       if (state.cart[foundIndex].quantity === 1) {
  //         state.cart.splice(foundIndex, 1);
  //       } else {
  //         state.cart[foundIndex].quantity -= 1;
  //       }
  //     }
  //   }),
  // addToCart: (item) => set(state => ({ cart: [...state.cart, item] })),
  addTCart: (data: ProductProp) => {
    set((state) => ({
      cart: state.cart.concat(data),
    }));
    setTimeout(() => toast("Item added to cart"), 1000);
  },
  removeItem: (id: number) => {
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
  },
}));

export default useStore;

// const bookStore = (set, get) => ({
//   books: [],
//   noOfAvailable: 0,
//   noOfIssued: 0,
//   addBook: (book) => {
//     set((state) => ({
//       books: [...state.books, { ...book, status: "available" }],
//       noOfAvailable: state.noOfAvailable + 1,
//     }));
//   },
//   issueBook: (id) => {
//     const books = get().books;
//     const updatedBooks = books?.map((book) => {
//       if (book.id === id) {
//         return {
//           ...book,
//           status: "issued",
//         };
//       } else {
//         return book;
//       }
//     });
//     set((state) => ({
//       books: updatedBooks,
//       noOfAvailable: state.noOfAvailable - 1,
//       noOfIssued: state.noOfIssued + 1,
//     }));
//   },
//   returnBook: (id) => {
//     const books = get().books;
//     const updatedBooks = books?.map((book) => {
//       if (book.id === id) {
//         return {
//           ...book,
//           status: "available",
//         };
//       } else {
//         return book;
//       }
//     });
//     set((state) => ({
//       books: updatedBooks,
//       noOfAvailable: state.noOfAvailable + 1,
//       noOfIssued: state.noOfIssued - 1,
//     }));
//   },
//   reset: () => {
//     set({
//       books: [],
//       noOfAvailable: 0,
//       noOfIssued: 0,
//     });
//   },
// });
