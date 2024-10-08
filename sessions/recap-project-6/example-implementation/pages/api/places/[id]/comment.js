import Place from "../../../../db/models/Places";
import Comment from "../../../../db/models/Comment";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  await dbConnect();
  try {
    if (request.method === "POST") {
      try {
        const newComment = await Comment.create(request.body);
        await Place.findByIdAndUpdate(
          id,
          { $push: { comments: newComment._id } },
          { new: true }
        );
        response.status(200).json({ success: "comment uploaded" });
      } catch (e) {
        response.status(500).json({ error: "error uploading comment" });
        console.log(e);
      }
    }
    if (request.method === "DELETE") {
      const deletedComment = await Comment.findByIdAndDelete(request.body);
      await Place.findByIdAndUpdate(id, {
        $pull: { comments: deletedComment._id },
      });
      return response.status(200).json({ success: "comment deleted" });
    }
  } catch (error) {
    console.error(error);
  }
}
