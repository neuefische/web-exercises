import styled from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  color: white;
  background-color: var(--primary-color);
  padding: ${({ size }) => (size === "large" ? "2rem" : "1rem")};

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
