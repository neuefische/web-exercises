import { getRocket } from "./rocket.js";

export function fuel() {
  const rocket = getRocket();

  if (rocket.countdown > 0) {
    throw new Error("Cannot fuel after countdown has started.");
  }

  rocket.fuel = true;
}
