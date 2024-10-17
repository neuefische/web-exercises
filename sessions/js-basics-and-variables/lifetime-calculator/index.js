console.clear();

/*
Let's calculate some interesting facts based on the age of a user! It is expected that the user of this program provides a number as the input. The code for receiving this input is provided below.

Calculate the following:
- The number of days the person has lived.
- The expected number of remaining days for the person. Use an expected life span of 80 years.
- The percentage of already lived days in relation to the life expectancy.
- The cumulative number of days the person already slept in their life. Assume the person sleeps on average 8 hours per day.

Make sure to log every number with a nice descriptive text. Hint: you can combine text by using "+"

💡 You can ignore leap years.
*/

const currentAge = Number(process.argv[2]); // this gives you the <age> the user entered in the command "nodex index.js <age>"

console.log("Your current age is: " + currentAge);
