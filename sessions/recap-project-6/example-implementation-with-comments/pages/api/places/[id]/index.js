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
        return response.status(404).json({ status: "Not Found" });
      }

      return response.status(200).json(foundPlace);
    } catch (error) {
      console.log(error);
    }
  }

  if (request.method === "PUT") {
    try {
      const placeToUpdate = await Place.findByIdAndUpdate(id, request.body);
      response.status(200).json(placeToUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);

      // delete all comments associated with the place (otherwise they will live in the db forever)
      await Comment.deleteMany({ place: id });
      response.status(260).json("Place deleted");
    } catch (error) {
      console.log(error);
    }
  }
}
