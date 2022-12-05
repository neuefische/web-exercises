import Image from "next/image";
import styled from "styled-components";

const StyledBooks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: var(--width-wrapper);
`;

const BooksList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BookListItem = styled.li`
  display: flex;
  flex-direction: column;
  color: var(--color-clouds);
`;

const BookOrdinal = styled.span`
  font: var(--font-caption--italic);
`;

const BookTitle = styled.span`
  font: var(--font-title);
`;

export default function Books({ books, cover, title }) {
  return (
    <StyledBooks>
      <BooksList>
        {books.map((book) => (
          <BookListItem key={book.title}>
            <BookOrdinal>{book.ordinal}</BookOrdinal>
            <BookTitle>{book.title}</BookTitle>
          </BookListItem>
        ))}
      </BooksList>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
    </StyledBooks>
  );
}
