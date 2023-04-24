import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./index.js";

test("calls onToggleFavorite on button click", async () => {
  const user = userEvent.setup();
  const mockOnToggleFavorite = jest.fn();

  render(
    <FavoriteButton isFavorite={true} onToggleFavorite={mockOnToggleFavorite} />
  );

  const button = screen.getByRole("button", { name: "unlike" });

  await user.click(button);

  expect(mockOnToggleFavorite).toHaveBeenCalled();
});

test("displays the active color if isFavorite is true", () => {
  render(<FavoriteButton isFavorite={true} />);

  const button = screen.getByRole("button", { name: "unlike" });

  expect(button).toHaveStyle({ "background-color": "lightcoral" });
});
