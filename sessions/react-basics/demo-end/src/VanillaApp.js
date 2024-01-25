export default function VanillaApp() {
  const divContainer = document.createElement("div");

  const button1 = Button();
  const button2 = Button();
  const button3 = Button();

  divContainer.append(button1);
  divContainer.append(button2);
  divContainer.append(button3);

  return divContainer;
}

function Button() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "click with Vanilla JS";
  button.addEventListener("click", () => console.log("Hello Vanilla JS World"));
  return button;
}
