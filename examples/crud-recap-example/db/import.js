import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import connect, { disconnect } from "./connect.js";
import { services } from "./fixtures.js";
import Service from "./models/Service.js";

console.log("Connecting...");
await connect(process.env.MONGODB_URI);

console.log("Dropping existing collections...");
await Service.collection.drop();

function createService(service, index) {
  console.log(`Creating service: ${index}...`);
  return Service.create(service);
}

await Promise.all(services.map(createService));

console.log("Disconnecting...");
await disconnect();

console.log("Done!");
