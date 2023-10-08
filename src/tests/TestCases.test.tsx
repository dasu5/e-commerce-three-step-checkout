import { render, screen } from "@testing-library/react";

import TestWithMockDataGrade from "./mock-data/TestWithMockDataGrade";
import { GradeDetails } from "../data/GradeDetails";
import TestWithMockDataPlans from "./mock-data/TestWithMockDataPlan";
import { SubscriptionPlanDetails } from "../data/SubscriptionPlanDetails";
import LoginPageContent from "../components/login-page/LoginPageContent";
import EmailForm from "../components/email-form/EmailForm";

test("Login page", () => {
  // render the component on virtual dom
  render(<LoginPageContent />);

  const title = screen.getByTestId("login-title");
  expect(title).toHaveTextContent("WELCOME TO THE EUKA FAMILY");
});

test("Emial form", () => {
  render(<EmailForm />);
  const email = screen.getByTestId("email");
  const submit = screen.getByTestId("on-submit");

  expect(email).toBeRequired();
  expect(email).toHaveAttribute("type", "email");
  expect(submit).toHaveAttribute("type", "submit");
});

test("Grade cards rendered successfully", () => {
  render(<TestWithMockDataGrade grades={GradeDetails} />);
  expect(screen.getByText(/grade/i)).toBeInTheDocument();
});

test("Payment plan cards rendered successfully", () => {
  render(<TestWithMockDataPlans grades={SubscriptionPlanDetails} />);
  expect(screen.getByText(/plans/i)).toBeInTheDocument();
});
