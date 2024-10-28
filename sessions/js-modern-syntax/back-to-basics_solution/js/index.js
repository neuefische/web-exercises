// Having practiced destructuring, default parameters, and the spread operator,
// try reversing the challenge by rewriting the code without these features.


export function getNameAndCountry(city) {
  return [city.name, city.country];
}

export function getRelocatedCity(city1, city2) {
  city2 = city2 || { name: "Berlin", country: "Germany" };

  const country = getNameAndCountry(city2)[1];

  const relocatedCity = {}

for (const key in city1) {

  // 💡 Hint
  // The "hasOwnProperty()" method, ensures only direct properties of city1 are
  // copied, excluding any inherited properties from the prototype chain. 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 
  if (city1.hasOwnProperty(key)) {
    relocatedCity[key] = city1[key];
  }
}

  relocatedCity.country = country
  return  relocatedCity
}

