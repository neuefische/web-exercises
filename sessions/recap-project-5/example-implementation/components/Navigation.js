import { useRouter } from "next/router";
import styled from "styled-components";
import NavigationLink from "./NavigationLink";
import NavigationItem from "./NavigationItem";
import NavigationList from "./NavigationList";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 5vh;
  background-color: #000;
  color: #fff;
`;

function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink
            href="/"
            active={router.pathname === "/" ? "active" : ""}
          >
            Spotlight
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            href="/pieces"
            active={router.pathname.startsWith("/pieces") ? "active" : ""}
          >
            Pieces
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            href="/favorites"
            active={router.pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </StyledNavigation>
  );
}

export default Navigation;
