import { render, screen } from "@testing-library/react";
import ArtPieces from "./index.js";

const exampleData = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    year: "2019",
    genre: "Abstract Painting",
    colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
    dimensions: { height: 2560, width: 1920, type: "jpg" },
  },
  {
    slug: "clay-bust-sculptures",
    artist: "dilara irem",
    name: "Clay Bust Sculptures",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    year: "2022",
    genre: "Classics",
    colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
    dimensions: { height: 1280, width: 1920, type: "jpg" },
  },
];

test("renders art pieces displayed as a list", () => {
  render(<ArtPieces pieces={exampleData} />);

  const artPieces = screen.getAllByRole("listitem");

  expect(artPieces).toHaveLength(3);
});
