import { getRocket } from "./rocket.js";

export function countdown() {
  const rocket = getRocket();
  if (rocket.liftoff) {
    throw new Error(
      "Cannot start countdown. Make sure to countdown before liftoff."
    );
  }

  if (rocket.countdown >= rocket.requiredCountdown) {
    rocket.countdown = 0;
    throw new Error(
      `Countdown too long. Make sure set a countdown length of ${rocket.requiredCountdown} to follow protocol.`
    );
  }

  rocket.countdown++;
}
