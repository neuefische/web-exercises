import { comments } from "../../../../lib/db_comments.js";

export default function handler(request, response) {
    const { id } = request.query;

    if (!id) {
        return;
    }

    const foundComments = comments.filter(({ place }) => place === id);

    if (!foundComments) {
        return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(foundComments);
}
