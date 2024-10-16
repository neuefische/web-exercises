import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  border: 1px solid black;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  color: #333;
  background-color: lightgrey;

  ${({ $path }) =>
    $path === "active" &&
    css`
      background-color: black;
      color: white;
    `}
`;

export default function Navigation({ players }) {
  const router = useRouter();
  return (
    <Nav>
      <StyledLink
        href={`${players?.length > 0 ? "/game" : "/"}`}
        $path={
          router.pathname === "/" || router.pathname === "/game" ? "active" : ""
        }
      >
        Play
      </StyledLink>
      <StyledLink
        href="/history"
        path={router.pathname === "/history" ? "active" : ""}
      >
        History
      </StyledLink>
    </Nav>
  );
}
