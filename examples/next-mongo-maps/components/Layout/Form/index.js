import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > * {
    margin: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: bold;
  }
  input,
  textarea {
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  textarea {
    height: 10rem;
    padding: 0.5rem;
  }
`;

export default function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>;
}
