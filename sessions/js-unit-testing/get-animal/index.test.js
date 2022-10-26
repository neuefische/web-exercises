import {getAnimal} from './index.js';

test('getAnimals() returns a string "I really like cats!" if called with the argument "cat".', () => {
	const result = getAnimal('cat');
	expect(result).toBe('I really like cats!');
});
test('getAnimals() returns a string "I like [animalPluralName]!" if called with a string argument.', () => {
	const result = getAnimal('dog');
	expect(result).toBe('I like dogs!');
});
test('getAnimals() returns a string "I do not like animals at all!" if called without arguments.', () => {
	const result = getAnimal();
	expect(result).toBe('I do not like animals at all!');
});
