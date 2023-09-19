import connect from "@/db/connect.js";
import Pet from "@/db/models/Pet.js";
import Rating from "@/db/models/Rating.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "POST") {
    try {
      const { id: pet_id } = request.query;
      const rating = await Rating.create({ ...request.body, pet: pet_id });
      await Pet.findByIdAndUpdate(pet_id, {
        $push: {
          ratings: rating._id,
        },
      });
      response.status(201).json(rating);
    } catch (error) {
      console.log("POST /api/pets/:id/ratings", error);
      response.status(500).json({ message: "Error creating rating" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
