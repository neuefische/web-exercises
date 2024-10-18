import Place from "../../../db/models/Place";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      response.status(200).json(places);
      return;
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error finding all places" });
      return;
    }
  }

  if (request.method === "POST") {
    try {
      await Place.create(request.body);
      response.status(200).json({ success: true, status: "Place created" });
      return;
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error creating place" });
      return;
    }
  }
}
