console.clear();

function handleUserLogin(onSuccess) {
	onSuccess('JaneDoe', 'admin');
}

// The exercise starts here!

// You should write a callback function in two different ways.
// In both cases your callback function should accept two parameters: "userName" and "userRole".
// The following message should be logged to the console:
// "Welcome ${userName}! You are logged in now as ${userRole}."

// 1.
// Write a function with the "function" keyword named "showWelcomeMessage".
// Call "handleUserLogin" and pass your callback function as the first argument.
// (You should see the log from your callback message)

// 2.
// Write an anonymous function with the fat arrow syntax.
// Call "handleUserLogin" and pass your callback function as the first argument.
// (You should see the log from your callback message)
