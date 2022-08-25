import {
    personWithNameAgeEmail,
    nameOfAlex,
    ageOfAlex,
    personToChange,
    petPluto,
  } from './index';
  
  test('Exersice 1: Object personWithNameAgeEmail has properties name, age and email', () => {
    expect(personWithNameAgeEmail.name).toBeDefined();
    expect(personWithNameAgeEmail.age).toBeDefined();
    expect(personWithNameAgeEmail.email).toBeDefined();
  });
  
  test('Exersice 2: nameOfAlex is "Alex" and ageOfAlex ist 24', () => {
    expect(nameOfAlex).toEqual('Alex');
    expect(ageOfAlex).toEqual(24);
  });
  
  test('Exersice 3: personToChange.name is "Alex" and personToChange.age is 35', () => {
    expect(personToChange.name).toEqual('Alex');
    expect(personToChange.age).toEqual(35);
  });
  
  test('Exersice 4: petPluto.age is 5 and petPluto.breed is husky', () => {
    expect(petPluto.age).toEqual(5);
    expect(petPluto.breed).toEqual('husky');
  });
  