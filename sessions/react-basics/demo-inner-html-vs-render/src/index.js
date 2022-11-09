import { createRoot } from "react-dom/client";

const reactRootElement = document.querySelector("#react");
// this is the react way to create a "root" that react can render into
const reactRoot = createRoot(reactRootElement);

const innerHTMLRootElement = document.querySelector("#inner-html");

let count = 0;

// increment the count every second and render
setInterval(() => {
  count++;

  innerHTMLRootElement.innerHTML = /* html */ `
    <div>
      <h1>innerHTML</h1>
      <p>Count: ${count}</p>
      <textarea></textarea>
    </div>
  `;

  reactRoot.render(
    <div>
      <h1>React</h1>
      <p>Count: {count}</p>
      <textarea></textarea>
    </div>
  );
}, 1000);
