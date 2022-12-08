import React, { useState } from "react";
import styled from "styled-components";

const finishLine = 200;

export default function CarRace() {
  const [cars, setCars] = useState([
    {
      position: { x: 0, lastDistance: 0 },
      emoji: "🚗",
    },
    {
      position: { x: 0, lastDistance: 0 },
      emoji: "🚙",
    },
    {
      position: { x: 0, lastDistance: 0 },
      emoji: "🏎",
    },
    {
      position: { x: 0, lastDistance: 0 },
      emoji: "🚕",
    },
    {
      position: { x: 0, lastDistance: 0 },
      emoji: "🚓",
    },
  ]);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    setCars(
      cars.map((car) =>
        car.emoji !== clickedCar.emoji
          ? car
          : {
              ...car,
              position: {
                ...car.position,
                x: car.position.x + coveredDistance,
                lastDistance: coveredDistance,
              },
            }
      )
    );
  }

  function getRandomDistance() {
    return Math.floor(Math.random() * 10) + 5;
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <div>
      {winner ? (
        <div>
          <h1>{winner.name} won!</h1>
          <button
            onClick={() =>
              setCars(
                cars.map((c) => ({ ...c, position: { x: 0, y: c.position.y } }))
              )
            }
          >
            Restart
          </button>
        </div>
      ) : (
        <RacesContainer>
          <AllCarRoutes role="list">
            <FinishHeadline finishLine={finishLine}>🏁 Finish</FinishHeadline>
            {cars.map((car) => (
              <SingleCarRoute key={car.emoji}>
                <Track finishLine={finishLine}>
                  <CarButton
                    onClick={() => moveCar(car)}
                    positionX={car.position.x}
                  >
                    <span aria-label={`Move ${car.name} forward`}>
                      {car.emoji}
                    </span>
                  </CarButton>
                  <FinishLine finishLine={finishLine} />
                </Track>
              </SingleCarRoute>
            ))}
          </AllCarRoutes>
          <DistancesList>
            <DistanceHeadline>Last Distance</DistanceHeadline>
            {cars.map((car) => (
              <SingleDistanceItem key={car.emoji}>
                <DistanceDisplay>{car.position.lastDistance}</DistanceDisplay>
              </SingleDistanceItem>
            ))}
          </DistancesList>
        </RacesContainer>
      )}
    </div>
  );
}

const CarButton = styled.button`
  font-size: 2rem;
  transform: ${({ positionX }) => `translateX(${positionX}px)`} rotateY(180deg);
`;

const AllCarRoutes = styled.ul`
  display: flex;
  flex-direction: column;
`;

const DistancesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: fit-content;
`;

const DistanceDisplay = styled.span`
  font-size: 1.5rem;
  align-self: center;
`;

const DistanceHeadline = styled.h2`
  /* align-self: end; */
`;

const FinishHeadline = styled.h2`
  transform: ${({ finishLine }) => `translateX(${finishLine}px)`};
`;

const FinishLine = styled.div`
  width: 10px;
  border: 1px solid black;
  background: white;
  transform: ${({ finishLine }) => `translateX(${finishLine}px)`};
`;

const RacesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SingleCarRoute = styled.li`
  display: flex;
  justify-content: space-between;
`;

const SingleDistanceItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 2rem;
`;

const Track = styled.div`
  background: grey;
  width: ${({ finishLine }) => `${finishLine + 50}px`};
  margin-block: 0.25rem;
  display: flex;
`;
