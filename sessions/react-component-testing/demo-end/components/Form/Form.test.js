import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

test("calls the onAddMovie handler with inputs on submit", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();
  render(<Form onAddMovie={handleAddMovie} />);
  const nameInput = screen.getByLabelText("Name");
  const isLikedInput = screen.getByLabelText("Like");
  const submitButton = screen.getByRole("button", { name: "Add" });
  await user.type(nameInput, "The Matrix");
  await user.click(isLikedInput);
  await user.click(submitButton);
  expect(handleAddMovie).toHaveBeenCalledWith({
    name: "The Matrix",
    isLiked: true,
  });
});

test("does not call the onAddMovie handler when the form is submitted without a name", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();
  render(<Form onAddMovie={handleAddMovie} />);
  const submitButton = screen.getByRole("button", { name: "Add" });
  await user.click(submitButton);
  expect(handleAddMovie).not.toHaveBeenCalled();
});

test("clears the name input when the form is submitted", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();
  render(<Form onAddMovie={handleAddMovie} />);
  const nameInput = screen.getByLabelText("Name");
  const submitButton = screen.getByRole("button", { name: "Add" });
  await user.type(nameInput, "The Matrix");
  await user.click(submitButton);
  expect(nameInput).toHaveValue("");
});

test("clears the isLiked input when the form is submitted", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();
  render(<Form onAddMovie={handleAddMovie} />);
  const nameInput = screen.getByLabelText("Name");
  const isLikedInput = screen.getByLabelText("Like");
  const submitButton = screen.getByRole("button", { name: "Add" });
  await user.type(nameInput, "The Matrix");
  await user.click(isLikedInput);
  await user.click(submitButton);
  expect(isLikedInput).not.toBeChecked();
});

test("focusses the name input when the form is submitted", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();
  render(<Form onAddMovie={handleAddMovie} />);
  const nameInput = screen.getByLabelText("Name");
  const submitButton = screen.getByRole("button", { name: "Add" });
  await user.type(nameInput, "The Matrix");
  await user.click(submitButton);
  expect(nameInput).toHaveFocus();
});
