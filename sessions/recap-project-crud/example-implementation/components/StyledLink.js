import Link from "next/link";
import styled from "styled-components";

export default styled(Link)`
  position: fixed;

  background-color: lightsalmon;

  padding: 1rem;
  border-radius: 14px;

  bottom: 2rem;
  left: ${({ $isHomepage }) => ($isHomepage ? null : "2rem")};
  right: ${({ $isHomepage }) => ($isHomepage ? "2rem" : null)};

  text-decoration: none;

  &:hover {
    color: white;
  }
`;
