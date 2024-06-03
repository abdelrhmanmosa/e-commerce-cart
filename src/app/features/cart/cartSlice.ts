// import { createSlice } from "@reduxjs/toolkit";
// import { IProduct } from "../../../interfaces";
// // import type { PayloadAction } from "@reduxjs/toolkit";

// interface CartState {
//   cartItems: IProduct[];
// }

// const initialState: CartState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
// });
// // export const { increaseAction, decreaseAction, resetAction } = counterSlice.actions;
// export default cartSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
// import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";
import { addItemToShoppingCart } from "../../../utils/functions";

interface CartState {
  cartItems: IProduct[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>) => {
      // state.cartItems = [...state.cartItems, actionPayload.payload];
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
// export const cartSelector = (state: RootState) => state.cart;
export const cartSelector = ({ cart }: RootState) => cart;
export default cartSlice.reducer;
