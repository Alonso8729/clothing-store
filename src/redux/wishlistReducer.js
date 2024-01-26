// Inside your wishlistReducer.js
import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.products.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
  },
});

export const { removeFromWishlist, addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
