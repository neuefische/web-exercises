/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("GameForm renders two input fields and a button", () => {
  render(<GameForm />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(/player names/i);
  const submitButton = screen.getByRole("button", { name: /create game/i });

  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("GameForm renders a form with the name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form", { name: "Create a new game" });

  expect(form).toBeInTheDocument();
});

test("GameForm submits form data when every field is filled out", async () => {
  const handleCreate = jest.fn();

  render(<GameForm onCreateGame={handleCreate} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(/player names/i);
  const submitButton = screen.getByRole("button", { name: /create/i });

  await userEvent.type(nameOfGameInput, "Dodelido");
  await userEvent.type(playerNamesInput, "Jane, John");
  await userEvent.click(submitButton);

  expect(handleCreate).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["Jane", "John"],
  });
});

test("GameForm does not submit form if one input field is left empty", () => {
  const handleCreate = jest.fn();
  render(<GameForm onCreateGame={handleCreate} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const submitButton = screen.getByRole("button", { name: /create/i });

  userEvent.type(nameOfGameInput, "Dodelido");
  userEvent.click(submitButton);

  expect(handleCreate).not.toHaveBeenCalled();
});
