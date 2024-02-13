import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./control/cardSlice";
// RootState tipini tanımla (bu, rootReducer'da kullanılacak)
export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({ reducer: { card: cardReducer } });

export type AppDispatch = typeof store.dispatch;
