/* eslint-disable no-undef */
// using jest and react testing library, test the following:
//
// 1. that the component renders the initialMovies in a list
// 2. that the component renders the form
// 3. that the component renders renders a new movie when the form is submitted with a new movie name
// 4. that a movie can be deleted
// 5. that a movie can be liked
// 6. that a movie can be unliked
// 7. that the form is cleared after submitting a new movie
// 8. that the form is focused after submitting a new movie
// 9. that the form is not submitted when the name is empty

import { render } from "@testing-library/react";
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

test("renders the initialMovies in a list", () => {
  const { getByText } = render(<Movies initialMovies={initialMovies} />);
  expect(getByText("The Incredible Hulk")).toBeInTheDocument();
  expect(getByText("Spiderman 1-25")).toBeInTheDocument();
  expect(getByText("Lord of the Rings")).toBeInTheDocument();
});

test("renders the form", () => {
  const { getByLabelText } = render(<Movies initialMovies={initialMovies} />);
  expect(getByLabelText("Movie Name")).toBeInTheDocument();
});

test("renders renders a new movie when the form is submitted with a new movie name", () => {
  const { getByLabelText, getByText, getAllByRole } = render(
    <Movies initialMovies={initialMovies} />
  );
  const input = getByLabelText("Movie Name");
  const submitButton = getAllByRole("button").filter({ type: "submit" })[0];
  input.value = "The Matrix";
  submitButton.click();
  expect(getByText("The Matrix")).toBeInTheDocument();
});

test("a movie can be deleted", () => {
  const { queryByText, getByTitle } = render(
    <Movies initialMovies={initialMovies} />
  );
  const deleteButton = getByTitle("delete movie");
  deleteButton.click();
  expect(queryByText("The Incredible Hulk")).not.toBeInTheDocument();
});

test("the form is cleared after submitting a new movie", () => {
  const { getByLabelText, getAllByRole } = render(
    <Movies initialMovies={initialMovies} />
  );
  const nameInput = getByLabelText("Name");
  const submitButton = getAllByRole("button").filter({ type: "submit" })[0];
  nameInput.value = "The Matrix";
  submitButton.click();
  expect(nameInput.value).toBe("");
});

test("the form is focused after submitting a new movie", () => {
  const { getByLabelText, getAllByRole } = render(
    <Movies initialMovies={initialMovies} />
  );
  const nameInput = getByLabelText("Name");
  const submitButton = getAllByRole("button").filter({ type: "submit" })[0];
  nameInput.value = "The Matrix";
  submitButton.click();
  expect(nameInput).toHaveFocus();
});

test("the form is not submitted when the name is empty", () => {
  const { getByLabelText, queryByText } = render(
    <Movies initialMovies={initialMovies} />
  );
  const nameInput = getByLabelText("Name");
  const submitButton = getAllByRole("button").filter({ type: "submit" })[0];
  nameInput.value = "";
  submitButton.click();
  expect(queryByText("")).not.toBeInTheDocument();
});

test("a movie can be liked", () => {
  const { getByTitle } = render(<Movies initialMovies={initialMovies} />);
  const likeButton = getByTitle("like movie");
  likeButton.click();
  expect(likeButton).toHaveAttribute("title", "unlike movie");
});

test("a movie can be unliked", () => {
  const { getByTitle } = render(<Movies initialMovies={initialMovies} />);
  const likeButton = getByTitle("unlike movie");
  likeButton.click();
  expect(likeButton).toHaveAttribute("title", "like movie");
});
