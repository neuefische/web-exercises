import { describe, it, expect } from "vitest";
import { formatUser } from "./utils";

describe("formatUser", () => {
  it("returns Mr. X if neither the firstName and the lastName are passed", () => {
    const output = formatUser({});
    expect(output).toBe("Mr. X");
  });

  it("returns the first name if no last name is given", () => {
    const output = formatUser({ firstName: "Jane" });
    expect(output).toBe("Jane");
  });

  it("returns the first name and the last name (joined with a space) if both are given", () => {
    const output = formatUser({ firstName: "Jane", lastName: "Doe" });
    expect(output).toBe("Jane Doe");
  });
});
