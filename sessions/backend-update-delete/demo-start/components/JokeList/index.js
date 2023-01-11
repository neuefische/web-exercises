import useSWR from "swr";
import Button from "../Button";
import { StyledList } from "../StyledList";
import { StyledListItem } from "../StyledListItem";
import { useRouter } from "next/router";

export default function JokeList() {
  const router = useRouter();
  const { data } = useSWR("/api/jokes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.map((joke) => (
        <StyledListItem key={joke._id}>
          <Button
            width="100%"
            type="button"
            onClick={() => router.push(`/${joke._id}`)}
          >
            {joke.joke}
          </Button>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
