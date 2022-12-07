import Shows from "../components/Shows";

const initialShows = [
  {
    id: "28djdh72",
    name: "A Series of Unfortunate Events",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            number: 1,
            title: "The Bad Beginning: Part One",
            hasSeen: true,
          },
          {
            number: 2,
            title: "The Bad Beginning: Part Two",
            hasSeen: true,
          },
          {
            number: 3,
            title: "The Reptile Room: Part One",
            hasSeen: true,
          },
          {
            number: 4,
            title: "The Reptile Room: Part Two",
            hasSeen: false,
          },
          {
            number: 5,
            title: "The Wide Window: Part One",
            hasSeen: false,
          },
          {
            number: 6,
            title: "The Wide Window: Part Two",
            hasSeen: false,
          },
          {
            number: 7,
            title: "The Miserable Mill: Part One",
            hasSeen: false,
          },
          {
            number: 8,
            title: "The Miserable Mill: Part Two",
            hasSeen: false,
          },
        ],
      },
      {
        number: 2,
        episodes: [
          {
            number: 9,
            title: "The Austere Academy: Part One",
            hasSeen: false,
          },
          {
            number: 10,
            title: "The Austere Academy: Part Two",
            hasSeen: false,
          },
          {
            number: 11,
            title: "The Ersatz Elevator: Part One",
            hasSeen: false,
          },
          {
            number: 12,
            title: "The Ersatz Elevator: Part Two",
            hasSeen: false,
          },
          {
            number: 13,
            title: "The Vile Village: Part One",
            hasSeen: false,
          },
          {
            number: 14,
            title: "The Vile Village: Part Two",
            hasSeen: false,
          },
          {
            number: 15,
            title: "The Hostile Hospital: Part One",
            hasSeen: false,
          },
          {
            number: 16,
            title: "The Hostile Hospital: Part Two",
            hasSeen: false,
          },
          {
            number: 17,
            title: "Carnivorous Carnival: Part One",
            hasSeen: false,
          },
          {
            number: 18,
            title: "Carnivorous Carnival: Part Two",
            hasSeen: false,
          },
        ],
      },
      {
        number: 3,
        episodes: [
          {
            number: 19,
            title: "Slippery Slope: Part One",
            hasSeen: false,
          },
          {
            number: 20,
            title: "Slippery Slope: Part Two",
            hasSeen: false,
          },
          {
            number: 21,
            title: "Grim Grotto: Part One",
            hasSeen: false,
          },
          {
            number: 22,
            title: "Grim Grotto: Part Two",
            hasSeen: false,
          },
          {
            number: 23,
            title: "Penultimate Peril: Part One",
            hasSeen: false,
          },
          {
            number: 24,
            title: "Penultimate Peril: Part Two",
            hasSeen: false,
          },
          {
            number: 25,
            title: "The End",
            hasSeen: false,
          },
        ],
      },
    ],
  },
  {
    id: "28djdh73",
    name: "The Queen's Gambit",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            number: 1,
            title: "Openings",
            hasSeen: false,
          },
          {
            number: 2,
            title: "Exchanges",
            hasSeen: false,
          },
          {
            number: 3,
            title: "Doubled Pawns",
            hasSeen: false,
          },
          {
            number: 4,
            title: "Middle Game",
            hasSeen: false,
          },
          {
            number: 5,
            title: "Fork",
            hasSeen: false,
          },

          {
            number: 6,
            title: "Adjournment",
            hasSeen: false,
          },
          {
            number: 7,
            title: "End Game",
            hasSeen: false,
          },
        ],
      },
    ],
  },
];

export default function HomePage() {
  return <Shows initialShows={initialShows} />;
}
