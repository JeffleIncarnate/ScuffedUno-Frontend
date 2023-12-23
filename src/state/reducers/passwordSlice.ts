import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface PasswordState {
  showPassword: boolean;
}

const initialState: PasswordState = {
  showPassword: false,
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    showPassword: (state) => {
      state.showPassword = true;
    },
    notShowPassword: (state) => {
      state.showPassword = false;
    },
  },
});

export const { showPassword, notShowPassword } = passwordSlice.actions;

export const selectPassword = (state: RootState) => state.password.showPassword;

export default passwordSlice.reducer;
