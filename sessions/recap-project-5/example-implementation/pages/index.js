import Image from "next/image";
import styled from "styled-components";

import Header from "../components/Header";

const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function HomePage({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <ImageContainer>
        <StyledImage
          src={randomPiece.imageSource}
          fill
          priority
          alt={"an imag"}
          sizes="(max-width: 600px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </ImageContainer>
      <Header randomImage={randomPiece} />
    </>
  );
}
