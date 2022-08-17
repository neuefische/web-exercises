console.clear();

function handleUserLogin(onSuccess, onError, userName) {
	if (userName === 'Jane Doe') {
		onSuccess(userName, 'admin');
	} else {
		onError(`Unknown user "${userName}"`);
	}
}

// The exercise starts here!

// 1.
// Write a function with the "function" keyword named "showWelcomeMessage".
// The function should accept two parameters: "userName" and "userRole".
// The function should log the following message to the console:
// "Welcome ${userName}! You are logged in now as ${userRole}."

// 2.
// Write a function with the "function" keyword named "showErrorMessage".
// The function should accept one parameter "errorMessage"
// The function should log the following message to the console:
// "Login error: ${errorMessage}"

// 3.
// Call the function "handleUserLogin" and pass three arguments in this order:
// - callback function: "showWelcomeMessage"
// - callback function: "showErrorMessage"
// - user name string: "JaneDoe"
// (You should see the log from "showWelcomeMessage" in the console)

// 4.
// Call the function "handleUserLogin" and pass three arguments in this order:
// - callback function: "showWelcomeMessage"
// - callback function: "showErrorMessage"
// - user name string: "JohnFoo"
// (You should see the log from "showErrorMessage" in the console)
