import styled from "styled-components";

export const ControlsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
`;

export const ControlsButton = styled.button`
  margin-left: auto;
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 1rem;
`;

export const ControlsDisplay = styled.output`
  box-shadow: 0 0 0 1px rgb(209, 206, 206, 0.5);
  color: #ddd;
  padding: 5px 8px;
  border-radius: 4px;
`;
