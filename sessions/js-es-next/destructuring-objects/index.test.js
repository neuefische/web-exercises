import {
  course,
  name,
  years,
  isAdmin,
  dogName,
  dogGreed,
  dogAge,
  personLastname,
  moreInformation,
} from './index';
  
test('Exersice 1: course is "Web Development"', () => {
  expect(course).toEqual('Web Development');
});
  
test('Exersice 2: name is "John", years is 30 and isAdmin is false', () => {
  expect(name).toEqual('John');
  expect(years).toEqual(30);
  expect(isAdmin).toEqual(false);
});
  
test('Exersice 3: dogName is "Pluto", dogGreed is husky and dogAge is 5', () => {
  expect(dogName).toEqual('Pluto');
  expect(dogGreed).toEqual('husky');
  expect(dogAge).toEqual(5);
});
  
test('Exersice 4: personLastname is "Main" and the object moreInformation contains two key/values: firstname: "Alex" and age: 24', () => {
  expect(personLastname).toEqual('Main');
  expect(moreInformation).toHaveProperty('age', 24);
  expect(moreInformation).toHaveProperty('firstname', 'Alex');
});
  