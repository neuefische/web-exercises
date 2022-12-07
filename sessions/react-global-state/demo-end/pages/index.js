import styled from "styled-components";
import Link from "next/link";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--accent-color);
`;

export default function HomePage({ countSum, dragonCount, countAverage }) {
  return (
    <Flex>
      <div>
        <h2>Counter Stats</h2>
        <p>
          Our counters currently have an average count of{" "}
          <strong>{countAverage}</strong>, counting <strong>{countSum}</strong>{" "}
          things ... of which <strong>{dragonCount}</strong> are dragons.
        </p>
        <h2>Definitions</h2>
        <dl>
          <dt>Counter</dt>
          <dd>A counter is a thing that can count up or down.</dd>
          <dd>A counter is also a piece of furniture.</dd>
        </dl>
      </div>

      <StyledLink href="/overview">To the counters ➡︎</StyledLink>
    </Flex>
  );
}
