import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  padding-block: 24px;
  width: 100%;
  background: linear-gradient(
      110.24deg,
      rgba(255, 255, 255, 0) 49.9%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    ${({ color }) => color};
`;
