import { users } from "@/lib/data";

export default function handler(request, response) {
  response.status(200).json({ data: users });
}
