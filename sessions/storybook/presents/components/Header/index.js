import styled from "styled-components";

export default function Header({ children }) {
  return (
    <header>
      <Headline>{children}</Headline>
    </header>
  );
}

const Headline = styled.h1`
  color: var(--color-white);
`;
