import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movies from ".";

const initialMovies = [
  {
    id: "0",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "1",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "2",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders the initialMovies", async () => {
  render(<Movies initialMovies={initialMovies} />);
  expect(
    screen.getByRole("heading", { name: "The Incredible Hulk" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Spiderman 1-25" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Lord of the Rings" })
  ).toBeInTheDocument();
});

test("renders a new movie when the form is submitted with a new movie name", async () => {
  const user = userEvent.setup();
  render(<Movies initialMovies={initialMovies} />);
  const input = screen.getByLabelText("Name");
  const submitButton = screen.getByRole("button", { name: "Add" });
  await user.type(input, "The Matrix");
  await user.click(submitButton);
  expect(
    screen.getByRole("heading", { name: "The Matrix" })
  ).toBeInTheDocument();
});

test("deletes a movie when the delete button is clicked", async () => {
  const user = userEvent.setup();
  render(<Movies initialMovies={initialMovies} />);
  const deleteButton = screen.getByRole("button", {
    name: "delete The Incredible Hulk",
  });
  await user.click(deleteButton);
  expect(screen.queryByText("The Incredible Hulk")).not.toBeInTheDocument();
});

test("likes a movie when the like button is clicked", async () => {
  const user = userEvent.setup();
  render(<Movies initialMovies={initialMovies} />);
  const likeButton = screen.getByRole("button", {
    name: "like The Incredible Hulk",
  });
  await user.click(likeButton);
  expect(likeButton).toHaveAccessibleName("unlike The Incredible Hulk");
});

test("unlikes a movie when the unlike button is clicked", async () => {
  const user = userEvent.setup();
  render(<Movies initialMovies={initialMovies} />);
  const likeButton = screen.getByRole("button", {
    name: "unlike Lord of the Rings",
  });
  await user.click(likeButton);
  expect(likeButton).toHaveAccessibleName("like Lord of the Rings");
});
