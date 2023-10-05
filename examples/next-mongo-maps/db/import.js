import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import connect, { disconnect } from "./connect.js";
import { places } from "./fixtures.js";
import Place from "./models/Place.js";

console.log("Connecting...");
await connect(process.env.MONGODB_URI);

console.log("Dropping existing collections...");
await Place.collection.drop();

console.log("Creating places...");
await Place.insertMany(places);

console.log("Disconnecting...");
await disconnect();

console.log("Done!");
