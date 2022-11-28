import Link from "next/link";
import Head from "next/head";
import movies from "../../lib/movies.js";
import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h2>List of Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              href={{
                pathname: "/movies/[movie]",
                query: { movie: movie.slug },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (confirm("Go to Hulk?")) router.push("/movies/hulk");
        }}
      >
        Wanna Hulk?
      </button>
    </>
  );
}
