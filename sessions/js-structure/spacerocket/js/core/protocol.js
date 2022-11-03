/* eslint-disable operator-linebreak */
import { render } from "../visual/render.js";
import { getNewRocket } from "./rocket.js";

if (!window.localStorage.getItem("state")) {
  window.localStorage.setItem(
    "state",
    JSON.stringify({
      tries: 0,
      cost: 0,
    })
  );
}

function logTry(cost) {
  const state = JSON.parse(window.localStorage.getItem("state"));
  state.tries++;
  state.cost += cost;
  window.localStorage.setItem("state", JSON.stringify(state));

  return state;
}

export function launch(launchFunction) {
  window.rocket = getNewRocket();
  try {
    launchFunction();

    if (!window.rocket.liftoff) {
      throw new Error("Rocket did not lift off");
    }

    if (!window.rocket.payloadDeployed) {
      throw new Error("Payload not deployed");
    }

    if (
      !window.rocket.payload.some((satellite) => satellite.type === "NFSAT")
    ) {
      throw new Error("NFSAT payload was not put into orbit");
    }

    if (
      !window.rocket.payload.some((satellite) => satellite.type === "FISHSAT")
    ) {
      throw new Error("FISHSAT payload was not put into orbit");
    }

    window.rocket.success = true;
  } catch (error) {
    window.rocket.error = error;
  } finally {
    const state = logTry(
      window.rocket.cost +
        window.rocket.payload.reduce(
          (acc, satellite) => acc + satellite.cost,
          0
        )
    );
    render(window.rocket, state);
  }
}
