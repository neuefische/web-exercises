import { useRouter } from "next/router";
import movies from "../../lib/movies.js";
import Head from "next/head";

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;

  const currentMovie = movies.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentMovie.title}</title>
      </Head>
      <h1>Movie: {currentMovie.title}</h1>
    </>
  );
}
