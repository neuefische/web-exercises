console.clear();

const questionElement = document.querySelector('[data-js="question"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = questionElement.getAttribute('maxLength');

const updateAmountLeft = value => {
	amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener('input', () => {
	updateAmountLeft(maxLength - questionElement.value.length);
});
