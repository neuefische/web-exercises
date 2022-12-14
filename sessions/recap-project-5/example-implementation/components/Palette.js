import styled from "styled-components";

const ColorCube = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: ${({ paletteColor }) => paletteColor};
`;

function Palette({ paletteColor }) {
  return <ColorCube paletteColor={paletteColor}></ColorCube>;
}

export default Palette;
