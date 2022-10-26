export function getAnimal(name) {
	if (name === 'cat') {
		return 'I really like cats!';
	}

	if (name === undefined) {
		return 'I do not like animals at all!';
	}

	return `I like ${name}s!`;
}
