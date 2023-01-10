import styled from "styled-components";

const StyledButton = styled.button`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  appearance: none;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

export default function Button({ width, margin, children, type, onClick }) {
  return (
    <StyledButton type={type} width={width} margin={margin} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
