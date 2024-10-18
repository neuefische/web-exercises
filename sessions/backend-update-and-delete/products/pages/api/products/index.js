import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    const productData = request.body;
    await Product.create(productData);

    response.status(201).json({ status: "Product created." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
