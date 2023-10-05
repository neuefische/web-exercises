import { faker } from "@faker-js/faker";

const BERLIN_COORDINATES = [52.52, 13.405];

function getImage() {
  const color = faker.color.rgb({ format: "hex", prefix: "" });
  return `https://dummyimage.com/600x400/${color}/fff`;
}

export const places = Array.from({ length: 10 }, (_) => {
  return {
    name: faker.location.city(),
    description: faker.lorem.paragraph({ min: 1, max: 3 }),
    image: getImage(),
    coordinates: faker.location.nearbyGPSCoordinate({
      origin: BERLIN_COORDINATES,
      radius: 3000,
      isMetric: true,
    }),
  };
});
