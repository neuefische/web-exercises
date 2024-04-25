import styled from "styled-components";

export const LightButton = styled.button`
  border: none;
  background-color: ${({ $isOn }) =>
    $isOn ? "rgb(255 255 255 / 0.5)" : "rgb(175 175 175 / 0.5)"};
  backdrop-filter: blur(10px) brightness(1.2);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1;
  width: 160px;
  gap: 12px;
  color: black;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $isOn }) =>
      $isOn ? "rgb(255 255 255 / 0.55)" : "rgb(175 175 175 / 0.55)"};
  }

  &:active {
    background-color: ${({ $isOn }) =>
      $isOn ? "rgb(255 255 255 / 0.6)" : "rgb(175 175 175 / 0.6)"};
  }
`;

export const Icon = styled.div`
  font-size: 32px;
  filter: ${({ $isOn }) => ($isOn ? "none" : "grayscale(100%)")};
  transition: filter 0.2s;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-weight: bold;
`;

export const State = styled.div`
  color: #666;
`;
