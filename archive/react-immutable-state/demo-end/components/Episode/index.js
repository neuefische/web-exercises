import styled, { css } from "styled-components";
import Eye from "./eye.svg";
import EyeOff from "./eye-off.svg";

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;

  ${({ $hasSeen }) =>
    $hasSeen &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
    `}
`;

const Button = styled.button`
  border: none;
  background-color: var(--granite);
  color: var(--foam);
  border-radius: 999px;
  width: 2.5em;
  height: 2.5em;
  padding: 0;
  display: grid;
  place-items: center;

  ${({ $hasSeen }) =>
    $hasSeen &&
    css`
      opacity: 0.5;
    `}

  &:hover {
    background-color: var(--nemo);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const StyledEpisode = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 6px 12px;
  margin: -6px -12px;
  border-radius: 4px;

  &:hover {
    background-color: var(--water);
  }
`;

export default function Episode({ title, onToggleHasSeen, hasSeen }) {
  return (
    <StyledEpisode>
      <Title $hasSeen={hasSeen}>{title}</Title>
      <Actions>
        <Button
          type="button"
          onClick={() => {
            onToggleHasSeen();
          }}
          aria-label={hasSeen ? "Mark as unwatched" : "Mark as watched"}
          $hasSeen={hasSeen}
        >
          {hasSeen ? <EyeOff /> : <Eye />}
        </Button>
      </Actions>
    </StyledEpisode>
  );
}
