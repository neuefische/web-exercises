import styled from "styled-components";

const StyledLayout = styled.div`
  width: min(100% - 32px, 500px);
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}
