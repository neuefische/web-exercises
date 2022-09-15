import {createList, createLogOutput, createObject} from './utils.js';

const students = [
	{name: 'Lucille', age: 30, points: 26, happiness: 5},
	{name: 'Gilbert', age: 45, points: 0, happiness: 1},
	{name: 'Jennie', age: 47, points: 39, happiness: 5},
	{name: 'Lydia', age: 29, points: 14, happiness: 2},
	{name: 'Agnes', age: 34, points: 39, happiness: 4},
];

createList(students, 'Original Students');

/** includes */

const happinessIncludesTwo = students.map(student => student.happiness).includes(2);

createLogOutput(happinessIncludesTwo, 'happinessIncludesTwo');

/** find and findIndex */

const personOverThirty = students.find(student => student.age > 30);

createObject(personOverThirty, 'personOverThirty');

const indexOfStudentWith39Points = students.findIndex(student => student.points === 39);

createLogOutput(indexOfStudentWith39Points, 'indexOfStudentWith39Points');

/** sort and reverse */

const sortedByAge = students.slice().sort((a, b) => a.age - b.age);

createList(sortedByAge, 'sortedByAge');

const sortedByName = students.slice().sort((a, b) => {
	const nameA = a.name.toLowerCase();
	const nameB = b.name.toLowerCase();
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}
	return 0;
});

createList(sortedByName, 'sortedByName');

const sortedByNameReversed = sortedByName.slice().reverse();

createList(sortedByNameReversed, 'sortedByNameReversed');

/** slice */

createList(students, 'Not Original Anymore');
createList(sortedByAge, 'Not Sorted By Age Anymore');

// Add slice() before the sort methods above

/** some and every */

const anyPersonHasZeroPoints = students.some(student => student.points === 0);

createLogOutput(anyPersonHasZeroPoints, 'anyPersonHasZeroPoints');

const everyPersonIsOlderThanThirty = students.every(student => student.age > 30);

createLogOutput(everyPersonIsOlderThanThirty, 'everyPersonIsOlderThanThirty');

/** reduce */

const totalNumberOfPoints = students.map(student => student.points).reduce((a, b) => a + b);

createLogOutput(totalNumberOfPoints, 'totalNumberOfPoints');
