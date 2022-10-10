# Callback Function with multiple arguments

In this challenge, you will encounter the following tasks:

- using multiple parameters inside callback functions

## Tasks

You should write a callback function in two different ways.
In both cases your callback function should accept two parameters: "userName" and "userRole".
The following message should be logged to the console:
"Welcome ${userName}! You are logged in now as ${userRole}."

1.  Write a function with the "function" keyword named "showWelcomeMessage".
    Call "handleUserLogin" and pass your callback function as the first argument.
    (You should see the log from your callback message)

2.  Call "handleUserLogin" again but this time write the callback function as an anonymous function **inside** the function call (i.e. between the round brackets).
    (You should see the log from your callback message)

Please switch to the [./js/index.js](js/index.js) file to start the challenge.
