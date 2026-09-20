import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, actions) => {
      // Vanilla(older) Redux => DON"T MUTATE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(actions.payload);
      // return newState;

      // mutating the state here
      // Redux Toolkit
      // We HAVE to mutate the state here
      // So vanilla redux don't use it here but redux auto do this thing
      state.items.push(actions.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
