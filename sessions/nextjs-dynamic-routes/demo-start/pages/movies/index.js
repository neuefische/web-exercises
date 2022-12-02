import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        <li>
          <Link href={`/movies/aquaman`}>Aquaman</Link>
        </li>
      </ul>
    </>
  );
}
