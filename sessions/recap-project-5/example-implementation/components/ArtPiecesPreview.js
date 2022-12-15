import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const ImageCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  padding: 0.3rem;
  background: #000;
  color: #fff;
  bottom: 1rem;

  & span:last-child {
    color: grey;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

function ArtPiecesPreview({ piece, handleClickToggleFavorite, isFavorite }) {
  return (
    <ImageWrapper key={piece.slug}>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onClickToggleFavorite={handleClickToggleFavorite}
          piece={piece}
        />
        <StyledImage
          src={piece.imageSource}
          fill
          priority
          alt={piece.name}
          sizes="(max-width: 600px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </ImageContainer>
      <Link href={`art-pieces/${piece.slug}`}>
        <ImageCaption>
          <span>{piece.name}</span>
          <span>{piece.artist}</span>
        </ImageCaption>
      </Link>
    </ImageWrapper>
  );
}

export default ArtPiecesPreview;
