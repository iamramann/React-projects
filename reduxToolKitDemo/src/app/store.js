import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import authUserReducer from "../features/authUser/authUserSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authUserReducer,
  },
});
