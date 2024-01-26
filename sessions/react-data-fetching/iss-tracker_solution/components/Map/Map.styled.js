import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  aspect-ratio: 2058/1036;
`;

export const MapImage = styled(Image)`
  margin-bottom: -4px;
  filter: grayscale(0.85) contrast(1.5);
  object-fit: cover;
`;

const blink = keyframes`
    0% {
      border-width: 0px;
      border-color: rgba(245, 63, 63, 1);
    }
  
    100% {
      border-width: 15px;
      border-color: rgba(245, 63, 63, 0.05);
    }
    `;

export const MapISS = styled.div`
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: rgb(255, 36, 84);
  background-clip: padding-box;
  border: solid;
  transform: translate(-50%, -50%);
  animation: ${blink} 1.5s infinite ease-out;
`;
