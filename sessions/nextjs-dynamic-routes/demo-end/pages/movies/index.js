import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { movies } from "../../lib/data";

export default function Movies() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map(({ slug, title, id }) => (
          <li key={id}>
            <Link href={`/movies/${slug}`}>{title}</Link>
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
