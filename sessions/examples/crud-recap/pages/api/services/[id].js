import connect from "@/db/connect.js";
import Service from "@/db/models/Service.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const service = await Service.findById(request.query.id);
    if (!service) {
      response.status(404).json({ message: "Service not found" });
      return;
    }
    response.status(200).json(service);
    return;
  }

  if (request.method === "PUT") {
    try {
      const service = await Service.findOneAndUpdate(
        { _id: request.query.id },
        request.body,
        { new: true }
      );
      response.status(200).json(service);
    } catch (error) {
      console.log("PUT /api/services/:id", error);
      response.status(500).json({ message: "Error updating service" });
    }
    return;
  }

  if (request.method === "DELETE") {
    try {
      const service = await Service.findOneAndDelete({ _id: request.query.id });
      response.status(200).json(service);
    } catch (error) {
      console.log("DELETE /api/services/:id", error);
      response.status(500).json({ message: "Error deleting service" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
