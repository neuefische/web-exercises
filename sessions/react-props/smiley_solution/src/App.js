import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return (
    <span aria-label={isHappy ? "A happy smiley" : "A sad smiley"}>
      {isHappy ? "😌" : "😭"}
    </span>
  );
}
