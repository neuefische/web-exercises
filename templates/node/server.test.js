import request from "supertest";
import * as all from "./server";
const { server } = all;

test("A server instance is exported", () => {
  expect(server).toBeDefined();
  expect(server).toHaveProperty("listen");
});

test("The server responds with Hello World", async () => {
  const response = server && (await request(server).get("/"));
  expect(response.text).toBe("Hello World");
});
