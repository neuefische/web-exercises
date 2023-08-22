import useSWR from "swr";
import Link from "next/link";

export default function JokeList() {
  const { data, isLoading } = useSWR("/api/jokes");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((joke) => (
        <li key={joke._id}>
          <Link href={`/${joke._id}`}>{joke.joke}</Link>
        </li>
      ))}
    </ul>
  );
}
