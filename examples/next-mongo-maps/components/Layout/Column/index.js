import Image from "next/image";
import styled from "styled-components";

const StyledColumn = styled.div`
  flex: 1;
  width: ${({ $width }) => $width};
  padding: ${({ $padding }) => $padding};
  margin: 0 auto !important;
  @media screen and (max-width: ${({ $width }) => $width}) {
    width: 100%;
  }
`;

export default function Column({
  as = "div",
  width = "800px",
  padding = 0,
  children,
}) {
  return (
    <StyledColumn as={as} $width={width} $padding={padding}>
      {children}
    </StyledColumn>
  );
}
