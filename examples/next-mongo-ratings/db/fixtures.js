import { faker } from "@faker-js/faker";

const emojis = {
  bear: "🐻",
  bird: "🐦",
  cat: "🐈",
  cetacean: "🐬",
  cow: "🐮",
  crocodilia: "🐊",
  dog: "🐶",
  fish: "🐠",
  horse: "🐴",
  insect: "🪲",
  lion: "🦁",
  rabbit: "🐰",
  rodent: "🐭",
  snake: "🐍",
};

function getUser() {
  return {
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    image: `https://dummyimage.com/100x100/${faker.color.rgb({
      format: "hex",
      prefix: "",
    })}/fff`,
  };
}

function getRating() {
  return {
    value: faker.number.int({ min: 3, max: 5 }),
    text: faker.word.words({ count: { min: 5, max: 7 } }),
  };
}

function getSpecies(type) {
  const species = faker.animal[type]();
  if (species.length > 20) {
    return getSpecies(type);
  }
  return species;
}

export const users = Array.from({ length: 5 }, getUser);

export const pets = Array.from({ length: 20 }, (_) => {
  const type = faker.animal.type();
  const species = getSpecies(type);
  const name = faker.person.firstName();
  const image = emojis[type];
  const age = faker.number.int({ min: 1, max: 20 });
  const ratings = Array.from(
    { length: faker.number.int({ min: 3, max: 10 }) },
    getRating
  );
  return { type, age, species, name, image, ratings };
});
