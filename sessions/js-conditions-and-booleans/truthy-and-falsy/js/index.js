// You don't have to touch this code.
// You can solve this exercise in the browser


function showAnswers() {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      span.classList.toggle("hidden");
    });
  }
  const button = document.querySelector("[data-js='show-answers']");
  button.addEventListener("click", showAnswers);