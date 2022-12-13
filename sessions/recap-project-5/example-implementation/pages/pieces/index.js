import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const ImageCaption = styled.figcaption`
  position: absolute;
  width: 100%;
  padding: 0.3rem;
  background-color: #000;
  color: #fff;
  bottom: 1rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 5px;
  width: 600px;
  height: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

//Component -> Reuse in Pieces
const FavoriteIcon = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  appearance: none;
  &::before {
    content: "🤍";
    text-shadow: 0 0 4px #000;
  }
`;

export default function PiecesPage({ images, onClick }) {
  console.log(images);

  return (
    <>
      <ImageGrid>
        {images.map(({ imageSource, slug, name }) => (
          <ImageWrapper>
            <FavoriteIcon />
            <ImageContainer>
              <StyledImage src={imageSource} fill alt={name} />
            </ImageContainer>
            <Link href={`pieces/${slug}`} onClick={onClick}>
              <ImageCaption>{name}</ImageCaption>
            </Link>
          </ImageWrapper>
        ))}
      </ImageGrid>
    </>
  );
}
