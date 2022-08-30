console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  addTodo(data);
  form.reset();
  form.elements.headline.focus();
});

function addTodo(formProps) {
  const listItem = document.createElement('li');

  const headline = document.createElement('h2');
  headline.textContent = formProps.headline;
  listItem.append(headline);

  const task = document.createElement('p');
  task.textContent = formProps.task;
  listItem.append(task);

  todoList.append(listItem);
}
