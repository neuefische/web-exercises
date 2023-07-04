import Link from "next/link";
import styled from "styled-components";

const StyledNavigationLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => "flex-" + $align};
  width: var(--width-wrapper);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: var(--font-body);
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export default function NavigationLink({ href, children, align = "start" }) {
  return (
    <StyledNavigationLink $align={align}>
      <StyledLink href={href}>{children}</StyledLink>
    </StyledNavigationLink>
  );
}
