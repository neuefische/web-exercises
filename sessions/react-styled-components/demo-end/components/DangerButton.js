import styled from "styled-components";
import Button from "./Button";

export default styled(Button)`
  background-color: var(--secondary-color);

  &:hover {
    background-color: var(--primary-background);
  }
`;
