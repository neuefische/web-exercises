export default async function fetcher(url) {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.message = res.message;
    throw error;
  }

  return res.json();
}
