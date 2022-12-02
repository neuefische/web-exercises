import styled from "styled-components";

export default function Alert({
  text = "Backup: Alert without color.",
  color = "#eff",
}) {
  return (
    <StyledAlert role="alert" color={color}>
      {text}
    </StyledAlert>
  );
}

const StyledAlert = styled.div`
  background-color: ${({ color }) => color};
  padding: 1rem;
  border-radius: 8px;
`;
