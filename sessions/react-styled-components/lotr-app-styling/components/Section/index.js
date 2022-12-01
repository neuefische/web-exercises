import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: var(--width-wrapper);
  gap: 16px;
`;

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
}
