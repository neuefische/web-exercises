import styled from "styled-components";

const StyledLayout = styled.main`
  display: grid;
  gap: 28px;
  padding: 20px;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <h1>Scorekeeper</h1>
      {children}
    </StyledLayout>
  );
}
