import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">An Article</h2>
      <label htmlFor="myFirstInput">An input!</label>
      <input id="myFirstInput" type="text" />
      <a
        className="article__link"
        href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
      >
        Click me!
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
