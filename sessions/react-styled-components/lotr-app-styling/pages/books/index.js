import Link from "next/link";
import books from "../../lib/books";
import Image from "next/image";
import styled from "styled-components";

export default function Books() {
  return (
    <Main>
      <h2>Overview about all Books</h2>
      <List>
        {books.map((book) => (
          <li key={book.slug}>
            <Link href={`/books/${book.slug}`}>
              <Image
                src={book.cover}
                alt={`cover image of ${book.title}`}
                width={125}
                height={200}
              />
            </Link>
          </li>
        ))}
      </List>
    </Main>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
