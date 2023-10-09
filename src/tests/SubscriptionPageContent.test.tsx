import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "../redux/features/user/UserSlice";
import { BrowserRouter } from "react-router-dom";
import SubscriptionPageContent from "../components/subscription-page/SubscriptionPageContent";

// Mock Redux store
const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

describe("SubscriptionPageContent component", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <SubscriptionPageContent />
      </Provider>
    );
    expect(screen.getByTestId("PLAN_PAGE_TITLE")).toBeInTheDocument();
  });

  it("handles plan selection and updates Redux and localStorage", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SubscriptionPageContent />
        </Provider>
      </BrowserRouter>
    );

    // Simulate a user clicking on a plan card
    fireEvent.click(screen.getByTestId("TERM_ONE"));

    // Check if the Redux state has been updated
    const state = store.getState();
    expect(state.user.subscribedPlan).toEqual("TERM_ONE");

    // Check if localStorage has been updated
    expect(localStorage.getItem("subscription")).toEqual("TERM_ONE");
  });
});
