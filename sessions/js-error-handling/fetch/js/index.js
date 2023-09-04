console.clear();

const userElement = document.querySelector(".user");

async function loadUser(url) {
  console.log(url);
  const response = await fetch(url);
  const json = await response.json();
  const user = json.data;

  userElement.innerHTML = `
  <h2>${user.first_name} ${user.last_name}</h2>
  <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
  `;
}

document
  .querySelectorAll("button[data-url]")
  .forEach((button) =>
    button.addEventListener("click", (event) =>
      loadUser(event.target.dataset.url)
    )
  );
