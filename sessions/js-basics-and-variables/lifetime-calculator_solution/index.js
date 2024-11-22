console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = process.argv[2]; // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

// Constants
const hoursPerDay = 24;
const sleepHoursPerDay = 8;
const lifeExpectancyYears = 80;
const daysInAYear = 365;

const daysLived = currentAge * daysInAYear;
console.log("You have lived " + daysLived + " days.");

const remainingDays = (lifeExpectancyYears - currentAge) * daysInAYear;
console.log("You will probably live another " + remainingDays + " days.");

const percentage = (daysLived / (lifeExpectancyYears * daysInAYear)) * 100;
console.log(
  "You have lived approximately " + percentage + "% of your life expectancy."
);

const daysSlept = (daysLived * sleepHoursPerDay) / hoursPerDay;
console.log("You have slept a total of " + daysSlept + " days in your life.");
