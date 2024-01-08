import Link from "next/link";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex";
import Avatar from "@/components/Layout/Avatar";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 0 1rem;
  height: 3rem;
  font-weight: bold;
  & :last-child {
    margin-left: auto;
  }
  a {
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
    &.profile-link {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-weight: normal;
      font-size: 0.9rem;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
    </StyledNav>
  );
}
