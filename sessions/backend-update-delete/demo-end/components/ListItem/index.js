import styled from "styled-components";

const StyledListItem = styled.li`
  width: 100%;
`;

export default function ListItem({ children }) {
  return <StyledListItem>{children}</StyledListItem>;
}
