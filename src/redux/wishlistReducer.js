import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                // If the item exists, update it
                item.quantity += action.payload.quantity;
            } else {
                // If the item doesn't exist, add it to the wishlist
                state.items.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

    }
})

export const { removeFromWishlist, addToWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer