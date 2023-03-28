import { create } from "zustand";

export const useAnimalsStore = create((set, get) => ({
    animals: [
        { id: 1, name: "Cats", count: 0 },
        { id: 2, name: "Dogs", count: 0 },
        { id: 3, name: "Sheep", count: 0 },
        { id: 4, name: "Dragons", count: 0 },
    ],

    onSubtract: (animalId) =>
        set((state) => ({
            animals: state.animals.map((animal) =>
                animal.id === animalId
                    ? { ...animal, count: Math.max(0, animal.count - 1) }
                    : animal
            ),
        })),
    onAdd: (animalId) =>
        set((state) => ({
            animals: state.animals.map((animal) =>
                animal.id === animalId
                    ? { ...animal, count: animal.count + 1 }
                    : animal
            ),
        })),

    getSum: () =>
        get()
            .animals.map((animal) => animal.count)
            .reduce((a, b) => a + b),

    getAvr: () => get().getSum() / get().animals.length,

    dragonCount: () =>
        get().animals.find((animal) => animal.name === "Dragons").count,
}));
