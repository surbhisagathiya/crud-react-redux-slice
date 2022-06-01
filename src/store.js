import { configureStore } from "@reduxjs/toolkit";
import tutorialReducer from "./slices/tutorialSlice";

const reducer = {
  tutorials: tutorialReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
