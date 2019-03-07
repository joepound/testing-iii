import React from "react";

import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("\n Dashboard component render test:", () => {
  it("• should render without crashing", () => {
    render(<Dashboard />);
  });
});
