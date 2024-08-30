export default function VanillaApp() {
  const appContainer = document.createElement("div");

  const button = Button();
  const button2 = Button();
  const button3 = Button();

  appContainer.append(button);
  appContainer.append(button2);
  appContainer.append(button3);

  return appContainer;
}

function Button() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "click with Vanilla JS";
  button.addEventListener("click", () => console.log("Hello Vanilla JS World"));
  return button;
}
