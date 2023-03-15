import { render, screen } from "@testing-library/react";
import Navigation from "./index.js";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

test("renders three links", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
  const artPiecesLink = screen.getByRole("link", { name: "Art Pieces" });
  const favoritesLink = screen.getByRole("link", { name: "Favorites" });

  expect(spotlightLink).toBeInTheDocument();
  expect(artPiecesLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});
