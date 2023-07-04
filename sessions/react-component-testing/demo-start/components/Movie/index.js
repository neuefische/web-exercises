import styled, { css } from "styled-components";

const Title = styled.h2`
  text-decoration: underline;
  font-size: 1.7rem;
  text-decoration-color: transparent;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  margin: 0;
  opacity: 0.5;
  transition: all 200ms;
  ${({ $isLiked }) =>
    $isLiked &&
    css`
      opacity: 1;
      text-decoration-color: var(--nemo);
    `}
`;

const Button = styled.button`
  border: none;
  background-color: var(--granite);
  color: var(--foam);
  border-radius: 999px;
  width: 2em;
  height: 2em;

  &:hover {
    background-color: var(--nemo);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const StyledMovie = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
  margin: -8px -16px;
  border-radius: 4px;

  &:hover {
    background-color: var(--water);
  }
`;

export default function Movie({
  id,
  name,
  isLiked = false,
  onDeleteMovie = () => {},
  onToggleLike = () => {},
}) {
  return (
    <StyledMovie>
      <Title $isLiked={isLiked}>{name}</Title>
      <Actions>
        <Button
          type="button"
          title={isLiked ? `unlike ${name}` : `like ${name}`}
          aria-label={isLiked ? `unlike ${name}` : `like ${name}`}
          onClick={() => onToggleLike(id)}
        >
          {isLiked ? "👍" : "👎"}
        </Button>
        <Button
          type="button"
          title={`delete ${name}`}
          aria-label={`delete ${name}`}
          onClick={() => onDeleteMovie(id)}
        >
          ✕
        </Button>
      </Actions>
    </StyledMovie>
  );
}
