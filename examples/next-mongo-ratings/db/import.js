import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import connect, { disconnect } from "./connect.js";
import { pets } from "./fixtures.js";
import Pet from "./models/Pet.js";
import Rating from "./models/Rating.js";

console.log("Connecting...");
await connect(process.env.MONGODB_URI);

console.log("Dropping existing collections...");
await Pet.collection.drop();
await Rating.collection.drop();

await Promise.all(
  pets.map(async ({ ratings, ...pet }, index) => {
    console.log(`Creating pet: ${index}...`);
    const newPet = await Pet.create(pet);

    console.log(`Saving ratings for pet: ${index}...`);
    const savedRatings = await Rating.insertMany(
      ratings.map((rating) => ({ ...rating, pet: newPet._id }))
    );
    newPet.ratings = savedRatings.map((x) => x._id);
    await newPet.save();
  })
);

console.log("Disconnecting...");
await disconnect();

console.log("Done!");
