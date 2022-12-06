import styled from "styled-components";

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export default function AppHeader({ countSum }) {
  return (
    <Title>
      CounterApp
      <span role="img" aria-label="trademark">
        ™
      </span>{" "}
      — currently counting <strong>{countSum}</strong> things.
    </Title>
  );
}
