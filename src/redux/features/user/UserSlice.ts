import { createSlice } from "@reduxjs/toolkit";
import { localStorageKeys } from "../../../types/enums/LocalStorageKeys";

const initialState = {
  userName: null,
  grade: null,
  subscribedPlan: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRegistrationDetails: (state, action) => {
      state.userName = action.payload;
      const username = state.userName;

      //save the user email in local storage
      localStorage.setItem(
        localStorageKeys.LOGGED_USER,
        JSON.stringify(username)
      );
    },
    clearUser: (state) => {
      state.userName = null;
    },
  },
});

export const UserSliceActions = UserSlice.actions;
export default UserSlice.reducer;
