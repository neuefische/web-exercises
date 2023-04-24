console.clear();

const saveButton = document.querySelector('[data-js="save-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const restoreButton = document.querySelector('[data-js="restore-button"]');
const skipButton = document.querySelector('[data-js="skip-button"]');
const buttonContainer = document.querySelector(
  '[data-js="custom-button-container"]'
);

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

//Button Component
function Button(text, onClick) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  buttonElement.addEventListener("click", onClick);
  return buttonElement;
}

const alertButton = Button("show alert message", () => {
  alert("Hello world!");
});
buttonContainer.append(alertButton);

function handleSubmit() {
  console.log("Form was submitted!");
}

const submitButton = Button("submit", handleSubmit);
buttonContainer.append(submitButton);
