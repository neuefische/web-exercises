import Comment from "../../../../db/models/Comment";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    try {
      const comments = await Comment.find({ placeId: id });
      response.status(200).json(comments);
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "error finding comments" });
      return;
    }
  }

  if (request.method === "POST") {
    try {
      await Comment.create({ ...request.body, placeId: id });
      response.status(200).json({ success: "comment uploaded" });
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "error uploading comment" });
      return;
    }
  }

  if (request.method === "DELETE") {
    try {
      const { comment_id } = request.query;
      console.log("comment_id", comment_id);
      await Comment.findByIdAndDelete(comment_id);
      response.status(200).json({ success: "comment deleted" });
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "error deleting comment" });
      return;
    }
  }
}
