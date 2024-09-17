import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox $isBlack={isBlack} />;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
