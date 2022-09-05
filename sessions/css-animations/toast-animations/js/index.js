console.clear();

const submitButton = document.querySelector('[data-js="submit"]');
const toast = document.querySelector('[data-js="toast"]');
let timeoutId = null;

toast.addEventListener('click', () => {
	exitToast();
	clearTimeout(timeoutId);
});

submitButton.addEventListener('click', () => {
	enterToast();
	timeoutId = setTimeout(exitToast, 5000);
});

function enterToast() {
	toast.classList.remove('exit');
	toast.classList.add('enter');
}

function exitToast() {
	toast.classList.remove('enter');
	toast.classList.add('exit');
}
