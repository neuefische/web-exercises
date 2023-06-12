console.clear();

const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - parseInt(event.target.value.length);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements.firstName);
  console.log(formElements.firstName.value);

  // With .elements
  /*
	const data = {
		firstName: formElements.firstName.value,
		lastName: formElements.lastName.value,
		age: formElements.age.value,
		email: formElements.email.value,
		date: formElements.date.value,
		subOptions: formElements.subOptions.value,
		personalMessage: formElements.personalMessage.value,
	};
	*/

  // With FormData
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();

  formElements.firstName.focus();
});
