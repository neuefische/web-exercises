import styled from "styled-components";

const Title = styled.h2`
  text-decoration: underline;
  font-size: 1.7rem;
  text-decoration-color: var(--nemo);
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  margin: 0;
  opacity: 1;
`;

const StyledShow = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function Show({ name, children }) {
  return (
    <StyledShow>
      <Title>{name}</Title>
      {children}
    </StyledShow>
  );
}
