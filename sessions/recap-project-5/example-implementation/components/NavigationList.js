import styled from "styled-components";

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  list-style: none;
  padding-inline-end: 1rem;
`;

function NavigationList({ children }) {
  return <List>{children}</List>;
}

export default NavigationList;
