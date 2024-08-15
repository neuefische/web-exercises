const stringList = document.querySelector("[data-js='stringList']");
const stringOutput = document.querySelector("[data-js='string-output']");

const strings = [
  "HTML",
  "React",
  "CSS",
  "Next.js",
  "MongoDB",
  "styled components",
  "mongoose",
  "next-auth",
  "Visual Studio Code",
];

strings.forEach(function (string) {
  const card = document.createElement("li");
  card.classList.add("tag");
  card.innerHTML = `<span>${string}</span>`;
  stringList.append(card);
});
