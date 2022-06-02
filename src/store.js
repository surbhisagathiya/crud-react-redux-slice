import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./feactures/users/usersSlice";

export default configureStore({
  reducer: { users: usersReducer },
});
