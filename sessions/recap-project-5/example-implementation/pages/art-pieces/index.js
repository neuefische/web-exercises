import styled from "styled-components";
import ArtPiecesPreview from "../../components/ArtPiecesPreview";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 5px;
  width: 600px;
  height: 100%;
`;

export default function ArtPieces({
  pieces,
  handleClickToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ImageGrid>
        {pieces.map((piece) => {
          const { isFavorite } = artPiecesInfo.find(
            (infoItem) => infoItem.slug === piece.slug
          ) ?? { isFavorite: false };

          return (
            <ArtPiecesPreview
              key={piece.slug}
              piece={piece}
              handleClickToggleFavorite={handleClickToggleFavorite}
              isFavorite={isFavorite}
            />
          );
        })}
      </ImageGrid>
    </>
  );
}
