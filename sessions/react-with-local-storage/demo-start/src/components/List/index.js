import "./List.css";

export default function List({ todos, onToggleCheckTodo }) {
  return (
    <ul className="List">
      {todos.map((todo) => {
        return (
          <li className="List__item" key={todo.id}>
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
