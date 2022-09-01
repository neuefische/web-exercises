console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 4: givin an array of prgamming languages, use createElement to create a list of language tags

const ol = document.createElement('ol');
main.append(ol);

const programmingLanguages = [
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'PHP',
  'Ruby',
];

// --v-- write/change code here --v--

for (let value of programmingLanguages) {
  const li = document.createElement('li');
  li.textContent = value;
  ol.append(li);
}

// --^-- write/change code here --^--
