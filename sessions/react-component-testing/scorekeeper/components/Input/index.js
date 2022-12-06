import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #bbb;
`;

export default function Input({
  labelText,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <StyledInput
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}
