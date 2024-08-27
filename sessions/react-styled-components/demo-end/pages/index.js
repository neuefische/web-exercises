import Link from "next/link";
import styled from "styled-components";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      <FlexContainer >
        <Button>Click me</Button>
        <Button $color="danger">Danger Button</Button>
      </FlexContainer>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer $column >
        <Button $variant="text">Button - Text </Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
      <p>
        This is a <StyledLink href="http://google.com">styled link</StyledLink>.
      </p>
    </>
  );
}

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

const FlexContainer = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
  flex-wrap: wrap;
  gap: 4px;
`;