import Link from "next/link";
import styled from "styled-components";

export default styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
