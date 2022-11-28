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
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (confirm("Are you Aquaman?")) {
            router.push("/movies/aquaman");
          }
        }}
      >
        Are you Aquaman?
      </button>
    </>
  );
}
