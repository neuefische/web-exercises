import connect from "@/db/connect.js";
import User from "@/db/models/User.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const posts = await User.find();
    response.status(200).json(posts);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
