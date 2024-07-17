import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.product = action.payload;
    },
    addNewProduct: (state, action) => {},
    addUpdateProduct: (state, action) => {},
  },
});

export const { addProducts, addNewProduct, addUpdateProduct } =
  productSlice.actions;

export const selectProducts = (state) => state.product;

export default productSlice.reducer;
