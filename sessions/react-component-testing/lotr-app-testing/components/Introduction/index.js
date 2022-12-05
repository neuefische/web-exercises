import styled from "styled-components";

const StyledIntroduction = styled.article`
  width: var(--width-wrapper);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export default function Introduction({ title, text }) {
  return (
    <StyledIntroduction>
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledIntroduction>
  );
}
