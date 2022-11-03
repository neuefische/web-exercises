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

const studentNamesIncludesHarry = studentNames.includes("Harry");

handleSingleValue(studentNamesIncludesHarry, "studentNamesIncludesHarry");

/** find and findIndex */

const personOverThirty = students.find((student) => student.age > 30);

handleObject(personOverThirty, "personOverThirty");

const indexOfStudentWith39Points = students.findIndex(
  (student) => student.points === 39
);

handleSingleValue(indexOfStudentWith39Points, "indexOfStudentWith39Points");

/** sort */

const sortedByAge = students.slice().sort((a, b) => a.age - b.age);

handleList(sortedByAge, "sortedByAge");

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

handleList(sortedByName, "sortedByName");

/** slice */

handleList(students, "Not Original Anymore");
handleList(sortedByAge, "Not Sorted By Age Anymore");

// Add slice() before the sort methods above

/** some and every */

const anyStudentHasZeroPoints = students.some(
  (student) => student.points === 0
);

handleSingleValue(anyStudentHasZeroPoints, "anyStudentHasZeroPoints");

const everyStudentIsOlderThanThirty = students.every(
  (student) => student.age > 30
);

handleSingleValue(
  everyStudentIsOlderThanThirty,
  "everyStudentIsOlderThanThirty"
);
