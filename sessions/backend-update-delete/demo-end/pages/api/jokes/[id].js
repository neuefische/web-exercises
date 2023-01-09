import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const joke = await Joke.findById(id);

    if (!joke) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(joke);
  }

  // building PATCH API Route

  if (request.method === "PUT") {
    const jokeToUpdate = await Joke.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response.status(200).json(jokeToUpdate);
  }

  // building DELTE API Route
}
