import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import productsReducer from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    // Add orders and analytics slices here later
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
