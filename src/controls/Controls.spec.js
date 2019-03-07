// Test away!
import React from "react";

import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

const mockFunc = jest.fn();

describe("\nControls component render test:", () => {
  it("• should render without crashing", () => {
    render(<Controls />);
  });
});

describe("\nControls component working buttons test:", () => {
  const componentWithProps = (
    <Controls locked={false} closed={true} toggleClosed={mockFunc} toggleLocked={mockFunc} />
  );

  it("• should have clickable button for toggling closed state", () => {
    const button = render(componentWithProps).getByText(/Open Gate/);
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalledTimes(1);
    mockFunc.mockClear();
  });

  it("• should have clickable button for toggling locked state", () => {
    const button = render(componentWithProps).getByText(/Lock Gate/);
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalled();
    mockFunc.mockClear();
  });
});

describe("\nControls component prop-based button text tests:", () => {
  it("• should display 'Open Gate' if closed prop is true", () => {
    const closedStatus = render(<Controls closed={true} />).getByText(
      /Open Gate/
    );
    expect(closedStatus).toBeInTheDocument();
  });

  it("• should display 'Close Gate' if closed prop is false", () => {
    const closedStatus = render(<Controls closed={false} />).getByText(
      /Close Gate/
    );
    expect(closedStatus).toBeInTheDocument();
  });

  it("• should display 'Lock Gate' if locked prop is true", () => {
    const lockStatus = render(<Controls locked={true} />).getByText(
      /Lock Gate/
    );
    expect(lockStatus).toBeInTheDocument();
  });

  it("• should display 'Unlock Gate' if locked prop is false", () => {
    const lockStatus = render(<Controls locked={false} />).getByText(
      /Unlock Gate/
    );
    expect(lockStatus).toBeInTheDocument();
  });
});

describe("\nControls component prop-based button disabling tests:", () => {
  it("• should have disabled closed status button if the gate is locked", () => {
    const button = render(<Controls closed={true} locked={true} />).getByText(/Open Gate/);
    expect(button.disabled).toBe(true);
  })
    
  it("• should have disabled lock status button if the gate is open", () => {
    const button = render(<Controls closed={false} locked={false} />).getByText(/Lock Gate/);
    expect(button.disabled).toBe(true);
  })
});