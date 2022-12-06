import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: grid;
  gap: 4rem;
  padding-inline-start: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  padding: 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
  background: var(--primary-color);
  width: 50%;
  padding-inline-start: 0.5rem;
`;

export default function HomePage({ countSum, dragonCount }) {
  return (
    <>
      <Container>
        <div>
          <Title>
            CounterApp
            <span role="img" aria-label="trademark">
              ™
            </span>
          </Title>
          <h2>
            — currently counting <strong>{countSum}</strong> things ...
          </h2>
          <p>
            ... of which{" "}
            {dragonCount === 1
              ? "one is a dragon"
              : `${dragonCount} are dragons`}
            .
          </p>
        </div>
        <Flex>
          <StyledLink href="/overview">➡︎</StyledLink>
        </Flex>
      </Container>
    </>
  );
}
