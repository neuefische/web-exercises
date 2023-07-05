import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ $gap = 24 }) => `${$gap}px`};
  padding-block: 48px;
`;
