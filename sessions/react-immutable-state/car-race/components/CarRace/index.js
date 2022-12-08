import { Fragment, useState } from "react";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

const finishLine = 200;

export default function CarRace() {
  const [cars, setCars] = useState(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    console.log("clickedCar:", clickedCar);
    console.log("coveredDistance: ", coveredDistance);
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <div>
      {winner ? (
        <div>
          <h1>
            <span>{winner.emoji}</span> won!
          </h1>
          <button
            onClick={() =>
              setCars(
                cars.map((car) => ({
                  ...car,
                  position: { x: 0, lastDistance: 0 },
                }))
              )
            }
          >
            Restart
          </button>
        </div>
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </div>
  );
}
