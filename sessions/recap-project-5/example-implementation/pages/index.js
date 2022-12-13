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

export default function HomePage({ images }) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log(images);

  return (
    <>
      <ImageContainer>
        <StyledImage src={randomImage.imageSource} fill alt={"an imag"} />
      </ImageContainer>
      <Header />
    </>
  );
}
