import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {});

test("renders a form with the accessible name 'Create a new game'", () => {});

test("submits the correct form data when every field is filled out", async () => {});

test("does not submit form if one input field is left empty", async () => {});
