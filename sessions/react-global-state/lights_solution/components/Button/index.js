import styled from "styled-components";

export default styled.button`
  border: none;
  background-color: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(10px) brightness(1.2);
  border-radius: 8px;
  padding: 18px 24px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: black;
  transition: background-color 0.2s, color 0.2s;
  width: 100%;
  font-size: 16px;

  &:hover:not(:disabled) {
    background-color: rgb(255 255 255 / 0.55);
  }

  &:active:not(:disabled) {
    background-color: rgb(255 255 255 / 0.6);
  }

  &:disabled {
    background-color: rgb(175 175 175 / 0.3);
    color: rgb(0 0 0 / 0.3);
  }
`;
