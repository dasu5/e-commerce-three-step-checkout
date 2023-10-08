import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./features/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
