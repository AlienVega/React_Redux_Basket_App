import { createSlice } from "@reduxjs/toolkit";
import courseItem, { courses } from "../CourseItem";
interface CardState {
  cardItems: courses[];
  quantity: number;
  total: number;
}
const initialState: CardState = {
  cardItems: courseItem,
  quantity: 1,
  total: 0,
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action.payload);
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id != itemId);
    },
    increment: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      if (cardItem) {
        cardItem.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      if (cardItem && cardItem?.quantity > 0) {
        cardItem.quantity -= 1;
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;

      state.cardItems.forEach((item) => {
        total += item.quantity * Number(item.price);
        quantity += item.quantity;
      });

      state.quantity = quantity;
      state.total = total;
    },
  },
});
export const { clearCard, removeItem, increment, decrease, calculateTotal } =
  cardSlice.actions;
export default cardSlice.reducer;
