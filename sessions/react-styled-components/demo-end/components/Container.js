import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  gap: 2rem;
  margin-block-end: 2rem;
`;
