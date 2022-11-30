import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import ArrowLeft from "../../public/images/arrow-left.svg";
import ArrowRight from "../../public/images/arrow-right.svg";
import ChevronLeft from "../../public/images/chevron-left.svg";

export default function Book() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  // navigating with index not working yet, to be done later
  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );
  console.log("currentVolumeIndex", currentVolumeIndex);
  console.log("volumes.length", volumes.length);
  console.log(volumes[currentVolumeIndex]);

  if (!currentVolume) {
    return null;
  }

  return (
    <Article>
      <StyledLink href="/volumes">
        <Image src={ChevronLeft} alt="chevron left" /> All Volumes
      </StyledLink>
      <h1>{currentVolume.title}</h1>
      <Description>{currentVolume.description}</Description>
      <BooksContainer color={currentVolume.color}>
        <BooksList>
          {currentVolume.books.map((book) => (
            <BookListItem key={book.ordinal}>
              <BookNumber>{book.ordinal}</BookNumber>
              <BookTitle>{book.title}</BookTitle>
            </BookListItem>
          ))}
        </BooksList>
        <Image
          src={currentVolume.cover}
          alt={`cover image of ${currentVolume.title}`}
          width={140}
          height={230}
        />
      </BooksContainer>
      {/* {currentVolumeIndex > 0 && (
        <Link href={`/volumes/`}>
          <Image src={ArrowLeft} alt="arrow left" /> Previous Volume
        </Link>
      )}
      {currentVolumeIndex < volumes.length - 1 && (
        <Link href={`/volumes`}>
          Next Volume <Image src={ArrowRight} alt="arrow right" />
        </Link>
      )} */}
      {slug === "the-fellowship-of-the-ring" && (
        <Link href="/volumes/the-two-towers">
          Next Volume <Image src={ArrowRight} alt="arrow right" />
        </Link>
      )}
      {slug === "the-two-towers" && (
        <>
          <Link href="/volumes/the-fellowship-of-the-ring">
            <Image src={ArrowLeft} alt="arrow left" /> Previous Volume
          </Link>
          <Link href="/volumes/the-return-of-the-king">
            Next Volume <Image src={ArrowRight} alt="arrow right" />
          </Link>
        </>
      )}
      {slug === "the-return-of-the-king" && (
        <Link href="/volumes/the-two-towers">
          <Image src={ArrowLeft} alt="arrow left" /> Previous Volume
        </Link>
      )}
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const BooksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 24px 32px;
  background: linear-gradient(
      110.24deg,
      rgba(255, 255, 255, 0) 49.9%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    ${({ color }) => color};
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

const BookNumber = styled.span`
  font: var(--font-caption--italic);
`;

const BookTitle = styled.span`
  font: var(--font-title);
`;

const Description = styled.p`
  text-align: justify;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  font-family: var(--font-body);
`;
