console.clear();

const submitButton = document.querySelector('[data-js="submit"]');
const toast = document.querySelector('[data-js="toast"]');
const countdown = document.querySelector('[data-js="countdown"]');

// Sets timeoutId initially to undefined.
let timeoutId;

submitButton.addEventListener("click", () => {
  // We do not allow setTimeout to be re-declared
  // before it has called hideToast.
  // When hideToast is called, timeoutId is set to undefined
  if (timeoutId === undefined) {
    timeoutId = setTimeout(hideToast, 2000);
    toast.classList.add("toast--visible");
    countdown.classList.add("countdown--start");
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
  toast.classList.remove("toast--visible");
  countdown.classList.remove("countdown--start");
}
