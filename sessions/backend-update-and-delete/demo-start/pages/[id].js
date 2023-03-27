import { useRouter } from "next/router";
import Joke from "../components/Joke";

export default function JokeDetailsPage() {
  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;

  async function handleEditJoke() {}

  async function handleDeleteJoke() {}

  return <Joke onSubmit={handleEditJoke} onDelete={handleDeleteJoke} />;
}
