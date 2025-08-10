import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Add a unique identifier to each item
      state.items.push({ ...action.payload, cartItemId: uuidv4(), quantity: 1 });
    },
    removeFromCart: (state, action) => {
      // Use the unique cartItemId to remove the item
      state.items = state.items.filter((item) => item.cartItemId !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;