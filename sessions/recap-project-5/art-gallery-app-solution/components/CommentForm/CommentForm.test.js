import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "./index.js";

test("renders a form with a textarea, a label and a submit button with the name 'send'", () => {
  render(<CommentForm />);

  const form = screen.getByRole("form");
  const textarea = screen.getByLabelText("Add comment:");
  const button = screen.getByRole("button", { name: "Send" });

  expect(form).toContainElement(textarea);
  expect(button).toHaveAttribute("type", "submit");
});

test("calls addComment when submitting the form", async () => {
  const mockAddComment = jest.fn();
  const user = userEvent.setup();

  render(<CommentForm addComment={mockAddComment} />);

  const textarea = screen.getByLabelText("Add comment:");
  const button = screen.getByRole("button", { name: "Send" });

  await user.type(textarea, "Cool!");
  await user.click(button);

  expect(mockAddComment).toHaveBeenCalledWith("Cool!");
});

test("does not call addComment when submitting the form if textarea is empty", async () => {
  const mockAddComment = jest.fn();
  const user = userEvent.setup();

  render(<CommentForm addComment={mockAddComment} />);

  const textarea = screen.getByLabelText("Add comment:");
  const button = screen.getByRole("button", { name: "Send" });

  expect(textarea).toHaveValue("");

  await user.click(button);

  expect(mockAddComment).not.toHaveBeenCalled();
});
