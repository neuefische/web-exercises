import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(title) {
    setTodos([
      {
        id: nanoid(),
        title,
        isChecked: false,
      },
      ...todos,
    ]);
  }

  function handleToggleCheckTodo(idToToggle) {
    setTodos(
      todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  return (
    <main>
      <h1>Todo-App</h1>
      <Form onAddTodo={handleAddTodo} />
      <List todos={todos} onToggleCheckTodo={handleToggleCheckTodo} />
    </main>
  );
}
