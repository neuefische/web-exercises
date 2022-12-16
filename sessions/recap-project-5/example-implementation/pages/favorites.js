import styled from "styled-components";
import ArtPieces from "../components/ArtPieces";

export default function FavoritePiecesPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieces
        favoritePiece
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isFavoritesPage
      />
    </>
  );
}
