import { formatUser } from "./utils";
import Counter from "./Counter/Counter";

const users = [
  { id: 1, email: "jane@doe.com", firstName: "Jane", lastName: "Doe" },
  { id: 2, email: "maria@maria.com", firstName: "Maria" },
  { id: 3, email: "john@doe.com" },
];

export default function App() {
  return (
    <main>
      <h1>Testing Examples</h1>
      <section>
        <h2>User List</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>{formatUser(user)}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <footer>&copy; 2023 ACME.</footer>
    </main>
  );
}
