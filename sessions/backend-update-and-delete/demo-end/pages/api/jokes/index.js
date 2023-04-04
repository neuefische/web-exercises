import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }

  if (request.method === "POST") {
    try {
      const jokeData = request.body;
      const joke = new Joke(jokeData);
      await joke.save();

      response.status(201).json({ status: "Joke created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
