console.clear();

const saveButton = document.querySelector('[data-js="save-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const restoreButton = document.querySelector('[data-js="restore-button"]');
const skipButton = document.querySelector('[data-js="skip-button"]');

// -- 1 -- Callbacks with buttons

// Anonymous callback function
saveButton.addEventListener("click", () => {
  console.log("handle save");
});

// Named callback function
function handleCancel() {
  console.log("handle cancel");
}

cancelButton.addEventListener("click", handleCancel);

// -- 2 -- Callbacks with buttons and event parameter

// Anonymous callback function
restoreButton.addEventListener("click", (event) => {
  console.log("handle restore");
  console.log(event);
});

// Named callback function
function handleSkip(event) {
  console.log("handle skip");
  console.log(event);
}

skipButton.addEventListener("click", handleSkip);

// -- 3 -- Callbacks without buttons

// Higher order function
function showText(transformation) {
  transformation("Changed By The Callback Function");
}

// Two functions used as callbacks
function lowercase(text) {
  const result = text.toLowerCase();
  console.log(result);
}

function uppercase(text) {
  const result = text.toUpperCase();
  console.log(result);
}

// Call function and pass callback
showText(lowercase);
showText(uppercase);
