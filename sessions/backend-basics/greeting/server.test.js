/** supertest is a library that allows you to test HTTP requests */
import request from "supertest";
import * as all from "./server";
const { server } = all;

test("A server instance is exported", () => {
  expect(server).toBeDefined();
  expect(server).toHaveProperty("listen");
});

test("The server responds with a string starting with 'Hello, '", async () => {
  const response = server && (await request(server).get("/"));
  expect(response?.text).toMatch(/^Hello, /);
  expect(response?.statusCode).toBe(200);
});
