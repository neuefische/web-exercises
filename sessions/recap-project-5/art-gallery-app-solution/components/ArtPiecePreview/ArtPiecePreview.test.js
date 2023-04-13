import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./index.js";

test("renders image, title and artist for the piece", () => {
  render(
    <ArtPiecePreview
      artist="Steve Johnson"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      title="Orange Red and Green Abstract Painting"
      slug="orange-red-and-green"
    />
  );
  const image = screen.getByLabelText(
    "Steve Johnson: Orange Red and Green Abstract Painting"
  );
  const artist = screen.getByText(/Steve Johnson/);
  const title = screen.getByText(/Orange Red and Green Abstract Painting/);

  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining(
      encodeURIComponent(
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      )
    )
  );
  expect(artist).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
