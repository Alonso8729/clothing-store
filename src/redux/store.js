import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import wishlistReducer from './wishlistReducer'

export default combineReducers({
  cartReducer: {cart:cartReducer},
  wishlistReducer:{wishlist:wishlistReducer}
})