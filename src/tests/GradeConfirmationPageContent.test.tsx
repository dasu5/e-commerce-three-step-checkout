import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import GradeConfirmationPageContent from "../components/grade-confirmation-page/GradeConfirmationPageContent";
import UserSlice from "../redux/features/user/UserSlice";

// Mock Redux store
const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

describe("GradeConfirmationPageContent component", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <GradeConfirmationPageContent />
      </Provider>
    );
    expect(
      screen.getByText("CONFIRM YOUR CHILD'S GRADE LEVEL")
    ).toBeInTheDocument();
  });

  it("handles grade selection and updates Redux and localStorage", () => {
    render(
      <Provider store={store}>
        <GradeConfirmationPageContent />
      </Provider>
    );

    // Simulate a user clicking on a grade card
    fireEvent.click(screen.getByTestId("SENIOR"));

    // Check if the Redux state has been updated
    const state = store.getState();
    expect(state.user.grade).toEqual("SENIOR");

    // Check if localStorage has been updated
    expect(localStorage.getItem("grade")).toEqual("SENIOR");
  });
});
