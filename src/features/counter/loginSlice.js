import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true;
    },
  },
});

export const { login } = loginSlice.actions;

export const selectlogin = (state) => state.login.value;

export default loginSlice.reducer;
