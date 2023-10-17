import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import ConfirmButton from "./ConfirmButton";

describe("ConfirmButton", () => {
  it("renders correctly", () => {
    render(<ConfirmButton label="Delete" dialogText="Are you sure?" />);
    expect(screen.queryByText("Delete")).toBeInTheDocument();
  });

  it("calls the onConfirm function when the OK button is pressed", () => {
    const confirmSpy = vi.spyOn(window, "confirm");
    confirmSpy.mockImplementation(vi.fn(() => true));

    const onConfirm = vi.fn();
    render(
      <ConfirmButton
        label="Delete"
        dialogText="Are you sure?"
        onConfirm={onConfirm}
      />
    );
    screen.queryByText("Delete").click();
    expect(onConfirm).toHaveBeenCalled();

    confirmSpy.mockRestore();
  });

  it("calls the onCancel function when the Cancel button is pressed", () => {
    const confirmSpy = vi.spyOn(window, "confirm");
    confirmSpy.mockImplementation(vi.fn(() => false));

    const onCancel = vi.fn();
    render(
      <ConfirmButton
        label="Delete"
        dialogText="Are you sure?"
        onCancel={onCancel}
      />
    );
    screen.queryByText("Delete").click();
    expect(onCancel).toHaveBeenCalled();

    confirmSpy.mockRestore();
  });
});
