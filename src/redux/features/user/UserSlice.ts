import { createSlice } from "@reduxjs/toolkit";

import { localStorageKeys } from "../../../types/enums/LocalStorageKeys";

interface IUserSlice {
  userName: string | null;
  grade: string | null;
  subscribedPlan: string | null;
}

const initialState: IUserSlice = {
  userName: null,
  grade: null,
  subscribedPlan: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
      const username = state.userName;
      //save the user email in the local storage
      localStorage.setItem(
        localStorageKeys.LOGGED_USER,
        JSON.stringify(username)
      );
    },
    setGrade: (state, action) => {
      state.grade = action.payload;
      const grade = state.grade;
      //save the selected grade in the local storage
      localStorage.setItem(localStorageKeys.GRADE, JSON.stringify(grade));
    },
    setSubscribedPlan: (state, action) => {
      state.subscribedPlan = action.payload;
      const plan = state.subscribedPlan;
      //save the selected plan in the local storage
      localStorage.setItem(
        localStorageKeys.SUBSCRIPTION_PLAN,
        JSON.stringify(plan)
      );
    },
    clearUser: (state) => {
      state.userName = null;
    },
    clearGrade: (state) => {
      state.grade = null;
    },
    clearSubscribedPlan: (state) => {
      state.subscribedPlan = null;
    },
  },
});

export const UserSliceActions = UserSlice.actions;
export default UserSlice.reducer;
