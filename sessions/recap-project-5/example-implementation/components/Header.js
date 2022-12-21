import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  bottom: 3rem;
  width: 100%;
  max-width: 600px;
  background: #000;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 0;
  border-bottom: 5px solid ${(props) => props.colorSet[0]};

  &::before {
    content: "!";
    color: ${(props) => props.colorSet[0]};
  }
`;

const HeaderText = styled.p`
  color: #fff;
`;

const Spotlight = styled.p`
  color: yellow;
  align-self: flex-start;
`;

function Header({ randomImage }) {
  const colorSet = randomImage.colors;

  return (
    <StyledHeader>
      <Spotlight>
        Spotlight: <small>©</small>
        {randomImage.artist}
      </Spotlight>
      <Title colorSet={colorSet}>ART</Title>
      <HeaderText>Contemporary Art Gallery</HeaderText>
    </StyledHeader>
  );
}

export default Header;
