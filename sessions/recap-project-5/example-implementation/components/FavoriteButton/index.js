import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  position: ${({ positionAbsolute }) =>
    positionAbsolute ? "absolute" : "static"};
  right: 1rem;
  top: 1.5rem;
  z-index: 1;
  background-color: ${(props) => (props.isFavorite ? "lightcoral" : "white")};
  border: 3px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  positionAbsolute = false,
}) {
  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
      positionAbsolute={positionAbsolute}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </Button>
  );
}
