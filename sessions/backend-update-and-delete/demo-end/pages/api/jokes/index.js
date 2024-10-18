import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }

  if (request.method === "POST") {
    try {
      const jokeData = request.body;
      await Joke.create(jokeData);

      response.status(201).json({ status: "Joke created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
