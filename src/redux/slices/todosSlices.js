import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    data: [
      { id: 1, text: "text", completed: false },
      { id: 2, text: "text2", completed: false },
      { id: 3, text: "text3", completed: false },
      { id: 4, text: "text4", completed: false },
      { id: 5, text: "text5", completed: false },
    ],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.data = [
        ...state.data,
        { id: v4(), completed: false, text: payload.text },
      ];
    },
    toggleTodo(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload.id
          ? { ...value, completed: !value.completed }
          : value
      );
    },
    removeTodo(state, { payload }) {
      state.data = state.data.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions; //setter
export default todoSlice.reducer; //getter
