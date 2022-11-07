export function greet(name = 'stranger') {
	if (name === '<YOUR-NAME>') {
		name = 'coach';
	}

	return `Hello ${name}!`;
}
