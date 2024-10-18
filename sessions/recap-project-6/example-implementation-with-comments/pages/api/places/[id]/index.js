import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    try {
      const foundPlace = await Place.findById(id);

      if (!foundPlace) {
        response.status(404).json({ status: "Not Found" });
        return;
      }

      response.status(200).json(foundPlace);
      return;
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error finding place" });
      return;
    }
  }

  if (request.method === "PUT") {
    try {
      const placeToUpdate = await Place.findByIdAndUpdate(id, request.body);
      response.status(200).json(placeToUpdate);
      return;
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error updating places" });
      return;
    }
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);

      // delete all comments associated with the place (otherwise they will live in the db forever)
      await Comment.deleteMany({ place: id });
      response.status(260).json("Place deleted");
      return;
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error deleting places" });
      return;
    }
  }
}
