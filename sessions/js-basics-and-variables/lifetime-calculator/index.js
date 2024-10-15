console.clear();

/*
Lets calculate some interesting facts based on the age of a user! It is expected that the user of this program provides a number as the input. The code for receiving this input is provided below.

Calculate the following:
- The number of days the person has lived.
- The expected number of remaining days for the person. Use an expected life span of 80 years.
- The percentage of already lived time in relation to this life expectancy.
- The commulative number of days the person already slept in their life. Assume that the person sleeps on average 8 hours per day.

Make sure to log every number with a nice descriptive text.

💡 You can ignore leap years. But if you are up for a challenge feel free to include them in your calculations.
*/

const currentAge = process.argv[2]; // this gives you the <age> the user entered in the command "nodex index.js <age>"

console.log("Your current age is:", currentAge);
