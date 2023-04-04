import { places } from '../../../../lib/db.js';

export default function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  const place = places.find((place) => place.id === id);

  if (!place) {
    return response.status(404).json({ status: 'Not found' });
  }

  response.status(200).json(place);
}
