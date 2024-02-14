import "./List.css";

export default function List({ todos, onToggleCheckTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <li className="list__item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => {
                onToggleCheckTodo(todo.id);
              }}
            />
            <span
              style={{
                textDecoration: todo.isChecked ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
