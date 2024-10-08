import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Places";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  const { id } = request.query;
  try {
    await dbConnect();
    if (request.method === "GET") {
      const foundPlace = await Place.findById(id).populate("comments");

      // const comments = await Comment.find({
      //   place: id,
      // });

      if (!foundPlace) {
        return response.status(404).json({ status: "Not Found" });
      }

      return response
        .status(200)
        .json({ place: foundPlace, comments: foundPlace.comments });
    }
    if (request.method === "PUT") {
      const placeToUpdate = await Place.findByIdAndUpdate(id, request.body);
      response.status(200).json(placeToUpdate);
    }
    if (request.method === "DELETE") {
      const placeToDelete = await Place.findByIdAndDelete(id);
      // delete all comments associated with the place (otherwise they will live in the db forever)
      await Comment.deleteMany({ _id: { $in: placeToDelete.comments } });
      // $in: delete documents in the Comment collection where the _id field matches
      // any of the values in the placeToDelete.comments array.
      response.status(260).json("Place deleted");
    }
  } catch (e) {
    console.log(e);
  }
}
