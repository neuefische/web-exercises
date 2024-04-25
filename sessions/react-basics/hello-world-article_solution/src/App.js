import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World again!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam harum
        debitis neque magni amet aliquid, voluptates adipisci excepturi odio
        eaque doloremque architecto voluptas repellendus, distinctio mollitia
        obcaecati quaerat rem nam!
      </p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
