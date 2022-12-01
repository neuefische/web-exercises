import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { movies } from "../../lib/data";

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;

  const currentMovie = movies.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return null;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
