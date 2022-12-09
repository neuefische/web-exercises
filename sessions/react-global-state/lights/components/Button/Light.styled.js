import styled from "styled-components";

export const Icon = styled.div`
  font-size: 32px;
  filter: ${({ isOn }) => (isOn ? "none" : "grayscale(100%)")};
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
