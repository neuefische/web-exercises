import { getRocket } from "./rocket.js";

export function loadPayload(satellite) {
  const rocket = getRocket();
  if (rocket.liftoff || rocket.countdown > 0) {
    throw new Error(
      `Cannot load ${satellite.id}. Make sure to load before countdown or liftoff.`
    );
  }

  if (rocket.payload.length >= 2) {
    throw new Error(`Cannot load ${satellite.id}. Max payload reached.`);
  }

  rocket.payload.push(satellite);
}
