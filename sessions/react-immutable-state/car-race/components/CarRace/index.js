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

  console.log("cars", cars);

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
        <div>
          <FinishHeadline finishLine={finishLine}>Finish</FinishHeadline>
          {cars.map((car) => (
            <React.Fragment key={car.emoji}>
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
              <span>{car.position.lastDistance}</span>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

const CarButton = styled.button`
  font-size: 2rem;
  transform: ${({ positionX }) => `translateX(${positionX}px)`} rotateY(180deg);
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

const Track = styled.div`
  background: grey;
  max-width: ${({ finishLine }) => `${finishLine + 50}px`};
  margin-block: 0.25rem;
  border: 1px solid green;
  display: flex;
`;
