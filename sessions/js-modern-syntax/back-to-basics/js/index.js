// Having practiced destructuring, default parameters, and the spread operator,
// try reversing the challenge by rewriting the code without these features.

export const getNameAndCountry = ({ name, country }) => [name, country];


export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {

  const [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};


