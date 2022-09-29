import {
	name,
	price,
	quantity,
	firstNameOfChris,
	lastNameOfChris,
	ageOfChris,
	firstNameOfAlex,
	lastNameOfAlex,
	lastName,
	student1,
	student2,
	student3,
	student4,
	student5,
	result,
} from './index';

test('Exersice 1: name is Egg, price is 0.25 and quantity is 12', () => {
	expect(name).toEqual('Egg');
	expect(price).toEqual(0.25);
	expect(quantity).toEqual(12);
});

test('Exersice 2: firstNameOfChris is "Chris", lastNameOfChris is "Owen" and ageOfChris is 12', () => {
	expect(firstNameOfChris).toEqual('Chris');
	expect(lastNameOfChris).toEqual('Owen');
	expect(ageOfChris).toEqual(12);
});

test('Exersice 3: firstNameOfAlex is "Alex", lastNameOfAlex is "Main"', () => {
	expect(firstNameOfAlex).toEqual('Alex');
	expect(lastNameOfAlex).toEqual('Main');
});

test('Exersice 4: lastName is "Alexandare"', () => {
	expect(lastName).toEqual('Alexandare');
});

test('Exersice 5: student1 is "Chris", student2 is "Ahmad", student3 is "Antigoni", student4 is "Toby" and student5 is "Sam"', () => {
	expect(student1).toEqual('Chris');
	expect(student2).toEqual('Ahmad');
	expect(student3).toEqual('Antigoni');
	expect(student4).toEqual('Toby');
	expect(student5).toEqual('Sam');
});

test('Exersice 6: result is 44', () => {
	expect(result).toEqual(44);
});
