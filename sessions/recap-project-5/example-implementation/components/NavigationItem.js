import styled from "styled-components";

const ListItem = styled.li`
  padding: 0;
  margin: 0;
`;

function NavigationItem({ children }) {
  return <ListItem>{children}</ListItem>;
}

export default NavigationItem;
