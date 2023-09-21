import connect from "@/db/connect.js";
import User from "@/db/models/User.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const users = await User.find({});
    response.status(200).json(users[0]);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
