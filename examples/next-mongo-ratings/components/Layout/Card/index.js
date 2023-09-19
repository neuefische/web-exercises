import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: ${({ $padding }) => $padding};
  gap: ${({ $gap }) => $gap};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  & > * {
    margin: 0;
  }
`;

export default function Card({
  as = "article",
  gap = "1.5rem",
  padding = "1.5rem",
  backgroundColor = "white",
  children,
}) {
  return (
    <StyledCard
      as={as}
      $gap={gap}
      $padding={padding}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledCard>
  );
}
