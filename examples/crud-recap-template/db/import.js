import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import connect, { disconnect } from "./connect.js";
// import your fixtures from ./fixtures.js
// import your Mongoose models from ./models/<modelName>.js

console.log("Connecting...");
await connect(process.env.MONGODB_URI);

console.log("Dropping existing collections...");
// drop existing collections

// create new entries from fixtures

console.log("Disconnecting...");
await disconnect();

console.log("Done!");
