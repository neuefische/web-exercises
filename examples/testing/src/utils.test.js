import { describe, it, expect } from "vitest";
import { formatUser } from "./utils";

describe("formatUser", () => {
  it("returns Mr. X if neither the firstName and the lastName are passed", () => {
    const output = formatUser({ id: 1 });
    expect(output).toBe("Mr. X");
  });
});
