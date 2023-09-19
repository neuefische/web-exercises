import connect from "@/db/connect.js";
import Pet from "@/db/models/Pet.js";
import Rating from "@/db/models/Rating.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const pets = await Pet.find({})
      .sort({ createdAt: -1 })
      .limit(request.query.limit)
      .populate("ratings")
      .exec();

    response.status(200).json(pets);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
