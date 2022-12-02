import styled from "styled-components";

export default function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

const StyledFooter = styled.footer`
  color: var(--color-grey);
`;
