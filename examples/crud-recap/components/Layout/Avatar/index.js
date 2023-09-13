import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export default function Avatar({ src, alt, size = 48 }) {
  return (
    <StyledImage src={src} alt={alt} width={size} height={size} $size={size} />
  );
}
