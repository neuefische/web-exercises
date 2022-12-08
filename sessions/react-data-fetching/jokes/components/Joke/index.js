import { JokeSection, StyledJoke } from "./Joke.styled";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Joke() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/bad-jokes/random",
    fetcher
  );
  console.log(data);

  if (error) return <div>Failed to load {data.status}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <JokeSection>
      <StyledJoke>{data.joke}</StyledJoke>
    </JokeSection>
  );
}
