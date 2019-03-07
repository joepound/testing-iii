import React from "react";

import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("\nDisplay component render test:", () => {
  it("• should render without crashing", () => {
    render(<Display />);
  });
});

describe("\nDisplay component default value check tests:", () => {
  it("• should default to being unlocked", () => {
    const lockStatus = render(<Display />).getByText(/Unlocked/);
    expect(lockStatus).toBeInTheDocument();
  });

  it("• should default to being open", () => {
    const closedStatus = render(<Display />).getByText(/Open/);
    expect(closedStatus).toBeInTheDocument();
  });
});

describe("\nDisplay component prop-based text display tests:", () => {
  it("• should display 'Closed' if closed prop is true", () => {
    const closedStatus = render(<Display closed={true} />).getByText(/Closed/);
    expect(closedStatus).toBeInTheDocument();
  });

  it("• should display 'Open' if closed prop is false", () => {
    const closedStatus = render(<Display closed={false} />).getByText(/Open/);
    expect(closedStatus).toBeInTheDocument();
  });

  it("• should display 'Locked' if locked prop is true", () => {
    const lockStatus = render(<Display locked={true} />).getByText(/Locked/);
    expect(lockStatus).toBeInTheDocument();
  });

  it("• should display 'Unlocked' if locked prop is false", () => {
    const lockStatus = render(<Display locked={false} />).getByText(/Unlocked/);
    expect(lockStatus).toBeInTheDocument();
  });
});

describe("\nDisplay component prop-based styling tests:", () => {
  it("• should have the red-led class on lock display if closed prop is true", () => {
    const closedStatus = render(<Display closed={true} />).getByText(/Closed/);
    expect(Array.from(closedStatus.classList).includes("red-led")).toBe(true);
  });

  it("• should have the green-led class on lock display if closed prop is false", () => {
    const closedStatus = render(<Display closed={false} />).getByText(/Open/);
    expect(Array.from(closedStatus.classList).includes("green-led")).toBe(true);
  });

  it("• should have the red-led class on lock display if locked prop is true", () => {
    const lockStatus = render(<Display locked={true} />).getByText(/Locked/);
    expect(Array.from(lockStatus.classList).includes("red-led")).toBe(true);
  });

  it("• should have the green-led class on lock display if locked prop is false", () => {
    const lockStatus = render(<Display locked={false} />).getByText(/Unlocked/);
    expect(Array.from(lockStatus.classList).includes("green-led")).toBe(true);
  });
});
