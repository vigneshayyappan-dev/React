import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import fruitReducer from "../slices/fruitSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    fruitInfo: fruitReducer,
  },
});

export default store;
