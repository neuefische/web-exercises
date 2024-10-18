import { comments } from "../../../../lib/db_comments.js";

export default function handler(request, response) {
  const { id } = request.query;
  const foundComments = comments.filter(({ placeId }) => placeId === id);
  response.status(200).json(foundComments);
  return;
}
