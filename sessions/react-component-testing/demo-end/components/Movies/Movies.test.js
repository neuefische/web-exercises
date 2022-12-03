/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movies from ".";

const initialMovies = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders the initialMovies in a list", async () => {
  render(<Movies initialMovies={initialMovies} />);
  expect(screen.getByText("The Incredible Hulk")).toBeInTheDocument();
  expect(screen.getByText("Spiderman 1-25")).toBeInTheDocument();
  expect(screen.getByText("Lord of the Rings")).toBeInTheDocument();
});

test("renders a new movie when the form is submitted with a new movie name", async () => {
  render(<Movies initialMovies={initialMovies} />);
  const input = screen.getByLabelText("Name");
  const submitButton = screen.getByRole("button", { name: "Add" });
  await userEvent.type(input, "The Matrix");
  await userEvent.click(submitButton);
  expect(screen.getByText("The Matrix")).toBeInTheDocument();
});

test("a movie can be deleted", async () => {
  render(<Movies initialMovies={initialMovies} />);
  const deleteButton = screen.getByRole("button", {
    name: "delete The Incredible Hulk",
  });
  await userEvent.click(deleteButton);
  expect(screen.queryByText("The Incredible Hulk")).not.toBeInTheDocument();
  expect(screen.queryByText("Spiderman 1-25")).toBeInTheDocument();
  expect(screen.queryByText("Lord of the Rings")).toBeInTheDocument();
});

// test("the form is cleared after submitting a new movie", async () => {
//   render(<Movies initialMovies={[]} />);
//   const nameInput = screen.getByLabelText("Name");
//   const submitButton = screen.getByRole("button", { name: "Add" });
//   nameInput.value = "The Matrix";
//   await userEvent.click(submitButton);
//   expect(nameInput.value).toBe("");
// });

// test("the form is focused after submitting a new movie", async () => {
//   render(<Movies initialMovies={[]} />);
//   const nameInput = screen.getByLabelText("Name");
//   const submitButton = screen.getByRole("button", { name: "Add" });
//   nameInput.value = "The Matrix";
//   await userEvent.click(submitButton);
//   expect(nameInput).toHaveFocus();
// });

test("a movie can be liked", async () => {
  render(<Movies initialMovies={initialMovies} />);
  const likeButton = screen.getByRole("button", {
    name: "like The Incredible Hulk",
  });
  await userEvent.click(likeButton);
  expect(likeButton).toHaveAccessibleName("unlike The Incredible Hulk");
  expect(
    screen.getByRole("button", { name: "like Spiderman 1-25" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "unlike Lord of the Rings" })
  ).toBeInTheDocument();
});

test("a movie can be unliked", async () => {
  render(<Movies initialMovies={initialMovies} />);
  const likeButton = screen.getByRole("button", {
    name: "unlike Lord of the Rings",
  });
  await userEvent.click(likeButton);
  expect(likeButton).toHaveAccessibleName("like Lord of the Rings");
  expect(
    screen.getByRole("button", { name: "like The Incredible Hulk" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "like Spiderman 1-25" })
  ).toBeInTheDocument();
});
