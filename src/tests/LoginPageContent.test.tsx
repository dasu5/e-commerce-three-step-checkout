import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

import UserSlice, { UserSliceActions } from "../redux/features/user/UserSlice";
import LoginPageContent from "../components/login-page/LoginPageContent";
import { BrowserRouter } from "react-router-dom";

// Mock Redux store
const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

describe("LoginPageContent component", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <LoginPageContent />
      </Provider>
    );
    expect(screen.getByTestId("LOGIN_PAGE_TITLE")).toBeInTheDocument();
  });

  it("handles form submission and navigation", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginPageContent />
        </Provider>
      </BrowserRouter>
    );

    userEvent.type(screen.getByLabelText("Email Address"), "test@example.com");
    userEvent.click(screen.getByRole("button", { name: "Next" }));

    // Simulate user input
    fireEvent.change(screen.getByTestId("EMAIL"), {
      target: { value: "test@example.com" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByTestId("SUBMIT"));

    // Check if the Redux has been updated
    const actions = store.dispatch(
      UserSliceActions.setUserName("test@example.com")
    );
    expect(actions.payload).toEqual({
      type: "user/setUserName",
      payload: "test@example.com",
    });
  });
});
