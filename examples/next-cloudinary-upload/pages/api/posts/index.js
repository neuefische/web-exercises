import connect from "@/db/connect.js";
import Post from "@/db/models/Post.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const posts = await Post.find({});
    response.status(200).json(posts);
    return;
  }

  if (request.method === "POST") {
    try {
      const post = await Post.create(request.body);
      response.status(201).json(post);
    } catch (error) {
      console.log("POST /api/posts", error);
      response.status(500).json({ message: "Error creating post" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
