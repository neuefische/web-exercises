import { render, screen } from "@testing-library/react";
import Spotlight from "./index.js";

test("renders image and artist of spotlight art piece", () => {
  render(
    <Spotlight
      artist="Steve Johnson"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    />
  );

  const image = screen.getByAltText("spotlight: Steve Johnson");
  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining(
      encodeURIComponent(
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      )
    )
  );
});
