import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      product: "Body Cleanser (250ml)",
      price: 250,
      quantity: 1,
      total: 250,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      product: "Body Cleanser (250ml)",
      price: 250,
      quantity: 1,
      total: 250,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      product: "Body Cleanser (250ml)",
      price: 250,
      quantity: 1,
      total: 250,
    },
  ],
  reducers: {
    incrementQuantityById: (state, action) => {
      const id = action.payload;
      const product = state.find((product) => product.id === id);
      product.quantity += 1;
      product.total = product.quantity * product.price;
    },
    decrementQuantityById: (state, action) => {
      const id = action.payload;
      const product = state.find((product) => product.id === id);
      product.quantity -= 1;
      product.total = product.quantity * product.price;
    },
    deleteProductById: (state, action) => {
      const id = action.payload;
      const product = state.find((product) => product.id === id);
      const index = state.indexOf(product);
      state.splice(index, 1);
    },
  },
});

export const {
  incrementQuantityById,
  decrementQuantityById,
  deleteProductById,
} = cartSlice.actions;

export default cartSlice.reducer;
