import { render, screen } from "@testing-library/react";
import Comments from "./index.js";

test("renders comments", () => {
  render(<Comments comments={["Nice!", "Cool!", "Amazing!", "Wow!"]} />);

  const comments = screen.getAllByRole("listitem");
  expect(comments).toHaveLength(4);
  expect(comments[0]).toHaveTextContent("Nice!");
  expect(comments[1]).toHaveTextContent("Cool!");
  expect(comments[2]).toHaveTextContent("Amazing!");
  expect(comments[3]).toHaveTextContent("Wow!");
});
