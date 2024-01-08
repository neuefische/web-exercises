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

export async function createService(data) {
  return request({ url: "/api/services", method: "POST", data });
}

export async function updateService({ id, ...data }) {
  return request({ url: `/api/services/${id}`, method: "PUT", data });
}

export async function deleteService(id) {
  return request({ url: `/api/services/${id}`, method: "DELETE" });
}
