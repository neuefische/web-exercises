import { products } from "../../../lib/products";

export default function handler(request, response) {
  return response.status(200).json(products);
}
