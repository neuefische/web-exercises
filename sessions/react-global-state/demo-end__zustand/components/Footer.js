import { useAnimalsStore } from "../stores/animals";
export default function Footer() {
    const dragonCount = useAnimalsStore((state) => state.dragonCount());

    return (
        <span>
            Counting since 1899 — Currently there are{" "}
            <strong>{dragonCount}</strong> dragons.
        </span>
    );
}
