import Button from "@/components/Button";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: flex-start;
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props with the ternary</h2>
      <FlexContainer>
        <Button $color="danger">Button </Button>
        <Button>Button Danger</Button>
      </FlexContainer>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer $direction="column">
        <Button $variant="text">Button - Text </Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}
