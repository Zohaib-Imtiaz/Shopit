import { CartItemInterface } from "@/TypesAndInterfaces/Cart";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartState = CartItemInterface[];

const initialState: CartState = [
  {
    image: "/Edifier/R1280T/black s1.png",
    price: 100,
    quantity: 1,
    title: "Edifier R1280T",
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItemInterface>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    increment: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state[action.payload].quantity += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state[action.payload].quantity -= 1;
    },
    setQuantityAmount: (
      state,
      action: PayloadAction<{ quantity: number; index: number }>
    ) => {
      state[action.payload.index].quantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, increment, decrement, setQuantityAmount } =
  cartSlice.actions;

export const getCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
