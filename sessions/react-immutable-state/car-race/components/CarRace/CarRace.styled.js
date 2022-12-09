import styled from "styled-components";

export const CarButton = styled.button`
  font-size: 2rem;
  transform: ${({ positionX }) => `translateX(${positionX}px)`} rotateY(180deg);
  position: relative;
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: ${({ positionX }) => `translateX(${positionX}px)`}
      rotateY(180deg) scale(1.04);
    filter: drop-shadow(0 0 0.5rem rgb(0 0 0 / 50%));
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    z-index: -1;
    height: 42%;
    top: 40%;
    right: ${({ lastDistance }) => `calc(-${lastDistance}px + 0.25em)`};
    width: ${({ lastDistance }) => `${lastDistance}px`};
    background-color: transparent;
    background-image: linear-gradient(90deg, white 25%, transparent 100%);
    background-position: 0 0;
  }
`;

export const AllCarRoutes = styled.div`
  display: grid;
  grid-template-columns: ${({ finishLine }) => `${finishLine + 50}px`} 100px;
  align-items: center;
  gap: 0.25rem;
`;

export const DistanceHeadline = styled.h2`
  grid-column: 2;
  text-align: center;
`;

export const Distance = styled.div`
  font-size: 1.5rem;
  place-self: center;
`;

export const Track = styled.div`
  background: grey;
  width: 100%;
  display: flex;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    z-index: 1;
    height: 100%;
    top: 0;
    right: 0;
    width: 1rem;
    background-color: #eee;
    background-image: linear-gradient(
        45deg,
        black 25%,
        transparent 25%,
        transparent 75%,
        black 75%,
        black
      ),
      linear-gradient(
        45deg,
        black 25%,
        transparent 25%,
        transparent 75%,
        black 75%,
        black
      );
    background-size: 0.5rem 0.5rem;
    background-position: 0 0, 0.25rem 0.25rem;
  }
`;
