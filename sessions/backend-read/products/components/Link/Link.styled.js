import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.3rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
