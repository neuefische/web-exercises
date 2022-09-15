export function createList(students, nameOfList) {
	const list = document.createElement('ul');
	list.setAttribute('role', 'list');
	list.setAttribute('class', 'list');

	const listHeading = document.createElement('h2');
	listHeading.textContent = nameOfList;
	listHeading.setAttribute('class', 'list__heading');

	list.append(listHeading);

	students.forEach(student => {
		const listItem = document.createElement('li');
		listItem.setAttribute('class', 'list__item');

		const itemHeading = document.createElement('h3');
		itemHeading.textContent = student.name;

		listItem.append(itemHeading);

		const information = document.createElement('div');
		information.setAttribute('class', 'information');

		// Create Age
		const ageNumber = document.createElement('span');
		ageNumber.setAttribute('class', 'information__number');
		ageNumber.textContent = student.age;

		information.append(ageNumber);

		const ageDescription = document.createElement('span');
		ageDescription.textContent = 'Age';

		information.append(ageDescription);

		// Create Points
		const pointsNumber = document.createElement('span');
		pointsNumber.setAttribute('class', 'information__number');
		pointsNumber.textContent = student.points;

		information.append(pointsNumber);

		const pointsDescription = document.createElement('span');
		pointsDescription.textContent = 'Points';

		information.append(pointsDescription);

		// Create Happiness
		const happinessNumber = document.createElement('span');
		happinessNumber.setAttribute('class', 'information__number');
		happinessNumber.textContent = student.happiness;

		information.append(happinessNumber);

		const happinessDescription = document.createElement('span');
		happinessDescription.textContent = 'Happiness';

		information.append(happinessDescription);

		listItem.append(information);

		list.append(listItem);
	});

	document.body.append(list);
}

export function createLogOutput(value, nameOfOutput) {
	const output = document.createElement('section');
	output.setAttribute('class', 'output');

	const outputHeading = document.createElement('h2');
	outputHeading.setAttribute('class', 'output__heading');
	outputHeading.textContent = nameOfOutput;

	output.append(outputHeading);

	const outputValue = document.createElement('p');
	outputValue.setAttribute('class', 'output__value');
	outputValue.textContent = value;

	output.append(outputValue);

	document.body.append(output);
}

export function createObject(object, nameOfObject) {
	const list = document.createElement('ul');
	list.setAttribute('role', 'list');
	list.setAttribute('class', 'list');

	const listHeading = document.createElement('h2');
	listHeading.textContent = nameOfObject;
	listHeading.setAttribute('class', 'list__heading');

	list.append(listHeading);

	const listItem = document.createElement('li');
	listItem.setAttribute('class', 'list__item');

	const itemHeading = document.createElement('h3');
	itemHeading.textContent = object.name;

	listItem.append(itemHeading);

	const information = document.createElement('div');
	information.setAttribute('class', 'information');

	// Create Age
	const ageNumber = document.createElement('span');
	ageNumber.setAttribute('class', 'information__number');
	ageNumber.textContent = object.age;

	information.append(ageNumber);

	const ageDescription = document.createElement('span');
	ageDescription.textContent = 'Age';

	information.append(ageDescription);

	// Create Points
	const pointsNumber = document.createElement('span');
	pointsNumber.setAttribute('class', 'information__number');
	pointsNumber.textContent = object.points;

	information.append(pointsNumber);

	const pointsDescription = document.createElement('span');
	pointsDescription.textContent = 'Points';

	information.append(pointsDescription);

	// Create Happiness
	const happinessNumber = document.createElement('span');
	happinessNumber.setAttribute('class', 'information__number');
	happinessNumber.textContent = object.happiness;

	information.append(happinessNumber);

	const happinessDescription = document.createElement('span');
	happinessDescription.textContent = 'Happiness';

	information.append(happinessDescription);

	listItem.append(information);

	list.append(listItem);

	document.body.append(list);
}
