import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  const { id } = request.query;
  console.log(id);

  const jokeIndex = jokes.findIndex((joke) => joke.id === id);
  console.log(jokeIndex);

  const joke = jokes[jokeIndex];
  console.log(joke);

  if (!joke) {
    return response.status(404).json({ status: "Not Found" });
  }

  const prevId = jokes[jokeIndex - 1]?.id ?? jokes[jokes.length - 1].id;
  const nextId = jokes[jokeIndex + 1]?.id ?? jokes[0].id;

  response.status(200).json({ ...joke, prevId, nextId });
}
