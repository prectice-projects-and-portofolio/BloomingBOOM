import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const calculateTotals = (state) => {
  state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalCost = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      calculateTotals(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      calculateTotals(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      calculateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;