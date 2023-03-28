import styled from "styled-components";
import { useAnimalsStore } from "../stores/animals";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const AnimalName = styled.strong`
    width: 5rem;
`;

export default function Counter({ animal }) {
    const onSubtract = useAnimalsStore((state) => state.onSubtract);
    const onAdd = useAnimalsStore((state) => state.onAdd);

    return (
        <Container>
            <AnimalName>{animal.name}:</AnimalName>
            <button type="button" onClick={() => onSubtract(animal.id)}>
                <span role="img" aria-label="Subtract one from count">
                    ➖
                </span>
            </button>
            <span>{animal.count}</span>
            <button type="button" onClick={() => onAdd(animal.id)}>
                <span role="img" aria-label="Add one to count">
                    ➕
                </span>
            </button>
        </Container>
    );
}
