import styled from "styled-components";

export const JokeSection = styled.section`
  position: relative;
  width: 80%;
  margin: 10rem auto;
  border: 1px solid orange;
  border-radius: 10px;
  &::before {
    position: absolute;
    content: "😂";
    font-size: 2rem;
    top: -1.5rem;
    left: -1rem;
  }
`;

export const StyledJoke = styled.p`
  margin: 1rem;
  padding: 0.5rem;
  background-color: var(--color-water-10);
  border-radius: 10px;
  box-shadow: 0px 2px 0px 1px var(--color-granite);
`;
