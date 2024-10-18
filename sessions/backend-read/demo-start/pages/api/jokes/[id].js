import { jokes } from "@/lib/data.js";

export default function handler(request, response) {
  const { id } = request.query;

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    response.status(404).json({ status: "Not Found" });
    return;
  }

  response.status(200).json(joke);
}
