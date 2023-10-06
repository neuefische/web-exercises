import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Places";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  const { id } = request.query;
  try {
    await dbConnect();
    if (request.method === "GET") {
      const placeFound = await Place.findById(id).populate("comments");
      if (!placeFound) {
        return response.status(404).json({ status: "Not Found" });
      }
      return response.status(200).json(placeFound);
    }
    if (request.method === "PUT") {
      const placeToUpdate = await Place.findByIdAndUpdate(id, request.body);
      response.status(200).json(placeToUpdate);
    }
    if (request.method === "DELETE") {
      const placeToDelete = await Place.findByIdAndDelete(id);
      await Comment.deleteMany({ _id: { $in: placeToDelete.comments } });
      response.status(260).json("Place deleted");
    }
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
  } catch (e) {
    console.log(e);
  }
}
