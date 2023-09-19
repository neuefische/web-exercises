import Stars from "../Stars";
import styled from "styled-components";

const StyledRating = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  background-color: #b5e2fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default function Rating({ value, text }) {
  return (
    <StyledRating>
      <Stars value={value} /> {text}
    </StyledRating>
  );
}
