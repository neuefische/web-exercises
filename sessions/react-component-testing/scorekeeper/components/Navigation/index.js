import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink href="/game">Play</StyledLink>
      <StyledLink href="/history">History</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  background-color: ${(props) => (props.isActive ? "#333" : "lightgray")};
  ${(props) => props.isActive && "color: white;"}
  border: 1px solid black;
  width: 100%;
`;
