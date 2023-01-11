import styled from "styled-components";
import useSWR from "swr";
import Button from "../Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block-start: 2rem;
`;

export default function JokeForm() {
  const jokes = useSWR("/api/jokes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    const response = await fetch("/api/jokes", {
      method: "POST",
      body: JSON.stringify(jokeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      jokes.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="joke-input">Submit Joke</label>
      <input type="text" id="joke-input" name="joke" />
      <Button width="fit-content" type="submit">
        Submit
      </Button>
    </StyledForm>
  );
}
