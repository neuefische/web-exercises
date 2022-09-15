let count = 0;
const authors = ['Caesar', 'Horace', 'Homer', 'Ovid', 'Cicero'];

export function getAuthorName() {
	if (count > 4) {
		count = 0;
	}

	const author = authors[count];
	count++;
	return author;
}
