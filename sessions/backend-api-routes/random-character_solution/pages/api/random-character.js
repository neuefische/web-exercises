import { Chance } from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    name: chance.name(),
    age: chance.age(),
    profession: chance.profession(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  response.status(200).json(character);
}
