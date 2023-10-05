import connect from "@/db/connect.js";
import Place from "@/db/models/Place.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const places = await Place.find({})
      .sort({ createdAt: -1 })
      .limit(request.query.limit);

    response.status(200).json(places);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
