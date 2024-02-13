import styled from "styled-components";

export const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  justify-items: center;
`;

export const StyledCard = styled.article`
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid var(--color-light);
`;
