import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  gap: ${({ $gap }) => $gap};
  ${({ $cols }) => {
    const { base, ...cols } = $cols;
    return `
    grid-template-columns: repeat(${base}, 1fr);
    ${Object.entries(cols)
      .map(
        ([size, count]) => `
      @media screen and (max-width: ${size}) {
        grid-template-columns: repeat(${count}, 1fr);
      }`
      )
      .join("\n")}
    `;
  }}
`;

export default function Grid({
  as = "div",
  gap = "1rem",
  cols = {
    base: 3,
    "1000px": 2,
    "800px": 1,
  },
  children,
}) {
  return (
    <StyledGrid as={as} $gap={gap} $cols={cols}>
      {children}
    </StyledGrid>
  );
}
