import Place from "../../../db/models/Places";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      console.log(error);
    }
  }
  if (request.method === "POST") {
    try {
      await Place.create(request.body);
      return response
        .status(200)
        .json({ success: true, status: "Place created" });
    } catch (error) {
      console.log(error);
    }
  }
}
