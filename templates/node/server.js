import { createServer } from "node:http";

export const server = createServer((req, res) => {
  res.end("Hello World");
});
