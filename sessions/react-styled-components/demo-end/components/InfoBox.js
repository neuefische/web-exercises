import styled, { css } from "styled-components";

const StyledInfoBox = styled.section`
  padding: 2rem;
  border: 0.25rem solid black;

  ${({ variant }) =>
    variant === "success" &&
    css`
      color: var(--primary-color);
      border-color: var(--primary-color);
    `}

  ${({ variant }) =>
    variant === "error" &&
    css`
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    `}
`;

export default function InfoBox({ title, message, variant }) {
  return (
    <StyledInfoBox variant={variant}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledInfoBox>
  );
}
