import { render, screen } from "@testing-library/react";

import ThankYouPageContent from "../components/thank-you-page/ThankYouPageContent";

describe("ThankYouPageContent component", () => {
  it("renders without errors", () => {
    render(<ThankYouPageContent />);

    expect(screen.getByTestId("PAYMENT_PAGE_TITLE")).toBeInTheDocument();
    expect(screen.getByTestId("PAYMENT_PAGE_TITLE")).toHaveTextContent(
      "PAYMENT SUCCESS!"
    );
  });

  it("display the thank you confirmation", () => {
    render(<ThankYouPageContent />);

    expect(screen.getByTestId("PAYMENT_CONFIRMATION")).toBeInTheDocument();
  });
});
