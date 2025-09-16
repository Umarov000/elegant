// src/lib/features/ordersSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartProduct } from "./cartSlice";

interface IOrders {
  value: ICartProduct[];
}

const initialState: IOrders = {
  value: JSON.parse(localStorage.getItem("orders") || "[]") || [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    checkout: (state, action: PayloadAction<ICartProduct[]>) => {
      state.value.push(...action.payload);
      localStorage.setItem("orders", JSON.stringify(state.value));
    },
    clearOrders: (state) => {
      state.value = [];
      localStorage.setItem("orders", JSON.stringify(state.value));
    },
  },
});

export const { checkout, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
