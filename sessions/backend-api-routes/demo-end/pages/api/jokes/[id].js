import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  const { id } = request.query;

  const jokeIndex = jokes.findIndex((joke) => joke.id === id);

  const joke = jokes[jokeIndex];

  if (!joke) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(joke);
}
