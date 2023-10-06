import { db_places } from "../../../lib/db_places";

export default function handler(request, response) {
  return response.status(200).json(db_places);
}
