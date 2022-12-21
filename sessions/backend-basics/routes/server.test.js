/** supertest is a library that allows you to test HTTP requests */
import request from "supertest";
import * as all from "./server";
const { server } = all;

test("A server instance is exported", () => {
  expect(server).toBeDefined();
  expect(server).toHaveProperty("listen");
});

test("The server responds to /api/fish/1 with Shrimp", async () => {
  const response = server && (await request(server).get("/api/fish/1"));
  expect(response?.text).toBe("Shrimp");
  expect(response?.statusCode).toBe(200);
});

test("The server responds to /api/fish/2 with Anemonefish", async () => {
  const response = server && (await request(server).get("/api/fish/2"));
  expect(response?.text).toBe("Anemonefish");
  expect(response?.statusCode).toBe(200);
});

test("The server responds to /api/fish/3 with Not found", async () => {
  const response = server && (await request(server).get("/api/fish/3"));
  expect(response?.text).toBe("Not found");
  expect(response?.statusCode).toBe(404);
});

test("The server responds to all other routes with Not found", async () => {
  const response = server && (await request(server).get("/api/elephant"));
  expect(response?.text).toBe("Not found");
  expect(response?.statusCode).toBe(404);
});
