import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  return (
    <main className="app">
      <Form />
      <List tags={tags} />
    </main>
  );
}
