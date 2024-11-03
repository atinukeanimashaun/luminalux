import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
  },
  reducers: {
    addToWishlist(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(product => product._id === newProduct._id);
    
      if (!existingProduct) {
        state.products.push({
          _id: newProduct._id,
          name: newProduct.name,
          image: newProduct.image,
          price: Number(newProduct.price),
          quantity: 1,
          totalPrice: Number(newProduct.price),
        });
        console.log("Product added:", JSON.stringify(state.products));
      }
    }, 
        
    removeFromWishlist(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find(product => product._id === id);

      if (existingProduct) {
        state.products = state.products.filter(product => product._id !== id);
      }
    },
  },
});

// Export actions and reducer
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
