import styled from "styled-components";

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
      <InputStyled
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

const InputStyled = styled.input`
  border: 2px solid #bbb;
`;
