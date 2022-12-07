import styled from "styled-components";
import Link from "next/link";

export default styled(Link)`
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
