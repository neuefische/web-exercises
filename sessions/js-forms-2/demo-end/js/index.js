console.clear();

const form = document.querySelector('[data-js="form"]');
const storage = document.querySelector('[data-js="storage"]');
const passwordInput = document.querySelector('[data-js="password-input"]');

function addStorageEntry(title, email, password) {
  const entry = document.createElement("li");
  entry.className = "storage__entry";

  const headline = document.createElement("h3");
  headline.className = "storage__title";
  headline.textContent = title;
  entry.append(headline);

  const descriptionList = document.createElement("dl");
  descriptionList.className = "storage__credentials";

  const descriptionTermEmail = document.createElement("dt");
  descriptionTermEmail.textContent = "Email:";
  descriptionList.append(descriptionTermEmail);

  const descriptionDetailsEmail = document.createElement("dd");
  descriptionDetailsEmail.textContent = email;
  descriptionList.append(descriptionDetailsEmail);

  const descriptionTermPassword = document.createElement("dt");
  descriptionTermPassword.textContent = "Password:";
  descriptionList.append(descriptionTermPassword);

  const descriptionDetailsPassword = document.createElement("dd");
  descriptionDetailsPassword.textContent = password;
  descriptionList.append(descriptionDetailsPassword);

  entry.append(descriptionList);

  storage.append(entry);
}

function updatePasswordStrength(text) {
  const percentage = Math.min(100, (text.length / 8) * 100);
  const color = percentage < 100 ? "var(--error)" : "var(--success)";
  passwordInput.style = `--strength: ${percentage}%; --color: ${color}`;
}

// ---v---v---v---v---v--- Event Handlers ---v---v---v---v---v---

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addStorageEntry(
    event.target.elements.title.value,
    event.target.elements.email.value,
    event.target.elements.password.value
  );

  event.target.reset();
  event.target.elements.title.focus();

  passwordInput.style = "";
});

passwordInput.addEventListener("input", (event) => {
  updatePasswordStrength(event.target.value);
});
