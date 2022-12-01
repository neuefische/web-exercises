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

  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );
  const previousVolume = volumes[currentVolumeIndex - 1];
  const nextVolume = volumes[currentVolumeIndex + 1];

  if (!volumes[currentVolumeIndex]) {
    return null;
  }

  return (
    <Article>
      <InfoContainer>
        <StyledLink href="/volumes">
          <LinkImage src={ChevronLeft} alt="chevron left" /> All Volumes
        </StyledLink>
        <h1>{volumes[currentVolumeIndex].title}</h1>
        <Description>{volumes[currentVolumeIndex].description}</Description>
      </InfoContainer>
      <BooksContainer color={volumes[currentVolumeIndex].color}>
        <BooksList>
          {volumes[currentVolumeIndex].books.map((book) => (
            <BookListItem key={book.ordinal}>
              <BookNumber>{book.ordinal}</BookNumber>
              <BookTitle>{book.title}</BookTitle>
            </BookListItem>
          ))}
        </BooksList>
        <Image
          src={volumes[currentVolumeIndex].cover}
          alt={`cover image of ${volumes[currentVolumeIndex].title}`}
          width={140}
          height={230}
        />
      </BooksContainer>
      <LinkContainer>
        {previousVolume ? (
          <PreviousLink href={`/volumes/${previousVolume.slug}`}>
            <Image src={ArrowLeft} alt="arrow right" />
            <LinkContentContainer>
              <LinkCaption>Previous Volume</LinkCaption>
              <LinkTitle>{previousVolume.title}</LinkTitle>
            </LinkContentContainer>
          </PreviousLink>
        ) : null}
        {nextVolume ? (
          <NextLink href={`/volumes/${nextVolume.slug}`}>
            <LinkContentContainer>
              <LinkCaption>Next Volume</LinkCaption>
              <LinkTitle>{nextVolume.title}</LinkTitle>
            </LinkContentContainer>
            <Image src={ArrowRight} alt="arrow right" />
          </NextLink>
        ) : null}
      </LinkContainer>
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

const InfoContainer = styled.div`
  margin: 2rem 1rem;
`;

const LinkCaption = styled.span`
  font: var(--font-caption--italic);
`;

const LinkImage = styled(Image)`
  color: red;
`;

const LinkTitle = styled.span`
  font: var(--font-caption);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  align-items: center;
`;

const LinkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: var(--font-body);
  color: unset;
`;

const NextLink = styled(StyledLink)`
  align-self: flex-end;
  display: hidden;
`;
const PreviousLink = styled(StyledLink)`
  align-self: flex-start;
`;
