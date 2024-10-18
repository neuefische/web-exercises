import dbConnect from "@/db/connect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    response.status(200).json(jokes);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
