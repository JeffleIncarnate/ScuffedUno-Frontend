import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import passwordSlice from "./reducers/passwordSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    password: passwordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
