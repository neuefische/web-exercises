import request from "supertest";
import * as all from "./server";
const { server } = all;

test("A server instance is exported", () => {
  expect(server).toBeDefined();
  expect(server).toHaveProperty("listen");
});

test("The server responds with `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`", async () => {
  const response = server && (await request(server).get("/"));
  expect(response?.text).toMatch(
    /^Hello, my name is (.*) and I am ([0-9]*) years old\. I am a (.*)\.$/
  );
  expect(response?.statusCode).toBe(200);
});
