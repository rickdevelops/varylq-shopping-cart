import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      product: "Body Cleanser (250ml)",
      price: 250,
      quantity: 1,
      total: 250,
    },
    {
      id: 2,
      product: "Body Cleanser (250ml)",
      price: 250,
      quantity: 1,
      total: 250,
    },
    {
      id: 3,
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
      //   const product = state.filter((product) => product.id !== id);
      //   console.log("product", product, state);
      const index = state.indexOf(product);
      state.splice(index, 1);
      //   state = [...product];
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementQuantityById,
  decrementQuantityById,
  deleteProductById,
  increment,
  decrement,
  incrementByAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
