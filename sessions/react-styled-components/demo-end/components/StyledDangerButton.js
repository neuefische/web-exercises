import styled from "styled-components";
import StyledButton from "./StyledButton";

export default styled(StyledButton)`
  background-color: var(--secondary-color);

  &:hover {
    background-color: var(--primary-background);
  }
`;
