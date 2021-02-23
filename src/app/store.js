import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/counter/loginSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
