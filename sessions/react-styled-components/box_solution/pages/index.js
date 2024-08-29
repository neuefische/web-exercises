import BoxWithStyledComponents from "@/components/BoxWIhtStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";
export default function HomePage() {
  return (
    <FlexContainer $column>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </FlexContainer>
  );
}
const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
`;
