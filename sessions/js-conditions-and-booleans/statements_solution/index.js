console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 8;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 9;

let totalPrice;

if (numberOfHotdogs < 5) {
  totalPrice = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  totalPrice = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  totalPrice = numberOfHotdogs * 1;
} else {
  totalPrice = numberOfHotdogs * 0.1;
}

const formattedPrice = totalPrice.toFixed(2);

console.log(`total price: ${formattedPrice} €`);

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Jessica";

const greeting = "Hello " + (name === "Jessica" ? "Coach" : name) + "!";

console.log(greeting);
