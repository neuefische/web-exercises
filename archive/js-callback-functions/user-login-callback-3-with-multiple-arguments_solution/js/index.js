console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
// named Callback
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}
handleUserLogin(showWelcomeMessage);

// anonymous Callback
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}`);
});
