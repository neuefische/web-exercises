import request from "supertest";
import * as all from "./server";
const { server } = all;

test("A server instance is exported", () => {
  expect(server).toBeDefined();
  expect(server).toHaveProperty("listen");
});

test("The server responds with Hello World on /hello", async () => {
  const response = server && (await request(server).get("/hello"));
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello World");
});

test("The server responds with Bye World on /bye", async () => {
  const response = server && (await request(server).get("/bye"));
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Bye World");
});

test("The server responds with 42 on /answer", async () => {
  const response = server && (await request(server).get("/answer"));
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("42");
});

test("The server responds with 404 on /unknown", async () => {
  const response = server && (await request(server).get("/unknown"));
  expect(response.statusCode).toBe(404);
  expect(response.text).toBe("Not Found");
});
