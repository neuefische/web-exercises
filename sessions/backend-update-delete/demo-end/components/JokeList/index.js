import useSWR from "swr";
import { useRouter } from "next/router";

export default function JokeList() {
  const router = useRouter();
  const { data } = useSWR("/api/jokes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  // function handleClick() {}

  return (
    <ul>
      {data.map((joke) => (
        <li key={joke._id}>
          <button type="button" onClick={() => router.push(`/${joke._id}`)}>
            {joke.joke}
          </button>
          {/* <button onClick={handleClick}>Edit</button> */}
        </li>
      ))}
    </ul>
  );
}
