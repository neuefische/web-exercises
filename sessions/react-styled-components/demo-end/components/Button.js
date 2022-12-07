import styled from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: ${({ color }) =>
    color === "danger" ? "var(--secondary-color)" : "var(--primary-color)"};

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
