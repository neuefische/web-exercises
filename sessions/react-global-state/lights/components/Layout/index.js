import styled from "styled-components";
import Image from "next/image";

const StyledLayout = styled.div`
  color: white;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  z-index: -1;
  filter: ${({ isDimmed }) => (isDimmed ? "brightness(70%)" : "none")};
  transition: filter 1.2s;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  opacity: 0.3;
  user-select: none;
`;

const Content = styled.div`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 32px 0;
`;

export default function Layout({ children, isDimmed }) {
  return (
    <StyledLayout>
      <Background isDimmed={isDimmed}>
        <StyledImage src="/images/home.jpg" fill alt="" />
      </Background>
      <Content>{children}</Content>
    </StyledLayout>
  );
}
