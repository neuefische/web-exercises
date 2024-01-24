import { createRoot } from "react-dom/client";
//----------------------------------------------------------------------
// Button in Vanilla JS

// This is the dom element we use to append our vanilla js button to.
const vanillaJsRootElement = document.querySelector("#vanilla-js-root");

// Create a button element, set its type and text content, and add an event listener.
const button = document.createElement("button");
button.type = "button";
button.textContent = "click me";
button.addEventListener("click", () => console.log("Hello"));

// Append the button to the dom element.
vanillaJsRootElement.body.append(button);

//----------------------------------------------------------------------
// Button in React

// This is the dom element that React will render into,
// per convention, it is usually a div with an id of "root".
const reactRootElement = document.querySelector("#root");

// This is the "react" way to create a "root" that react can render into.
const reactRoot = createRoot(reactRootElement);

function Button() {
  const buttonText = "click to follow";

  return (
    <button type="button" onClick={() => console.log("Hello World")}>
      {buttonText}
    </button>
  );
}
// Call ".render()" on the root to render the elements into the DOM.
// Notice that this is NOT a template literal, it is JSX.
reactRoot.render(
  <>
    <Button />
    <Button />
    <Button />
  </>
);
