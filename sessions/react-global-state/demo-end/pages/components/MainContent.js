import styled from "styled-components";
import Counter from "./Counter";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--accent-color);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;

export default function MainContent({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <StyledLink href="/">⬅︎ Back</StyledLink>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => (
          <li key={animal.id}>
            <Counter
              animal={animal}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
            />
          </li>
        ))}
      </List>

      <article>
        <h2>About Counters</h2>
        <p>
          Even though this page is not about the furniture, here is some info
          about it to fill the space:
        </p>
        <figure>
          <blockquote cite="https://en.wikipedia.org/wiki/Counter_(furniture)">
            <p>
              A counter is a piece of furniture. Counters consist of a counter
              top, a raised surface which can be used to place objects or serve
              food on them. Similar to a table, counters are typically raised
              platforms, but are often embedded into flooring as fixed
              installations. Chairs or stools are often arranged around a
              counter for seating purposes.
            </p>
          </blockquote>
          <figcaption>
            — Counters on <cite>Wikipedia</cite>
          </figcaption>
        </figure>
      </article>
    </>
  );
}
