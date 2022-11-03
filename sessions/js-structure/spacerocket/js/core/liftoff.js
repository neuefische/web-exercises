import { getRocket } from "./rocket.js";

export function liftoff() {
  const rocket = getRocket();

  if (rocket.countdown !== rocket.requiredCountdown) {
    throw new Error("Cannot lift off without the correct countdown sequence.");
  }

  if (!rocket.fuel) {
    throw new Error("Cannot lift off without fuel.");
  }

  rocket.liftoff = true;
}
