import Image from "next/image";
import Link from "next/link";
import books from "../../lib/books";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Book() {
  const router = useRouter();
  const { slug } = router.query;

  const currentBook = books.find((book) => book.slug === slug);

  if (!currentBook) {
    return null;
  }

  return (
    <Article>
      <h2>{currentBook.title}</h2>
      <Description>{currentBook.description}</Description>
      <Image
        src={currentBook.cover}
        alt={`cover image of ${currentBook.title}`}
        width={250}
        height={400}
      />
      <StyledLink href="/books">Back to overview</StyledLink>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

const Description = styled.p`
  text-align: justify;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid black;
  padding: 0.25rem;
  border-radius: 8px;
  background-color: #523333;
  color: #eee;
  &:hover {
    background-color: green;
  }
`;
