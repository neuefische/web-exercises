const darkModeSwitch = document.querySelector("[data-js=darkmode-input]");

darkModeSwitch.addEventListener("input", () => {
  if (darkModeSwitch.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
