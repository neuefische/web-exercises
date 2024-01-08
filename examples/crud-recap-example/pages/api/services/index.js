import connect from "@/db/connect.js";
import Service from "@/db/models/Service.js";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const services = await Service.find({}).sort({ createdAt: -1 });
    response.status(200).json(services);
    return;
  }

  if (request.method === "POST") {
    try {
      console.log("POST /api/services", request.body);
      const service = await Service.create(request.body);
      response.status(201).json(service);
    } catch (error) {
      console.log("POST /api/services", error);
      response.status(500).json({ message: "Error creating service" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
