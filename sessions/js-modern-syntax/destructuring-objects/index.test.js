import {
	course,
	name,
	age,
	isAdmin,
	dogName,
	dogGreed,
	dogAge,
	personLastName,
	moreInformation,
} from './index';

test('Exercise 1: course is "Web Development"', () => {
	expect(course).toEqual('Web Development');
});

test('Exercise 2: name is "John", years is 30 and isAdmin is false', () => {
	expect(name).toEqual('John');
	expect(age).toEqual(30);
	expect(isAdmin).toEqual(false);
});

test('Exercise 3: dogName is "Pluto", dogGreed is husky and dogAge is 5', () => {
	expect(dogName).toEqual('Pluto');
	expect(dogGreed).toEqual('husky');
	expect(dogAge).toEqual(5);
});

test('Exercise 4: personLastname is "Main" and the object moreInformation contains two key/values: firstname: "Alex" and age: 24', () => {
	expect(personLastName).toEqual('Main');
	expect(moreInformation).toHaveProperty('age', 24);
	expect(moreInformation).toHaveProperty('firstname', 'Alex');
});
