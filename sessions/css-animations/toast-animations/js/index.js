console.clear();

const startButton = document.querySelector('[data-js="start-button"]');
const toast = document.querySelector('[data-js="toast"]');
const countdown = document.querySelector('[data-js="countdown"]');

// Sets timeoutId initially to undefined.
let timeoutId;

startButton.addEventListener("click", () => {
  // We do not allow setTimeout to be called again
  // before it has called hideToast.
  // When hideToast is called, timeoutId is set to undefined
  if (timeoutId === undefined) {
    timeoutId = setTimeout(hideToast, 2000);
    toast.classList.remove("toast--hidden");
    countdown.classList.add("countdown--visible");
  }
});

toast.addEventListener("click", () => {
  clearTimeout(timeoutId);
  hideToast();
});

// These actions are in a separate function
// because we need them in two places in our code.
function hideToast() {
  timeoutId = undefined;
  toast.classList.add("toast--hidden");
  countdown.classList.remove("countdown--visible");
}
