import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "yellow" : "white")};

  &:hover {
    color: lightblue;
  }
`;

function NavigationLink({ href, children, active }) {
  return (
    <StyledLink href={href} active={active}>
      {children}
    </StyledLink>
  );
}

export default NavigationLink;
