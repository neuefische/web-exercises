import { users } from "@/lib/data";

export default function handler(request, response) {
  const user = users.find((user) => user.id == request.query.id);

  if (!user) {
    response.status(404).json({ message: "User not found" });
    return;
  }

  response.status(200).json({ data: user });
}
