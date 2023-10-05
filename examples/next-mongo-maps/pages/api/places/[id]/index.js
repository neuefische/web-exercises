import connect from "@/db/connect.js";
import Place from "@/db/models/Place.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const place = await Place.findById(request.query.id);
    if (!place) {
      response.status(404).json({ message: "Place not found" });
      return;
    }
    response.status(200).json(place);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
