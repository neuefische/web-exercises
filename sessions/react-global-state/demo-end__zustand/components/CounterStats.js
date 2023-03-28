import { useAnimalsStore } from "../stores/animals";
export default function CounterStats() {
    const countSum = useAnimalsStore((state) => state.getSum());
    const countAverage = useAnimalsStore((state) => state.getAvr());
    const dragonCount = useAnimalsStore((state) => state.dragonCount());

    return (
        <div>
            <h2>Counter Stats</h2>
            <p>
                Our counters currently have an average count of{" "}
                <strong>{countAverage}</strong>, counting{" "}
                <strong>{countSum}</strong> things ... of which{" "}
                <strong>{dragonCount}</strong> are dragons.
            </p>
            <h2>Definitions</h2>
            <dl>
                <dt>Counter</dt>
                <dd>A counter is a thing that can count up or down.</dd>
                <dd>A counter is also a piece of furniture.</dd>
            </dl>
        </div>
    );
}
