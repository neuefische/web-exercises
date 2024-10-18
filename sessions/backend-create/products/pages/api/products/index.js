import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
