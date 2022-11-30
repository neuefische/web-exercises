import styled from "styled-components";
import { StyledButton } from "./StyledButton";

export const StyledDangerButton = styled(StyledButton)`
  background-color: var(--secondary-color);

  &:hover {
    background-color: var(--primary-background);
  }
`;
