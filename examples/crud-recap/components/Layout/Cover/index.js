import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  &:hover {
    opacity: 0.8;
  }
`;

export default function Avatar({ src, alt, width = 400 }) {
  return (
    <StyledImage src={src} alt={alt} width={width} height={(width * 9) / 16} />
  );
}
