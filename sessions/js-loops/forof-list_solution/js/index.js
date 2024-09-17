console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (const language of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = language;
  ol.append(li);
}
// --^-- write/change code here --^--
