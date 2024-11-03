import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(product => product._id === newProduct._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += Number(newProduct.price); // Ensure price is treated as a number
      } else {
        state.products.push({
          _id: newProduct._id,
          name: newProduct.name,
          image: newProduct.image,
          price: Number(newProduct.price), // Convert to number
          quantity: 1,
          totalPrice: Number(newProduct.price), // Convert to number
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += Number(newProduct.price); // Convert to number
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find(product => product._id === id);

      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity;
        state.totalAmount -= existingProduct.totalPrice;
        state.products = state.products.filter(product => product._id !== id);
      }
    },
    clearCart(state) {
      state.products = [];
      state.totalAmount = 0;
      state.totalQuantity = 0; 
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.find(product => product._id === id);
    
      if (existingProduct && quantity >= 0) {
        const priceDiff = existingProduct.price * (quantity - existingProduct.quantity);
        
        existingProduct.quantity = quantity;
        existingProduct.totalPrice = existingProduct.price * quantity;
    
        state.totalAmount += priceDiff;
        state.totalQuantity += quantity - existingProduct.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
