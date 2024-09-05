import styled from "styled-components";

const Number = styled.h3`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin: 0;
`;

const StyledSeason = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function Season({ number, children }) {
  return (
    <StyledSeason>
      <Number>Season {number}</Number>
      {children}
    </StyledSeason>
  );
}
