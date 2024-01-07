import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import roomSlice from "./reducers/roomSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    room: roomSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
