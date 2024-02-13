console.clear();

// Task 1

// import { getRandomColor } from "./utils/randomColor.js";

// const root = document.getElementById("root");

// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   let color = getRandomColor();
//   circle.style.backgroundColor = color;
// });

// const square = document.createElement("div");
// square.classList.add("square");
// square.addEventListener("click", () => {
//   let color = getRandomColor();
//   square.style.backgroundColor = color;
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   let color = getRandomColor();
//   pentagon.style.backgroundColor = color;
// });

// root.append(circle, square, pentagon);

// Task 2

import Circle from "./components/Circle/Circle";
import Square from "./components/Square/Square";
import Pentagon from "./components/Pentagon/Pentagon";

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
