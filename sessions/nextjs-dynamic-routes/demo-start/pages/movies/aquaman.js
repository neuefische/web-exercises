import Link from "next/link";
import { movies } from "../../lib/data";

export default function Movie() {
  const currentMovie = movies.find((movie) => movie.slug === "aquaman");

  if (!currentMovie) {
    return null;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
