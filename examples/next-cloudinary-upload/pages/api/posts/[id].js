import connect from "@/db/connect.js";
import Post from "@/db/models/Post.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const post = await Post.findById(request.query.id);
    if (!post) {
      response.status(404).json({ message: "Post not found" });
      return;
    }
    response.status(200).json(post);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
