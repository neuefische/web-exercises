console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const title = "Learning Javascript for Smarties";
const author = "Merle Mak";
let rating = 5;
let numberOfSales = 23345;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(`Title: ${title}`);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Number of Sales: " + numberOfSales);

rating = 7;

// numberOfSales = numberOfSales + 1000;
// numberOfSales = 24345;

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log(title + ", " + author + ", " + rating + ", " + numberOfSales);
}
// console.log(`${title} ${author} ${rating} ${numberOfSales})
logBookData();

//numberOfSales = numberOfSales + 500;
logBookData();

//numberOfSales = numberOfSales + 1000;
logBookData();

function logBookData2(numberOfSales) {
  console.log(title + ", " + author + ", " + rating + ", " + numberOfSales);
}

numberOfSales = numberOfSales + 1000;
logBookData2(numberOfSales);

// --^-- write your code here --^--
