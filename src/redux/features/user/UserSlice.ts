import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  grade: null,
  subscribedPlan: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
