console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6-12am: returns "Good Morning"
  - 12am - 6pm: returns "Good Afternoon"
  - 6pm - 10pm: returns "Good Evening"
  - 10pm - 6am: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
	// Code here
}

function getDayColor() {
	// Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
