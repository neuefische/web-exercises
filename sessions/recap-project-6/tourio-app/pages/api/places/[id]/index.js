import { places } from "../../../../lib/db.js";

export default function handler(request, response) {
  const { id } = request.query;

  const place = places.find((place) => place.id === id);

  if (!place) {
    response.status(404).json({ status: "Not found" });
    return;
  }

  response.status(200).json(place);
}
