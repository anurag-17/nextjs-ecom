import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    wishlist: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.oneQuantityPrice = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.oneQuantityPrice = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
    addToWishlist: (state, action) => {
      const item = state.wishlist.find((p) => p.id === action.payload.id);
      if (!item) {
        state.wishlist.push({ ...action.payload });
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (p) => p.id !== action.payload.id
      );
    },
    removeAllFromCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  removeAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
