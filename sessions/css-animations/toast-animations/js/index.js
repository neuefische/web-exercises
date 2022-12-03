console.clear();

const submitButton = document.querySelector('[data-js="submit"]');
const toast = document.querySelector('[data-js="toast"]');
const countdown = document.querySelector('[data-js="countdown"]');

let timeoutId;

submitButton.addEventListener("click", () => {
  // setTimeout functions can take longer than expected by calling them again.
  // We don't allow them to be called again until the timeoutId is set to undefined again.
  // We set the timeoutId to undefined every time we call hideToast.
  // classList.add() only needs to be called then as well.
  if (timeoutId === undefined) {
    timeoutId = setTimeout(hideToast, 2000);

    toast.classList.add("toast--visible");
    countdown.classList.add("countdown--start");
  }
});

toast.addEventListener("click", () => {
  // Prevents setTimeout from being executed anyway.
  clearTimeout(timeoutId);
  hideToast();
});

// These actions are in a separate function because
// they are needed in two places in our code.
function hideToast() {
  timeoutId = undefined;
  toast.classList.remove("toast--visible");
  countdown.classList.remove("countdown--start");
}
