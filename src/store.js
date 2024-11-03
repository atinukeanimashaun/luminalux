import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/CartSlice';
import wishlistReducer from './slices/WishlistSlice';

const store = configureStore({

  reducer:{
    cart: cartReducer,
    wishlist: wishlistReducer,
  }

});

export default store;