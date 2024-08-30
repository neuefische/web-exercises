import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  return (
    <main className="app">
      <Form />
      <List tags={tags} />
    </main>
  );
}
