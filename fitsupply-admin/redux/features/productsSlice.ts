import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
    // Add reducers for creating, updating, deleting products
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
