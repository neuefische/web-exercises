import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  response.status(200).json(jokes);
}
