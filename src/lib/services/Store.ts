import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice";

export const myStore = configureStore({
  reducer: counterReducer,
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
