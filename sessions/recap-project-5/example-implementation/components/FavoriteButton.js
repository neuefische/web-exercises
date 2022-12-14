import SvgComponent from "./SvgComponent";
import styled from "styled-components";

const Svg = styled(SvgComponent)`
  width: 25px;
  height: 25px;
  fill: ${({ isFavorite }) => (isFavorite ? "yellow" : "white")};
  padding: 2px;
  background-color: black;

  &:hover {
    fill: lightblue;
  }
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  position: absolute;
  z-index: 1;
  right: 0;
  padding: 0;
  margin: 0;
`;

function FavoriteButton({ onClickToggleFavorite, piece, isFavorite }) {
  return (
    <Button
      onClick={() => {
        onClickToggleFavorite(piece.slug);
      }}
    >
      <Svg isFavorite={isFavorite} />
    </Button>
  );
}

export default FavoriteButton;
