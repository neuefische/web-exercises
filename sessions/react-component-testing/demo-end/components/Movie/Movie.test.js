import { render, screen } from "@testing-library/react";
import Movie from ".";

test("renders a movie", () => {
  render(<Movie name="The Matrix Reloaded" />);
  expect(
    screen.getByRole("heading", { name: "The Matrix Reloaded" })
  ).toBeInTheDocument();
});
