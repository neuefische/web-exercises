import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    expect(screen.queryByLabelText("Count")).toBeInTheDocument();
    expect(screen.queryByText(0)).toBeInTheDocument();
  });

  it("renders the passed value prop", () => {
    render(<Counter value={5} />);
    expect(screen.queryByLabelText("Count")).toBeInTheDocument();
    expect(screen.queryByText(5)).toBeInTheDocument();
  });

  it("increments the value when clicking the increment button", () => {
    render(<Counter />);
    const button = screen.queryByText("Increment");
    act(() => button.click());
    expect(screen.queryByText(1)).toBeInTheDocument();
  });

  it("decrements the value when clicking the decrements button", () => {
    render(<Counter />);
    const button = screen.queryByText("Decrement");
    act(() => button.click());
    expect(screen.queryByText(-1)).toBeInTheDocument();
  });
});
