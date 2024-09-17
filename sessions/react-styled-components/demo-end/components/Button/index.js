import styled, { css } from "styled-components";


export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--primary-color)"};

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }

  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--primary-color);
    `};
  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--primary-color);
      border: solid 2px var(--primary-color);
    `};

  ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: var(--primary-color);
      color: white;
    `};
`;