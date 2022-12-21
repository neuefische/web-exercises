import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 12px;
  width: 600px;
  padding-block-end: calc(3rem + 12px);
`;

function ArtPieces({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
  isFavoritesPage,
}) {
  return (
    <ImageGrid>
      {pieces.map((piece) => {
        const { isFavorite } = artPiecesInfo.find(
          (infoItem) => infoItem.slug === piece.slug
        ) ?? { isFavorite: false };

        if (isFavoritesPage && !isFavorite) {
          return null;
        }

        return (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            handleToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        );
      })}
    </ImageGrid>
  );
}

export default ArtPieces;
