import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import UserList from "./UserList";

const users = [
  { id: 1, email: "jane@doe.com", firstName: "Jane", lastName: "Doe" },
  { id: 2, email: "maria@maria.com", firstName: "Maria" },
  { id: 3, email: "john@doe.com" },
];

describe("UserList", () => {
  it("renders correctly", () => {
    const output = render(<UserList users={users} />);
    expect(output.container.querySelectorAll("li").length).toBe(3);
  });

  it("renders a placeholder when passing an empty list", () => {
    const output = render(<UserList users={[]} />);
    expect(output.container.querySelector("p").innerHTML).toBe("No users.");
  });
});
