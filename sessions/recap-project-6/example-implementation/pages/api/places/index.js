import Place from "../../../db/models/Places";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  try {
    await dbConnect();
    if (request.method === "GET") {
      const places = await Place.find();
      return response.status(200).json(places);
    }
    if (request.method === "POST") {
      Place.create(request.body);
      return response
        .status(200)
        .json({ success: true, status: "Place created" });
    }
  } catch (e) {
    console.log(e);
  }
}
