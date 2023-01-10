import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block-start: 2rem;
`;

export default function JokeForm({ onSubmit, value, isEditMode }) {
  const [joke, setJoke] = useState(value);

  return (
    <StyledForm
      onSubmit={(event) => {
        onSubmit(event);
        setJoke("");
      }}
    >
      <label htmlFor="joke-input">
        {isEditMode ? "Edit Joke" : "Submit Joke"}
      </label>
      <input
        type="text"
        id="joke-input"
        name="joke"
        value={joke}
        onChange={(event) => setJoke(event.target.value)}
      />
      <Button type="submit" width="fit-content">
        {isEditMode ? "Edit" : "Submit"}
      </Button>
    </StyledForm>
  );
}
