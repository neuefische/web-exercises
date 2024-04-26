export const rocket = {
  id: "SpaceRocket",
  checksum: "a83cc046377cc58f8c0733a48b824f28c2c70b18",
  countdown: 0,
  requiredCountdown: 5,
  fuel: false,
  liftoff: false,
  payload: [],
  payloadDeployed: false,
  cost: 12000000,
  success: false,
};

export function getNewRocket() {
  // Dirty deep clone 🫠
  return JSON.parse(JSON.stringify(rocket));
}

export function getRocket() {
  if (!window.rocket) {
    throw new Error("No rocket found");
  }

  return window.rocket;
}
