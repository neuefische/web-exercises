async function request({ data, url, method }) {
  const options = data
    ? {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    : { method };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

export async function createRating({ id, ...data }) {
  return request({ url: `/api/pets/${id}/ratings`, method: "POST", data });
}

export async function removeRating({ pet_id, rating_id }) {
  return request({
    url: `/api/pets/${pet_id}/ratings/${rating_id}`,
    method: "DELETE",
  });
}
