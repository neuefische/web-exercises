let count = 0;
export function getAuthorName() {
	const authors = ['Caesar', 'Horace', 'Homer', 'Ovid', 'Cicero'];

	if (count > 4) {
		count = 0;
	}

	const author = authors[count];
	count++;
	return author;
}
