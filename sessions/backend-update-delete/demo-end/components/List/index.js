import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;

export default function List({ children }) {
  return <StyledList>{children}</StyledList>;
}
