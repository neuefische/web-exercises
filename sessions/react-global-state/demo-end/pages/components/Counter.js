import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1ch;
  align-items: center;

  > :first-child {
    min-width: 8ch;
  }

  > span {
    min-width: 2ch;
    text-align: center;
  }
`;

export default function Counter({ animal, handleAdd, handleSubtract }) {
  return (
    <Container>
      <strong>{animal.name}:</strong>
      <button
        type="button"
        onClick={() => {
          handleSubtract(animal.id);
        }}
      >
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{animal.count}</span>
      <button
        type="button"
        onClick={() => {
          handleAdd(animal.id);
        }}
      >
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}
