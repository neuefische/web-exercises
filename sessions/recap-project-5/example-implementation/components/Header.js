import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 20vh;
  background-color: #000;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 0;
  border-bottom: 5px solid yellow;

  &::before {
    content: "!";
    color: yellow;
  }
`;

const HeaderText = styled.p`
  color: #fff;
`;

const Spotlight = styled.p`
  color: yellow;
  align-self: flex-start;
`;

function Header() {
  return (
    <StyledHeader>
      <Spotlight>
        Spotlight: <small>©</small>ARTIST
      </Spotlight>
      <Title>ART</Title>
      <HeaderText>Contemporary Art Gallery</HeaderText>
    </StyledHeader>
  );
}

export default Header;
