/* eslint-disable operator-assignment */
/* eslint-disable guard-for-in */
console.clear();

/* --------------------------------------- */
console.log('-----------------------------');
console.log('1. while');

/* 1. The while loop */

let string = 'a';

while (string.length <= 8) {
	console.log(string);
	string = string + string;
}

/* --------------------------------------- */
console.log('-----------------------------');
console.log('2. for');

/* 2. The for loop */

for (let counter = 0; counter < 4; counter++) {
	console.log(counter);
}

/* --------------------------------------- */
console.log('-----------------------------');
console.log('3. for...in');

/* 3. The for..in loop */

const user = {
	name: 'Alex',
	age: 28,
	email: 'alex@mail.com',
};

for (const key in user) {
	console.log(user[key]);
}

/* --------------------------------------- */
console.log('-----------------------------');
console.log('4. for...of');

/* 4. The for..of loop */

const fruits = ['apple', 'banana', 'melon'];

for (const fruit of fruits) {
	console.log(fruit);
}
