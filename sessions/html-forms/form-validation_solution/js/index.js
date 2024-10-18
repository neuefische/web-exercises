console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // prevent page reload
  event.preventDefault();

  // gather data from the form and log it to the console
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
