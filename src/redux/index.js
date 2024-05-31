import { configureStore } from "@reduxjs/toolkit";
import todoSlices from "./slices/todosSlices";

export default configureStore({
  reducer: {
    todo: todoSlices,
  },
});
