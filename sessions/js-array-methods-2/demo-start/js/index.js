import { handleList, handleSingleValue, handleObject } from "./utils.js";

const studentNames = ["Lucille", "Gilbert", "Jennie", "Lydia", "Agnes"];

const students = [
  { name: "Lucille", age: 30, points: 26, happiness: 5 },
  { name: "Gilbert", age: 45, points: 0, happiness: 1 },
  { name: "Jennie", age: 47, points: 39, happiness: 5 },
  { name: "Lydia", age: 29, points: 14, happiness: 2 },
  { name: "Agnes", age: 34, points: 39, happiness: 4 },
];

handleList(students, "Original Students");

/** includes */

const studentNamesIncludesHarry = null;

handleSingleValue(studentNamesIncludesHarry, "studentNamesIncludesHarry");

/** find and findIndex */

const personOverThirty = null;

// handleObject(personOverThirty, 'personOverThirty');

const indexOfStudentWith39Points = null;

// handleSingleValue(indexOfStudentWith39Points, 'indexOfStudentWith39Points');

/** sort */

const sortedByAge = null;

// handleList(sortedByAge, 'sortedByAge');

const sortedByName = null;

// handleList(sortedByName, 'sortedByName');

/** slice */

// handleList(students, 'Not Original Anymore');
// handleList(sortedByAge, 'Not Sorted By Age Anymore');

/** some and every */

const anyStudentHasZeroPoints = null;

// handleSingleValue(anyStudentHasZeroPoints, 'anyStudentHasZeroPoints');

const everyStudentIsOlderThanThirty = null;

// handleSingleValue(everyStudentIsOlderThanThirty, 'everyStudentIsOlderThanThirty');
