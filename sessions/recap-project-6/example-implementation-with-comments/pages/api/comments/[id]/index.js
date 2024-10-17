import Comment from "../../../../db/models/Comment";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    try {
      const comments = await Comment.find({ placeId: id });
      response.status(200).json(comments);
    } catch (error) {
      response.status(500).json({ error: "error finding comments" });
      console.error(error);
    }
  }
  if (request.method === "POST") {
    try {
      await Comment.create(request.body);
      response.status(200).json({ success: "comment uploaded" });
    } catch (error) {
      response.status(500).json({ error: "error uploading comment" });
      console.error(error);
    }
  }
  if (request.method === "DELETE") {
    try {
      const { comment_id } = request.query;
      console.log("comment_id", comment_id);
      await Comment.findByIdAndDelete(comment_id);
      response.status(200).json({ success: "comment deleted" });
    } catch (error) {
      response.status(500).json({ error: "error deleting comment" });
      console.error(error);
    }
  }
}
