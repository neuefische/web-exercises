import connect from "@/db/connect.js";
import Rating from "@/db/models/Rating.js";
import User from "@/db/models/User.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const user = await User.findById(request.query.id);
    if (!user) {
      response.status(404).json({ message: "User not found" });
      return;
    }
    const ratings = await Rating.find({ user: user._id })
      .populate("pet")
      .exec();
    response.status(200).json({ ...user._doc, ratings });
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
