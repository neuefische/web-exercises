console.clear();

/*
Lets calculate some interesting facts based on the age of a user! It is expected that the user of this program provides a number as the input. The code for receiving this input is provided below.

Calculate the following:
- The number of days the person has lived.
- The expected number of remaining days for the person. Use an expected life span of 80 years.
- The percentage of already lived time in relation to this life expectancy.
- The commulative number of days the person already slept in their life. Assume that the person sleeps on average 8 hours per day.

Make sure to log every number with a nice descriptive text.

💡 You can ignore leap years.
*/

const currentAge = process.argv[2]; // this gives you the <age> the user entered in the command "nodex index.js <age>"

console.log("Your current age is: " + currentAge);

// Constants
const hoursPerDay = 24;
const sleepHoursPerDay = 8;
const lifeExpectancyYears = 80;
const daysInAYear = 365;

const daysLived = currentAge * daysInAYear;
console.log("You lived " + daysLived + " days.");

const remainingDays = (lifeExpectancyYears - currentAge) * daysInAYear;
console.log("You will probably live another " + remainingDays + " days.");

const percantage = (daysLived / (daysLived + remainingDays)) * 100;
console.log("You lived approximately " + percantage + "% of you life span.");

const hoursOfSleep = (daysLived * sleepHoursPerDay) / hoursPerDay;
console.log("You slept a total of " + hoursOfSleep + " hours in your life.");
